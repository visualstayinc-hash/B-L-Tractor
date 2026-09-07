# PROGRESS.md — Clearline Studio

Persistent state. If context resets or a new session begins, read this file first (after `pwd`), then QUALITY_GATE.md, CONCEPT.md, tests/*.md, then check `git status` and recent commits, then run the app, then continue from the first unresolved FAIL in QUALITY_GATE.md. Never restart from memory.

## Location

`/home/user/B-L-Tractor/clearline-studio/` — single-file site at `clearline-studio/index.html`, control docs at the paths listed below.

## File map

- `CONCEPT.md` — locked creative direction. Do not drift from it silently.
- `QUALITY_GATE.md` — authority on pass/fail. Read before claiming anything is done.
- `benchmarks/` — reference notes (mostly BLOCKED — no live network access in this sandbox).
- `tests/visual-checklist.md`, `tests/functional-checklist.md` — test list, written before implementation.
- `scripts/verify.sh` — Playwright-based verification runner.
- `artifacts/visual/` — screenshots + index.md, evidence for QUALITY_GATE.md rows.
- `artifacts/final/` — final evidence package (created at the end, not before).
- `FINAL_REVIEW.md` — written last.

## State log

- [DONE] CONCEPT.md written and locked.
- [DONE] benchmarks/ written (honest — most entries BLOCKED, no live network access).
- [DONE] QUALITY_GATE.md skeleton written, all rows FAIL/BLOCKED.
- [DONE] PROGRESS.md, tests/*.md, scripts/verify.sh.
- [DONE] Pass 1 build (index.html — concept + composition).
- [DONE] Pass 1 verification. Real bugs found and fixed: mobile overflow (unbroken email text), a test-tooling false negative in verify.js itself (fixed by scrolling for real before screenshots), and a layout-thrashing read-after-write bug in render(). QUALITY_GATE.md updated with real evidence — see it for the full row-by-row state. **Known FAILs carried into Pass 2**: F03 (buttons untested), F06 (keyboard nav untested), F07 (hover untested), F08 (scroll settle untested), F10 (form validation untested), S05 (`.crosshair` CSS class defined but never applied — dead code), MO01/MO02 (no dedicated motion-hierarchy review yet), C04 (no persistent contact affordance — real UX gap, not just untested).
- [DONE] Pass 2 (interaction + motion). Fixed: C04 (persistent "Start a line" link in the spine), S05 (real coordinate readout replacing dead `.crosshair` CSS), PF04 (layout-thrashing read-after-write in `render()`). Tested and confirmed PASS with real evidence: F03, F06, F07, F10, MO01, MO02. Two false negatives found and fixed in the *test scripts themselves* (not the site) — see artifacts/visual/index.md. **Remaining known FAILs, deliberately deferred, not forgotten**: F08 (scroll-settle jank), F09/M02/M04 (touch-specific spine drag — only mouse-pointer-tested so far), F14 (reduced motion), PF03 (layout shift across load states).
- [DONE] Pass 3 (typography + image + portfolio). Real bugs found and fixed: (1) all six portfolio plots shared an identical layout — fixed with alternating `.plot--rev` sides; (2) that fix itself caused a mobile overflow regression via a CSS-specificity conflict with the responsive media query — caught immediately and fixed; (3) the tick-clustering noted visually in Pass 1 turned out to be a real functional bug, not cosmetic — `offsetTop` was relative to the wrong ancestor for nested `.plot-N` sections, corrupting the drag-snap target math for 6 of 9 ticks. Fixed with a `getBoundingClientRect()`-based `docTop()` helper used everywhere instead. Typography and image-strategy honesty both held up under dedicated review, no changes needed there.
- [DONE] Pass 4 (responsive + micro-polish + performance). All real, with real touch events (CDP `Input.dispatchTouchEvent`) confirming F09/M02/M04. Reduced motion confirmed genuinely instant (F14) — spine spring skipped entirely, draw-on skipped entirely, both verified by frame-by-frame sampling, not just code inspection. F08's one flagged "stuck" element turned out to be mid-transition at the exact moment sampled (0.29px offset, resolved to exactly 0px given more time) — investigated and confirmed not a real bug. PF03 (layout shift) confirmed zero reflow. **QUALITY_GATE.md: every row is now PASS.**
- [IN PROGRESS] Final evidence package + FINAL_REVIEW.md + ship (commit/push/artifact/deliver).

## Known environment constraints (do not re-discover these — they are already established)

- No live outbound network access to arbitrary domains. Google Fonts CSS/font fetches fail with `ERR_CONNECTION_RESET` in Playwright — this is expected and not a bug to fix; the fallback stack must render acceptably (F13).
- Playwright is available via the global npm install at `/opt/node22/lib/node_modules` — invoke with `NODE_PATH=/opt/node22/lib/node_modules node <script>.js`, not `npx playwright`.
- Playwright's `.click({ })` actionability pre-check can misreport "intercepts pointer events" for `position:fixed` elements even when `elementFromPoint` confirms the target is correctly on top — cross-check with `elementFromPoint` before treating that specific error as a real bug (established during the Texas Pride Concrete build earlier this session).
- A real, reproducible Chromium bug: an element that is both an `IntersectionObserver` target *and* carries `clip-path` stops receiving further intersection callbacks once clipped to zero visible area. Never observe a clipped element directly — observe an unclipped ancestor and reveal descendants from its callback.
