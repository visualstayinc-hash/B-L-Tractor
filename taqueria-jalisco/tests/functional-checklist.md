# Functional checklist — Taqueria Jalisco

- [x] `tel:+18067637605` link present and correctly formatted (topbar + visit section)
- [x] Google Maps search link uses the real address, opens in a new tab (`target="_blank" rel="noopener"`)
- [x] Menu accordion: clicking a category opens it and closes any other open category — verified via `aria-expanded` state changes across a real click, not assumed from markup
- [x] Signature (threshold) interaction verified stateful at real scroll positions: arch path's computed coordinates genuinely change with scroll (confirmed numerically, not just "the code should do this")
- [x] `prefers-reduced-motion`: threshold interaction resolves to fully-open (frac=1) immediately, no scroll dependency
- [x] Zero console/pageerror across all 4 tested viewports (only the pre-existing, expected Google Fonts fetch failure in this sandbox)
- [x] Zero horizontal overflow at 390/768/1024/1440/1920px
- [x] No `<img>` missing `alt` text
- [x] All menu prices traceable to CONCEPT.md's sourced-facts list; approximate prices visibly marked, not presented as exact
