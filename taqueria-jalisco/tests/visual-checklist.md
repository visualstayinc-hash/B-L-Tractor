# Visual checklist — Taqueria Jalisco

Written before/alongside implementation; checked against real screenshots, not assumed.

- [x] Hero uses the real storefront photograph, not an invented illustration
- [x] Hero wordmark uses Rye (matches real signage character), not a generic poster font
- [x] Signature interaction (arch threshold) verified at 3+ real scroll positions, not just coded and assumed
- [x] Murals section shows all 4 real murals, each with distinct framing/scale (not equal-size cards)
- [x] Food section built around real photography (combo plate hero + crispy tacos/margarita detail)
- [x] Menu organized by real categories, accordion behavior verified (single-open, `aria-expanded` toggling correctly)
- [x] Reviews section shows all 3 real Google reviews verbatim, paired with real imagery, not generic testimonial cards
- [x] Visit section states real hours/address/phone, correct `tel:`/maps links
- [x] Desktop (1440px), tablet (768/1024px), mobile (390px) each inspected via real screenshots
- [x] Mobile hero photo/text collision found and addressed (object-position + scrim), not left as a silent defect
- [x] No pill buttons, no glassmorphism, no gradient blobs, no generic card grids — `grep` confirmed: 2 `border-radius` uses, both 1–2px (near-square corner softening on the phone-call button and the tiny menu accordion icon, not pill shapes); 3 `gradient` uses, all functional photo-legibility scrims (darkening overlays behind hero/food-hero text), none decorative
- [ ] Deeper micro-spacing/crop/rhythm pass (Pass 4) — not yet done, named honestly in PROGRESS.md
