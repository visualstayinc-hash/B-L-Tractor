#!/usr/bin/env bash
# Runs the Playwright verification script against clearline-studio/index.html.
# Requires the environment's global Playwright install (see PROGRESS.md —
# NODE_PATH must point at it; `npx playwright` is not set up in this sandbox).
set -euo pipefail
cd "$(dirname "$0")"
NODE_PATH="${NODE_PATH:-/opt/node22/lib/node_modules}" node verify.js
