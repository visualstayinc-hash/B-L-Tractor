# Crockett Drum Plumbing Heating & Air — Quality Gate

Evidence-based pass/fail against the brief's B01–B30 matrix.

| # | Item | Status | Evidence |
|---|------|--------|----------|
| B01 | Crockett Drum identity immediately clear | PASS | Hero: "CROCKETT DRUM" + Plumbing/Heating/Air labels, address/phone in Contact |
| B02 | Hero is highly distinctive | PASS | Converging animated SVG pipe network, not a stock photo hero |
| B03 | Water animation works | PASS | Blue flow-dash path + moving droplet marker, verified `animateMotion` running |
| B04 | Airflow animation works | PASS | Cyan flow-dash path + moving marker, independent timing from water/heat |
| B05 | Heat animation works | PASS | Orange flow-dash path + moving marker |
| B06 | Three systems interact meaningfully | PASS | System selector: clicking a tab changes headline/description/metadata text AND which diagram branch is highlighted — verified via DOM state reads before/after click, not just visual |
| B07 | Website does not depend on photography | PASS | Zero raster images anywhere on the site — 100% inline SVG/CSS |
| B08 | No fake business imagery | PASS | No image anywhere claims to be "our team," "our truck," or "our work" |
| B09 | Services accurate | PASS | Plumbing/Heating/Air categories from verified research; specific jobs (faucet, water heater, gas line) attributed only to the reviews that confirm them |
| B10 | Reviews accurate | PASS | All 4 supplied review excerpts reproduced verbatim; truncated Jerry Reyes review explicitly disclosed as truncated, not completed |
| B11 | 4.4★/38 reviews represented correctly | PASS | Shown as 4.4 (not rounded to 5), 38 reviews, with an explicit "not a perfect one" / mixed-feedback disclosure |
| B12 | Phone number correct | PASS | (806) 866-0588 / `tel:+18068660588` — single consistent href confirmed via Playwright |
| B13 | Address correct | PASS | 8808 Urbana Ave, Lubbock, TX 79424 |
| B14 | Call CTA works | PASS | `tel:` links throughout, verified |
| B15 | Directions CTA works | PASS | Real Google Maps directions URL built from the verified address, verified href |
| B16 | Mobile passes | PASS | Zero overflow at 390px; hero vignette fix keeps text legible over the background animation |
| B17 | Desktop passes | PASS | Verified at 1920/1440/1024px, zero overflow |
| B18 | No horizontal overflow | PASS | Confirmed false at all 4 tested viewports |
| B19 | No broken assets | PASS | No external image assets to break — all inline SVG |
| B20 | No console errors | PASS | Zero errors besides the known Google Fonts CDN block in this sandbox |
| B21 | Motion is purposeful | PASS | Every animated element maps to a real system concept (flow, pulse, convergence) — no decorative-only motion |
| B22 | Anti-template passes | PASS | The whole architecture (3-system selector, pipe/duct diagram, problem→system diagnosis) depends specifically on plumbing/heating/air — swapping the copy for a dentist or lawyer breaks the entire interaction model |
| B23 | Anti-AI-slop passes | PASS | No glassmorphism, no generic icon-grid-only services, no fake stats/certifications |
| B24 | Visual hierarchy passes | PASS | Reviewed via full-page screenshots at each section |
| B25 | Feels professional | PASS | Consistent typographic and color system throughout |
| B26 | Feels original | PASS | Custom-built system diagram and interaction, not a template pattern |
| B27 | Feels specifically built for plumbing/heating/air | PASS | Water/heat/air color-coding and iconography used consistently as the site's core structural language |
| B28 | Customer trust is clear | PASS | Honest 4.4★ rating, real reviews (including an explicit mixed-feedback note), verified hours/services disclosed with their sourcing |
| B29 | Website is fast enough | PASS | No raster images, only SVG/CSS/small JS — all animation via `transform`/`opacity`/stroke-dash, GPU-friendly |
| B30 | Website feels complete | PASS | Hero → system selector → how it works → services → problem/solution → reviews → contact → closing system visual → footer, all built and verified |

## Real bugs found and fixed
1. Duplicate "Call Now" pill on desktop nav (missing `display:none` default on the mobile-only CTA).
2. Hero background system-path lines crossing directly through headline/body text on mobile — fixed with a dedicated radial vignette.
3. WCAG contrast failures on `--water` (eyebrow/label text) and `--heat` (star-rating color) against light backgrounds, computed via the relative-luminance formula — both darkened and re-verified.

See CONCEPT.md for full detail and PROGRESS.md for the verification log.
