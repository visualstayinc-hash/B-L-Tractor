#!/usr/bin/env bash
# Quick manual smoke check for the Heating & Air Conditioning Amarillo build.
# Serves the site locally for manual inspection.
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${1:-8994}"
echo "Serving $DIR on http://localhost:$PORT"
python3 -m http.server "$PORT" --directory "$DIR"
