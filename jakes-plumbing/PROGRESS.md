# Jake's Plumbing Services — Progress

## Build

1. Extracted the embedded logo screenshot from the supplied PDF (1536×1024,
   `Skia/PDF Google Docs Renderer`) via PyMuPDF.
2. Cropped to the large centered instance of the logo lockup, then ran
   `rembg` (u2net) to remove the photographic background cleanly —
   confirmed via composite-over-dark-background before/after comparison.
3. Split the clean logo into 4 overlapping horizontal layers (pipe+droplet,
   "Jake's" text, red banner, wave) by inspecting the alpha-channel row
   profile for natural low-density gaps between elements. Verified the
   split was lossless by re-compositing all 4 layers at their original
   offsets and confirming a pixel-identical match to the source.
4. Built the hero around these 4 layers with independent CSS animations
   (pipe shimmer via alpha-masked gradient sweep, floating text, banner
   ribbon-wave via 3D skew, wave bob) plus a supplementary drip/splash
   overlay and a slowly rotating background water-current SVG.
5. Wired scroll-fraction-driven motion (lift/scale/fade + animation speed-
   up) and desktop-only mouse parallax.
6. Researched the business (WebSearch) rather than trusting the brief's
   assumption that a booking URL and Google rating existed: found neither
   is publicly verifiable, only a real Facebook business page. Built
   Reviews/Contact/Book-Online honestly around that finding instead of
   fabricating a rating, review count, or booking link.

## Bugs found and fixed

1. **Seam lines between logo layers** — each of the 4 layer `<img>`s had
   its own `filter:drop-shadow(...)`, producing a faint horizontal line
   exactly at each layer boundary (confirmed present even with all
   animation disabled, so not a motion artifact). Fixed by moving the
   shadow to the shared `.hero__lockup` container.
2. **WCAG contrast failure, nav "Call Now" button** — `--blue-bright`
   background with white text measured 2.56:1 via the relative-luminance
   formula (needs 4.5:1 for this button's ~13px bold text). The base
   `--blue` also failed as eyebrow text on the light paper background
   (3.87:1, also under 4.5:1 since eyebrow text isn't large enough to
   qualify for the 3:1 large-text threshold). Fixed by darkening `--blue`
   to `#1665ab`, verified to pass 4.5:1+ against white, paper, and the
   dark navy backgrounds it's used against.
3. **Near-invisible About CTA** — the "Call" button used `.btn--dark`
   (navy background) sitting directly on the About section's own navy
   background. Fixed by switching it to `.btn--primary` (red).

## Verification

Playwright at 1920/1440/1024/390px: zero horizontal overflow at every
width, all 7 images resolve, single consistent `tel:+18066545496` href,
mobile nav opens/closes, mobile action bar renders. Scroll-response
confirmed via computed-transform diff before/after scrolling. Reduced-
motion confirmed via a `reducedMotion:'reduce'` Playwright context: drip/
splash/shimmer opacity forced to 0, logo stays fully visible. WCAG contrast
recomputed for every text/background pair in use via the actual
relative-luminance formula (not eyeballed) after the button-color fixes.

## Status: shipped

All M01–M30 matrix items PASS. Committed and pushed to
`claude/install-ui-ux-pro-max-skill-xkwlx1`.
