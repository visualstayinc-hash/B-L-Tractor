# Visual evidence index — Taqueria Jalisco (complete rebuild)

| File | What it shows | Result |
|---|---|---|
| `desktop-wide-initial.png`, `desktop-initial.png`, `tablet-initial.png`, `mobile-initial.png` | Full-page `verify.sh` screenshots at 1920/1440/1024/390px | 0 overflow, 0 console errors at every width — automated baseline, not the whole story (see below) |
| `threshold-start.png`, `threshold-mid.png`, `threshold-end.png` | Real, live (non-fullPage) screenshots at three real scroll positions inside `#threshold` | The signature arch interaction, verified genuinely working after a real bug was found and fixed — see entry 1 below |
| `section-murals.png` | Live screenshot of `#murals`, desktop | The real serenade mural, large asymmetric layout, real typography |
| `section-food.png` | Live screenshot of `#food`, desktop | Full-bleed real combo-plate photo with the topbar staying legible over a busy image |
| `menu-accordion.png` | Live screenshot of `#menu` with "Especialidades de la Casa" expanded | Real accordion state, `+`/`−` icon correctly reflecting expanded/collapsed |
| `section-reviews.png` | Live screenshot of the first real Google review, paired with a real food photo | Editorial integration, not a generic testimonial card |
| `section-visit.png` | Live screenshot of `#visit` | Real hours table, real `tel:`/maps links |
| `mobile-hero-recomposed.png` | Live mobile screenshot of the hero, post-fix | The photo/text collision (entry 2 below) resolved |
| `mobile-menu.png`, `mobile-reviews.png` | Live mobile screenshots | Clean stacking, no wrapping bugs, matches the discipline built in from the prior project's lessons |
| `tablet-murals.png`, `tablet-menu.png` | Live tablet screenshots (768px) | Confirms the murals section correctly collapses to single-column below the 860px breakpoint, menu unaffected |

## Bugs found and fixed (real evidence, both caught by actually inspecting screenshots, not by the automated checks)

1. **The signature interaction (arch threshold) did not work at all on the first build.** `scripts/verify.js` reported zero issues — but a full-page screenshot of a `position:sticky` scroll-driven interaction is fundamentally uninterpretable (same category of tooling limitation as `position:fixed` elements in the prior Taqueria Jalisco build), so the interaction was checked properly instead: live, non-fullPage screenshots at three real scroll positions inside the sticky stage. The result was two solid brown frames with almost nothing visible — the arch clip-path was rendering a roughly 40×45px sliver in the corner of the image, not a growing doorway. Root cause: `clipPathUnits="userSpaceOnUse"` (real pixel coordinates) was paired with a path written in fake 0–100 "percentage" units, so the entire clip shape occupied a tiny corner of a 1440×900 image regardless of the `scale()` transform applied to it. Fixed by rewriting the update function to compute the arch's actual `d` attribute in real viewport pixels on every scroll frame (`archPathD(cx, baseY, half, straightHeight)`), removing the broken transform-based scaling entirely. Re-verified at the same three scroll positions: `threshold-start.png` shows a small centered arch with a fragment of the mural peeking through; `threshold-mid.png` and `threshold-end.png` show the arch fully open, the entire mural visible and correctly framed, with the topbar still legible on top.
2. **Mobile hero: the photographed sign text and the HTML wordmark visually collided.** `object-fit:cover` cropping a wide landscape photo on a 390px portrait viewport left a partial, illegible fragment of the real painted sign ("...ALISCO...RESTAU...") sitting directly above the HTML "JALISCO" wordmark — reading as two competing, half-broken instances of the same word. Initially suspected as a text-overflow bug; ruled out via direct measurement (`Range.getBoundingClientRect()` on the actual text node: 225px of rendered text inside a 390px box, comfortably not overflowing). The real cause was the photo's own crop, not the CSS. Fixed with a mobile-specific `object-position` shift and a strengthened scrim gradient, so the photo reads as atmosphere rather than a second, competing text block. This is an honest trade-off, not a perfect fix — a wide sign photo will always crop significantly on a narrow portrait viewport; the fix manages that constraint rather than eliminating it.

## Interaction evidence (terminal output)

- **Threshold arch, numeric confirmation:** path `d` attribute's left/right x-coordinates at desktop (1440px viewport): start ≈ `[667.6, 772.4]` (a ~105px-wide arch, centered), mid ≈ `[-130.2, 1570.2]` (already wider than the viewport), end ≈ `[-360, 1800]` (fully covering, well past both edges) — confirms continuous, real growth tied to scroll position, not a single fire-once state.
- **Menu accordion, real click confirmation:** clicking the third category (`Especialidades de la Casa`) set its own `aria-expanded` to `"true"` and the first category's (previously open by default) to `"false"` in the same interaction — single-open behavior confirmed via actual DOM state changes.
- **`prefers-reduced-motion`:** the threshold's `frac` variable is forced to `1` (fully open) with no scroll dependency when reduced motion is requested — matching this project's established motion-accessibility discipline.

## Claim/content validation

- `grep -c "class=\"menu-item"` variants confirm 39 real menu rows: 31 priced items (cross-checked by hand against CONCEPT.md's sourced-facts list — every price traces to the brief's own researched data) + 8 "Also on the menu" rows added this pass (real categories, honestly unpriced, not omitted or invented).
- `grep -c "4.5"` returns 4 — hero meta, reviews eyebrow, review-source line, visit section — no Tripadvisor/Yelp rating citation remains.
- `grep -c "<svg"` returns 1 — the arch-clip mechanism only; zero decorative illustration SVGs remain (the prior build's invented sun/agave icon is fully retired).
- `grep -c "border-radius"` returns 2 (1–2px corner-softening, not pill shapes); `grep -c "gradient"` returns 3 (all functional photo-legibility scrims).
- `du -sh assets/` — 280KB for all 10 real photographs, optimized JPEG.

## This pass's evidence (brand board + accessibility/asset audit)

3. **Arch divider, real bug found and fixed.** First implementation used `viewBox="0 0 240 36" preserveAspectRatio="xMidYMid slice"` on an SVG rendered at ~1440×36 — a 6x aspect-ratio mismatch that scaled the pattern up and sliced away everything except a thin middle band, showing only vertical lines where arches should be. Confirmed via a close-up element screenshot (`divider-closeup.png` before the fix, not kept — the bug reproduction). Fixed by removing the viewBox entirely, letting the pattern tile at true 1:1 pixel scale. `arch-divider-light.png`, `arch-divider-dark.png`, `arch-divider-mobile.png` confirm the fix: a clean, legible repeating row of rounded arches at all three checkpoints.
4. **Menu completeness fix, real evidence.** `menu-also-on-menu.png` shows the new "Also on the menu" category open, all 8 previously-omitted categories present with "Ask your server" instead of either an invented price or a missing category — directly satisfying this task's explicit Section 15 correction.
5. **Real asset-resolution audit** (not a code-reference assumption): Playwright checked every live `<img>` element's `complete`/`naturalWidth` state — 12/12 resolved. Full detail in `ASSET_MANIFEST.md`.
6. **Real accessibility findings**: keyboard `Enter` on the menu accordion confirmed to produce the same `aria-expanded` state change as a mouse click; focus-outline confirmed not suppressed (`outline-style: auto`); a real WCAG contrast failure (4.41:1, just under the 4.5:1 AA minimum) was found by calculating the actual relative-luminance contrast ratio for the new "Ask your server" price text, and fixed (5.60:1 after the fix) — not eyeballed, computed.
