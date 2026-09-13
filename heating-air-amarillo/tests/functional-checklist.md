# Functional Checklist (Playwright-verified)

- [x] `tel:+18062567285` links present and correct (nav, hero, temp caption, problem panel, contact, mobile bar)
- [x] Directions link opens Google Maps to the exact supplied address
- [x] Temperature range input: dragging from 60→85 updates displayed temp, label text, stage background color, and airflow line color at every step tested (60, 72, 85)
- [x] System mode buttons: clicking Heat/Air/Cool updates `.active` state, duct stroke color, and step copy
- [x] Problem/Solution buttons: clicking updates panel tag/name/description; keyboard-focusable and Enter-activatable (converted from non-interactive divs, verified)
- [x] Review category buttons: clicking updates the dominant quote; keyboard-focusable and Enter-activatable (same fix as above)
- [x] Mobile nav off-canvas opens/closes
- [x] Nav anchor links land below the fixed header (`scroll-margin-top`) on Services/System/Reviews/Contact
- [x] `prefers-reduced-motion`: hero content and airflow lines render in their final state without animating, no console errors
- [x] No horizontal overflow at 1920/1440/1024/390px, with and without reduced motion
- [x] No console errors other than the known sandboxed Google Fonts CDN block
