# Functional Checklist

- [x] `tel:+18086405035` — single consistent href across every CTA (Playwright-verified)
- [x] `sms:+18086405035` text CTA present in contact section
- [x] Transformation slider: drag via mouse and touch, `ArrowLeft`/`ArrowRight` keyboard
- [x] Reviews carousel: overflow correctly detected at desktop width, prev/next + dots functional
- [x] Mobile nav toggle opens/closes, closes on link click
- [x] Active nav-link tracking via IntersectionObserver
- [x] `.reveal` scroll-in animations fire via IntersectionObserver
- [x] `prefers-reduced-motion` respected (verified: hero title renders with identity transform, content intact)
- [x] Zero console/page errors besides the known Google Fonts CDN block in this sandbox
- [x] WCAG AA contrast (relative-luminance formula) passes on every text/background pair in use
