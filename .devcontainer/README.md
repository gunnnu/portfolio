# Dev container

Reproduces the environment this site is developed and measured in, so results
match rather than drift.

| | |
|---|---|
| OS | Ubuntu 24.04 |
| Node | 22 |
| Python | 3.11 |
| Playwright | 1.56.0 |
| Chromium | 141.0.7390.37 (revision 1194) |

## Why the browser version is pinned

`DESIGN.md` records measured numbers — the build rail centres on x = 28, the
timeline dot on x = 7, tap targets clear 44 px, `--text-faint` clears 4.5:1.
Those were taken in Chromium 141. A different build can move sub-pixel results
enough to turn a passing check into a failing one, so Playwright is pinned to
`1.56.0`, the release that ships revision 1194.

## Running it

**GitHub Codespaces** — *Code → Codespaces → Create codespace*. First build
takes a few minutes while Chromium downloads; enable a prebuild on `main` and
it becomes near-instant.

**Locally** — VS Code with the Dev Containers extension, then *Reopen in
Container*. Works with Docker Desktop, Colima or Podman.

## Commands

```bash
npm --prefix .devcontainer run serve     # preview on port 8899
npm --prefix .devcontainer run verify    # smoke-test the environment
npm --prefix .devcontainer run detect    # impeccable anti-pattern detector
```

`verify` is the one that matters after any environment change: it serves the
site, drives Chromium at 390 px and 1440 px, asserts the geometry above, checks
both themes and all three prototype routes, and runs the detector. If it passes,
measurements taken here can be trusted against the numbers in `DESIGN.md`.

## Notes

- **Submodules are required.** `.claude/skills/` is 44 symlinks pointing into
  four submodules. Without `git submodule update --init`, every one dangles —
  and the directory still lists normally, which makes it a confusing thing to
  debug. `setup.sh` handles it and warns if any link is broken.
- **Serve binds `0.0.0.0`, not `127.0.0.1`.** Codespaces forwards ports from
  outside the container's loopback, so a localhost-only bind is invisible to
  your browser even though the tests can still reach it.
- **None of this ships.** The site has no build step and no runtime
  dependencies; the Pages workflow stages only `index.html`, `.nojekyll`,
  `CNAME` and `proto/`.
- **WebKit is not included.** It is worth adding if you want Safari coverage
  (`npx playwright install webkit`), but be aware the numbers in `DESIGN.md`
  were all taken in Chromium.
