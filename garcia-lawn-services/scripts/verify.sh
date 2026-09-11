#!/usr/bin/env bash
# Quick manual smoke check for the Garcia Lawn Services build.
# Serves the site locally and opens it for manual inspection.
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${1:-8993}"
echo "Serving $DIR on http://localhost:$PORT"
python3 -m http.server "$PORT" --directory "$DIR"
