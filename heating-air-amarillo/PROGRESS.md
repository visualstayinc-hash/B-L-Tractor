# Progress — Heating & Air Conditioning Amarillo

- [x] Research pass on the business (flagged a likely different formal name/phone in wider use — not acted on unilaterally, kept client-supplied facts, flagged to client).
- [x] Pass 1 — Composition/hero: nav, hero, section order locked; palette and typography chosen and contrast-checked before writing markup.
- [x] Pass 2 — Temperature/system interaction: temperature control stage, HVAC schematic + Heat/Air/Cool selector, Problem/Solution chips all built and functionally verified via Playwright.
- [x] Pass 3 — Typography/visual identity/motion: airflow SVG system, hero entrance sequence, review category browser.
- [x] Pass 4 — Mobile/polish/conversion: mobile screenshots reviewed, action bar, nav off-canvas, no overflow at 4 breakpoints, reduced-motion collapse verified.
- [x] Real bug found and fixed: hero HVAC unit graphic overlapping hero text — repositioned/hidden on mobile.
- [x] Real bug found and fixed: airflow lines never drew in due to a CSS `animation` shorthand collision between two rules — removed the broken drift animation, kept the functional draw-in.
- [x] Real bug found and fixed: Problem/Solution chips and Review category selector were unfocusable `<div>`s — converted to `<button>`, verified keyboard operability (Tab, focus, Enter).
- [x] WCAG contrast audit run on real computed styles; two apparent failures traced to a test-script nested-transparency blending bug and confirmed as false positives (real values 14.84:1 and 14.40:1).
- [x] Shipped: committed, pushed, delivered to user.
