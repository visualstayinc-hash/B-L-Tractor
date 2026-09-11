# Functional Checklist (Playwright-verified)

- [x] `tel:+16199158327` links present and correct (nav, hero, quote, contact, mobile bar)
- [x] Compare slider: `input[type=range]` drag updates `clip-path` from 0% to 100%, works via `input` event (covers mouse, touch, keyboard)
- [x] Services tabs: clicking a tab sets `.active`, updates the SVG zone opacities
- [x] Quote chips: clicking a chip updates the "Ready to talk about" summary text
- [x] Mobile nav off-canvas opens/closes
- [x] Nav anchor links land below the fixed header (`scroll-margin-top`) on Services/Difference/Reviews/Quote
- [x] `prefers-reduced-motion`: Transform section collapses to a static "Edged & Clean" end state, no console errors
- [x] No horizontal overflow at 1920/1440/1024/390px, with and without reduced motion
- [x] No console errors other than the known sandboxed Google Fonts CDN block
