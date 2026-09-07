# Functional checklist — written before implementation

Maps 1:1 to the Functional section of QUALITY_GATE.md (F01–F14). Do not edit this checklist to make a failure disappear — if a test seems wrong once the build exists, fix the test's rationale here explicitly and explain why, don't just delete it.

- [ ] **Routing/anchors** — every `href="#..."` lands on the correct section (Playwright: click, assert `scrollY` changed to the expected section's offset).
- [ ] **Line-scrub navigation** — dragging the spine changes the active section indicator; releasing near a tick snaps to it (Playwright: pointerdown/pointermove/pointerup sequence, assert active-section state before/after).
- [ ] **Buttons** — contact submit, plot open, plot close all fire (Playwright: click, assert resulting DOM/class change).
- [ ] **Responsive breakpoints** — 1920, 1440, 1024 (tablet), 390 (mobile) all render without horizontal overflow or clipped text.
- [ ] **Overflow** — `document.documentElement.scrollWidth <= document.documentElement.clientWidth` at every tested width.
- [ ] **Keyboard navigation** — Tab reaches every link/button/canvas-alternative in a sane order; each has a visible focus ring.
- [ ] **Hover interactions** — buttons and plot entries have a visibly distinct hover state (screenshot diff).
- [ ] **Scroll behavior** — no janky mid-transition state left behind after scroll settles (screenshot after settle wait).
- [ ] **Mobile menu / mobile nav equivalent** — the line-scrub's mobile adaptation is actually operable by a touch drag, not just visible.
- [ ] **Forms ("start a line")** — required contact fields validate; submit does not throw; canvas draw registers a mark.
- [ ] **Console errors** — zero `pageerror`; zero unexpected `console.error` (the blocked Google Fonts fetch is the one expected/acceptable error).
- [ ] **Image loading** — confirm actual asset strategy first (CONCEPT.md commits to no raster images — verify this holds, rather than assuming).
- [ ] **Font loading** — fallback stack is acceptable when Google Fonts is blocked, which it is in this sandbox by default.
- [ ] **Reduced motion** — `prefers-reduced-motion: reduce` emulated in Playwright; draw-on/spring effects resolve instantly, page stays usable.
