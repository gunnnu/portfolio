#!/usr/bin/env bash
cat <<'EOF'

  Portfolio dev container — Ubuntu 24.04 · Node 22 · Python 3.11 · Chromium 141

    npm --prefix .devcontainer run serve     preview on port 8899
    npm --prefix .devcontainer run verify    smoke-test the environment
    npm --prefix .devcontainer run detect    run the impeccable detector

  The site is index.html — no build step. Prototypes live in proto/.
  Design decisions and their reasoning are in DESIGN.md; read it before
  changing spacing, motion or the timeline geometry.

EOF
