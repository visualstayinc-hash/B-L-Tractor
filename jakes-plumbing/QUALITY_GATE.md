# Jake's Plumbing Services — Quality Gate

Evidence-based pass/fail against the brief's M01–M30 matrix.

| # | Item | Status | Evidence |
|---|------|--------|----------|
| M01 | Actual Jake's logo is used | PASS | Real logo extracted from the supplied PDF via `rembg` background removal, never redrawn |
| M02 | Logo is large in hero | PASS | 560px (88vw on mobile) centered hero lockup |
| M03 | Pipe has visible water movement | PASS | Masked shimmer sweep clipped to the pipe layer's own alpha (CSS `mask-image`) |
| M04 | Water flows through pipe | PASS | Same shimmer, animates left-to-right on a loop |
| M05 | Droplet has meaningful animation | PASS | Glow pulse + a falling drip + splash-ring loop, layered on the real droplet artwork |
| M06 | Water underneath logo moves | PASS | Wave layer: vertical bob + horizontal scale pulse |
| M07 | Jake's lettering has floating/buoyancy motion | PASS | Independent vertical float, `floatText` keyframes, 5.5s loop |
| M08 | Red banner physically waves | PASS | 3D skewX/rotateX oscillation on the whole banner image (ribbon-in-current effect) |
| M09 | Banner remains readable during movement | PASS | Wording never distorted — whole image tilts as one rigid ribbon, verified via screenshot |
| M10 | Water swishes around logo | PASS | Large rotating soft-focus SVG current rings behind the lockup |
| M11 | Animation loops smoothly | PASS | All keyframes are `infinite`, no visible restart/jump (confirmed via multi-frame screenshots) |
| M12 | Animation responds to scroll | PASS | Scroll-fraction-driven lift/scale/fade + animation-duration speed-up, verified via computed-transform diff before/after scroll |
| M13 | Desktop interaction works | PASS | Mouse-parallax on the lockup, hover-capable devices only |
| M14 | Mobile interaction works | PASS | Full layered animation retained at 390px, verified no overflow |
| M15 | Reduced-motion support works | PASS | Drip/splash/shimmer opacity forced to 0, logo stays fully visible, verified via `reducedMotion:'reduce'` Playwright context |
| M16 | Logo remains recognizable | PASS | No pixel of the source artwork altered — only real image layers moved/masked |
| M17 | Phone CTA works | PASS | Single consistent `tel:+18066545496` href across nav/hero/about/contact/action bar |
| M18 | Booking CTA works | PASS | "Book Online" routes to `#contact` (a real, working action) — no fabricated booking URL, since none was found to exist |
| M19 | No unsupported business claims | PASS | No star rating, review count, specific detailed service list, or years-in-business shown — a dedicated research pass found none of these publicly verifiable |
| M20 | No horizontal overflow | PASS | Confirmed false at 1920/1440/1024/390px |
| M21 | No broken assets | PASS | All 7 images resolve (`naturalWidth > 0`) at every tested viewport |
| M22 | No console errors | PASS | Zero errors besides the known Google Fonts CDN block in this sandbox |
| M23 | Animation performs smoothly | PASS | All motion via `transform`/`opacity`/masked `background-position` — no layout-triggering properties animated |
| M24 | Visual identity matches supplied logo | PASS | Exact same artwork, colors, and proportions — nothing redesigned |
| M25 | Feels specifically built for Jake's | PASS | Hero built entirely around the real logo's own elements (pipe/droplet/banner/wave) |
| M26 | Doesn't look like a generic plumbing template | PASS | The whole hero depends on the specific real logo's shapes — see anti-template test below |
| M27 | Doesn't look AI-generated | PASS | Real photography/logo art throughout, no generic stock icon soup |
| M28 | Hero creates immediate visual impression | PASS | Full-bleed animated lockup is the first thing visible |
| M29 | Water motion feels physical | PASS | Masked shimmer, drip/splash timing curves (`cubic-bezier` easing tuned for gravity/rebound feel), not a flat gradient slide |
| M30 | Feels professionally art-directed | PASS | Verified across desktop/tablet/mobile screenshots, two real bugs found and fixed (layer seams, button contrast) rather than shipped as-is |

## Anti-template test
Swap the logo and copy for a roofer or electrician and the hero breaks
immediately — the entire animation vocabulary (pipe shimmer, water droplet,
banner-as-ribbon-in-current, wave) only makes sense for a plumbing brand
built around exactly this logo.

## Real bugs found and fixed
See CONCEPT.md's "Real bugs found and fixed during build" section — layer
seam lines from independent per-image drop-shadows, a WCAG contrast failure
on the nav "Call Now" button and the base `--blue` eyebrow color, and a
near-invisible About-section CTA button. All confirmed via Playwright
screenshots and the relative-luminance contrast formula, not eyeballed.
