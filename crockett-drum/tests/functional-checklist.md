# Functional Checklist

- [x] `tel:+18068660588` — single consistent href across every CTA (Playwright-verified)
- [x] Directions CTA — real Google Maps URL built from the verified address, opens in a new tab
- [x] Three-system selector: clicking each tab changes headline, description, metadata text, AND diagram branch opacity — verified via DOM state reads, not just visual inspection
- [x] Problem→solution cards link to `tel:` (real action, not a fake diagnostic tool)
- [x] Mobile nav toggle opens/closes
- [x] Active-state `.reveal` scroll-in animations fire via IntersectionObserver
- [x] `prefers-reduced-motion` respected: flow-dash and pulse-ring animations collapse to near-zero duration, content stays fully visible
- [x] Zero console/page errors besides the known Google Fonts CDN block in this sandbox
- [x] WCAG AA contrast (relative-luminance formula) passes on every text/background pair in use
- [x] No fabricated star rating rounding, review count, service list, or years-in-business beyond what a dedicated research pass could verify
