# Functional Checklist

- [x] `tel:+18065353352` — single consistent href across every CTA (Playwright-verified)
- [x] Directions CTA — real Google Maps URL built from the supplied address, opens in a new tab
- [x] Power Grid selector: clicking each tab changes headline, description, metadata text, AND circuit branch opacity — verified via DOM state reads, not just visual inspection
- [x] Problem→solution cards link to `tel:` (real action, not a fake diagnostic tool)
- [x] Mobile nav toggle opens/closes
- [x] `.reveal` scroll-in animations fire via IntersectionObserver
- [x] `prefers-reduced-motion` respected: logo appears immediately with no delay/transform, circuit trace animation collapses to near-zero duration
- [x] Both logo images (hero, nav/footer) resolve at every tested viewport
- [x] Zero console/page errors besides the known Google Fonts CDN block in this sandbox
- [x] WCAG AA contrast (relative-luminance formula) passes on every text/background pair in use
- [x] No fabricated owner name, license number, years-in-business, or service beyond what the logo/reviews/client-supplied facts directly support
