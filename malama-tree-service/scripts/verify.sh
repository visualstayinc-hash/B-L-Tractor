#!/usr/bin/env bash
# Minimal local verification: serve the site and open it for a manual check.
# (Automated Playwright checks for this project were run ad hoc during
# development — see PROGRESS.md and QUALITY_GATE.md for the recorded results.)
set -e
cd "$(dirname "$0")/.."
PORT="${1:-8940}"
echo "Serving malama-tree-service on http://localhost:$PORT"
python3 -m http.server "$PORT"
