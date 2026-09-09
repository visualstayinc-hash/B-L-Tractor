# Visual evidence index — Taqueria Jalisco

| File | What it shows | Why it exists | Result |
|---|---|---|---|
| `desktop-wide-initial.png` | Full-page screenshot, 1920×1080 | F/V evidence at desktop-wide | PASS |
| `desktop-initial.png` | Full-page screenshot, 1440×900 | F/V evidence at desktop | PASS |
| `tablet-initial.png` | Full-page screenshot, 1024×768 | F/V evidence at tablet | PASS |
| `mobile-initial.png` | Full-page screenshot, 390×844 | F/V evidence at mobile | PASS — see notes below on the fixed-nav artifact in this specific screenshot type |
| `banner-nav-desktop.png` | Real (non-fullPage) screenshot at scrollY=0 | Evidence the banner nav is genuinely correct — full-page screenshots misrepresent `position:fixed` elements (see below) | PASS |
| `banner-nav-scrolled-story-active.png` | Real (non-fullPage) screenshot after scrolling into the mural/story section | Confirms the banner stays fixed at the real top of the viewport during scroll, and correctly highlights "Story" as the active flag | PASS |
| `mobile-menu-fixed.png` | Real (non-fullPage) mobile screenshot of the food section, post-fix | Confirms the paper-tear geometry fix (fixed-height band instead of `inset:0`) — the heading is fully legible, not clipped by a residual tear sliver | PASS |
| `mobile-visit-fixed.png` | Real (non-fullPage) mobile screenshot of the visit section, post-fix | Confirms the hours-table wrapping fix — each day/time reads on its own clean line, not fragmented across multiple short lines | PASS |

## Known Playwright tooling artifact — read before treating the banner nav as broken in `*-initial.png`

In every `fullPage:true` screenshot above, the banner nav (`Taqueria Jalisco` + Food/Story/Visit flags) appears to "float" partway down the page instead of at the top. **This is not a real bug.** Confirmed via:
1. Direct `boundingBox()` checks: `{x:0,y:0,width:1440,height:60}` at both `scrollY=0` and after scrolling 2000px — genuinely `position:fixed` at the top in both cases.
2. Targeted, real (non-fullPage) screenshots at multiple scroll positions — `banner-nav-desktop.png` and `banner-nav-scrolled-story-active.png` — both show the banner correctly fixed at the top of the actual viewport.

Root cause: Chromium's `fullPage` capture freezes `position:fixed` elements at their last real scroll-relative paint position rather than their true fixed-viewport position. `scripts/verify.js` was updated to scroll back to top before the fullPage capture; this did not eliminate the artifact (it just changed where the ghost appears), confirming the fix that matters is *not trusting fullPage screenshots for fixed-position elements* — use `boundingBox()` and targeted screenshots instead, as done here.

## Bugs found and fixed during Pass 1 (with evidence)

1. **Paper-tear overlay obscured section headings on tall sections.** `.tear` originally used `position:absolute;inset:0` with a percentage-based clip-path. On a section taller than ~1000px, the "open" state's residual covered band (9% of section height) was still on the order of 100+px of opaque paper — enough to sit directly over the section's own `<h2>`/eyebrow. Found by scrolling to `#food` in a real screenshot and reading "ON THE MENU" rendered as "ON THE .ENU" with the M visibly clipped by the still-covering paper edge. Fixed by making `.tear` a fixed-height band (340px desktop, 220px under 640px width) instead of `inset:0`, so the residual band stays a genuinely thin strip regardless of how tall the section's actual content is. Re-verified: `mobile-menu-fixed.png` shows "ON THE MENU" fully legible.
2. **Illegible line-wrapping in `.menu-item` and `.visit-row` on narrow viewports.** Neither had wrap protection; the hours table specifically broke into fragments like "Tuesday7:00 / AM – / 10:00 / PM" — real information (when the restaurant is open) rendered unreadable. Fixed with `white-space:nowrap` on the value elements plus a `@media (max-width:420px)` rule stacking label above value instead of forcing a cramped shared row. Re-verified: `mobile-visit-fixed.png` shows every day/time pair on clean, separate lines.

## Interaction evidence (terminal output, recorded here per QUALITY_GATE.md's evidence pointer)

- **Paper-tear is a real state change, not decoration:** `document.querySelector('#food .tear').classList.contains('tear--open')` read `false` before scrolling `#food` into view and `true` after scroll + a 1.5s settle — confirmed via Playwright, not assumed from the CSS alone.
- **`prefers-reduced-motion` resolves instantly:** the same check on `#mural`'s tear, under a `reducedMotion:'reduce'` browser context, read `true` with *no scroll at all* — matching this project's established motion-accessibility discipline (draw-ons/reveals must resolve instantly under reduced motion, not just animate faster).

## Claim/content validation

- `grep` for `<img` returns 0 — no raster images, all visuals are original inline SVG/CSS, matching CONCEPT.md's disclosed-illustration image strategy.
- `grep` for `gradient` returns exactly 1 hit — the visit-sign's papel-picado-striped top edge (`repeating-linear-gradient` used as a deliberate cut-paper-banner motif), not a decorative background gradient.
- `grep` for `border-radius` returns 0 — no pill buttons, no rounded-card treatment anywhere in the file.
- Menu prices cross-checked against CONCEPT.md's sourced-facts list: every specific price on the page ($16.99, $11.99) is one of the two independently-sourced prices found during research; every other item is explicitly labeled "market price," never an invented number.
