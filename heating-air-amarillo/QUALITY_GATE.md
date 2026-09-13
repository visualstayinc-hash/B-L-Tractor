# Quality Gate — Heating & Air Conditioning Amarillo

| ID | Check | Status |
|----|-------|--------|
| B01 | Business identity clear | PASS — name/phone/CTA visible immediately on hero load |
| B02 | Hero immediately memorable | PASS — draw-in airflow lines + off-set HVAC unit graphic |
| B03 | Temperature concept obvious | PASS — hero thesis + dedicated Temperature Control section |
| B04 | Airflow interaction works | PASS — verified: lines drawn in, color/speed respond to temp |
| B05 | Temperature interaction works | PASS — verified: bg/label/lines change across 60–85° range |
| B06 | Heat state works | PASS — verified: duct color, title, description update |
| B07 | Cool state works | PASS — verified: duct color, title, description update |
| B08 | HVAC system visualization works | PASS — schematic + moving airflow dot, verified |
| B09 | Services accurate | PASS — heating, furnace repair, AC service, maintenance, installation only |
| B10 | No unsupported service claims | PASS — no duct cleaning/IAQ/geothermal/commercial/24-7/financing claims |
| B11 | Google rating accurate | PASS — 4.4★ as supplied |
| B12 | Review count accurate | PASS — 7 as supplied |
| B13 | Reviews authentic | PASS — verbatim client-supplied text, including the negative review |
| B14 | Phone correct | PASS — (806) 256-7285 as supplied |
| B15 | Phone CTA works | PASS — tel:+18062567285 verified in nav/hero/temp/problem/contact/mobile bar |
| B16 | Address correct | PASS — 1931 S Woodland St as supplied |
| B17 | Directions work | PASS — Google Maps directions link verified |
| B18 | Mobile works | PASS — verified at 390px, no overflow, action bar present |
| B19 | Desktop works | PASS — verified at 1920/1440/1024px |
| B20 | No horizontal overflow | PASS — verified at 4 widths + reduced motion |
| B21 | No broken assets | PASS — no external images, Google Fonts only |
| B22 | No console errors | PASS — only the known sandboxed Google Fonts CDN block |
| B23 | Reduced-motion works | PASS — content and final states preserved statically |
| B24 | Animation has purpose | PASS — every motion ties to airflow/temperature/system state |
| B25 | Anti-template passes | PASS — architecture depends on airflow/temperature/duct geometry |
| B26 | Anti-AI-slop passes | PASS — no card grids, no glassmorphism, no fake stats |
| B27 | Visual hierarchy passes | PASS |
| B28 | Locally credible | PASS — real Amarillo address/phone, no forced Texas cliché |
| B29 | Feels original | PASS |
| B30 | Feels complete | PASS |

## Real bugs found and fixed during build
1. Hero's HVAC unit graphic was centered directly on top of the hero headline/body text, making both illegible — repositioned off to the right side (hidden entirely on narrow viewports where there's no room for it).
2. Two CSS rules both set the `animation` shorthand on the same airflow-line elements (one-shot draw-in vs. a continuous "drift" loop) — the second silently overwrote the first, so the airflow lines never actually drew in and stayed invisible. Removed the drift animation (which also wouldn't have been visually meaningful given the dash pattern used) and kept the functional draw-in reveal. Confirmed via computed-style check that opacity now reaches 0.55 and dashoffset reaches 0.
3. The Problem/Solution chips and Reviews category selector were clickable `<div>`s with no keyboard access (no focus, no Enter/Space handling) — converted to real `<button>` elements and verified via keyboard-only interaction (Tab, focus, Enter) that both now work.

## Anti-template test
Could not be relabeled as a plumber/roofer/electrician site without rebuilding the temperature-driven atmosphere stage, the airflow SVG system, and the duct/vent schematic — all specific to HVAC/climate.

## Honest facts note
Research strongly suggested this Google listing's generic name maps to a differently-named real business ("Premier Heating & Air") with a different phone number used everywhere except this specific listing. That's a business-identity decision, not a copywriting gap — so the client's supplied name and phone number were kept exactly as given, and the discrepancy was flagged to the client rather than resolved unilaterally.
