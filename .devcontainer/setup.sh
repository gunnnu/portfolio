#!/usr/bin/env bash
#
# One-time container setup. Idempotent: safe to re-run by hand if something
# needs repairing without rebuilding the container.
#
set -euo pipefail

cd "$(dirname "$0")/.."
REPO="$PWD"
BROWSERS="${PLAYWRIGHT_BROWSERS_PATH:-/opt/pw-browsers}"

step() { printf '\n\033[1m==> %s\033[0m\n' "$1"; }

step "Submodules"
# The four design-skill repos are submodules, and .claude/skills is a directory
# of symlinks pointing into them. Skip this and every one of those links
# dangles, which is confusing to debug because the directory still lists fine.
git submodule update --init --recursive --depth 1
echo "    $(git submodule status | wc -l) submodule(s) checked out"

step "Playwright browser directory"
# Matches the sandbox path. Needs sudo to create under /opt, then handed to the
# container user so `playwright install` can write into it unprivileged.
if [ ! -d "$BROWSERS" ]; then
  sudo mkdir -p "$BROWSERS"
fi
sudo chown -R "$(id -u):$(id -g)" "$BROWSERS"
echo "    $BROWSERS ready"

step "Test tooling"
cd "$REPO/.devcontainer"
# npm ci when the lockfile is present, npm install to create it the first time.
if [ -f package-lock.json ]; then
  npm ci --no-audit --no-fund
else
  npm install --no-audit --no-fund
fi

step "Chromium"
# --with-deps pulls the shared libraries headless Chromium needs on a clean
# Ubuntu image (fonts, libnss3, libasound2 and friends). It escalates with sudo
# itself, which is passwordless in this image.
npx playwright install --with-deps chromium

step "Checks"
cd "$REPO"
node -e "
const { chromium } = require('./.devcontainer/node_modules/playwright');
chromium.launch().then(async b => {
  console.log('    chromium ' + b.version() + ' launches OK');
  await b.close();
}).catch(e => { console.error('    chromium FAILED: ' + e.message.split('\n')[0]); process.exit(1); });
"
python3 -c "import sys; print('    python ' + sys.version.split()[0])"
node -e "console.log('    node ' + process.version)"

# A dangling skills symlink means the submodule step silently did nothing.
broken=$(find .claude/skills -maxdepth 1 -xtype l 2>/dev/null | wc -l)
if [ "$broken" -ne 0 ]; then
  echo "    WARNING: $broken broken symlink(s) under .claude/skills"
else
  echo "    $(find .claude/skills -maxdepth 1 -type l | wc -l) skill symlinks resolve"
fi

printf '\n\033[1mSetup complete.\033[0m Run `npm --prefix .devcontainer run verify` to smoke-test.\n'
