# Mālama Tree Service — Progress

## Pass 1 — Build

Built `index.html` as a single self-contained file (inline CSS/JS, inline SVG
throughout, Google Fonts CDN links only) following the repo's established
pattern. Sections: nav, hero (animated canopy scene + staged headline
reveal), trust strip (5.0★/17 reviews/Open 24 Hours/Keaau HI), drag-to-reveal
tree-transformation slider, Kona-storm case study (paraphrased, captioned as
such), services (8 items from the confirmed source list), 4-step process,
reviews carousel (4 verbatim quotes), about, contact, footer, persistent
mobile action bar.

Verified via Playwright at 1920/1440/1024/390px:
- Zero horizontal overflow at every width.
- Drag slider works via mouse, touch, and `ArrowLeft`/`ArrowRight` keyboard
  input (tested to exact `aria-valuenow` values).
- Reviews carousel correctly detects real scroll overflow (4 cards at
  600px-wide flex-basis exceed the 1116px desktop container) and both
  buttons/dots work.
- Single consistent `tel:+18086405035` href across every CTA.
- Mobile action bar renders as `display:grid` under 720px.
- Mobile nav toggle opens/closes correctly.
- Zero console/page errors besides the known Google Fonts CDN
  `ERR_CONNECTION_RESET` (expected sandbox network block, not a real bug).

## Bugs found and fixed

1. Duplicate "Call Now" pill visible on desktop nav — the mobile-only CTA
   inside `.nav__links` had no default `display:none`. Fixed.
2. WCAG AA contrast failures on the amber accent (buttons, eyebrow labels)
   and the decorative step-numbers — computed via the actual relative-
   luminance formula, not eyeballed. Darkened `--amber` to `#9c5e18` and
   raised step-number opacity to 0.49. Re-verified all affected pairs pass.
3. Storm-story illustration showed only 2 cars against copy describing
   three — added a third vehicle for consistency.

## Pass 2 — Real photos integrated

The client's first two attempts to send real tree-work photos (a flyer
image, then 3 job-site photos) arrived as pasted/inline chat images —
confirmed via `find /root/.claude/uploads/<session>/` and a broader
recent-file search, both consistently empty. The client then sent the same
material as a genuine PDF file attachment, which landed in an accessible
path. Extracted the embedded images directly from the PDF (native
resolution — the flyer/logo card, and 3 real photos: palm-climbing,
chainsaw-on-freshly-cut-trunk, crew-member-with-child-on-felled-tree),
converted the 3 photos to compressed JPEG (~30–60KB each) and kept the
flyer as PNG, and embedded all 4 as base64 `data:` URIs.

Changes made:
- Hero background swapped from an illustrated SVG canopy scene to the real
  palm-climbing photo, with a slow Ken Burns pan/zoom (disabled under
  `prefers-reduced-motion`).
- New "Real Job Photos" gallery section (`#work`, nav "Work" link repointed
  to it) showing the 2 remaining real photos with honest captions — no
  invented project names or locations.
- The actual Google Business flyer image added to the About section,
  captioned "From Mālama's own Google Business listing" — this is the
  business's own material, not a trace of a third-party trademark, so it's
  used directly rather than redrawn.
- About copy updated with the confirmed full name "Darrick DeAnda" (visible
  on the real flyer) — still never asserted as "the owner," consistent with
  the brief's explicit caution.
- Fixed a real contrast bug this surfaced: the unscrolled nav had no
  fallback for white text landing over a bright sky/cloud area of the photo
  during the pan animation. Added a dedicated dark gradient + text-shadow
  behind the unscrolled nav, removed once scrolled.

No matching real before/after pair was ever supplied, so the transformation
slider still uses original, honestly-captioned illustration.

Re-verified via Playwright after the change: zero overflow at all 4
viewports, all real photos resolve (`naturalWidth > 0`) once scrolled into
view (the flyer image is `loading="lazy"`, confirmed via a scroll-then-check
test rather than an immediate check), slider/carousel/nav functionality
unchanged, final file size 540KB.

## Status: shipped

All B01–B30 matrix items PASS (photo/video items now PASS with real
photography integrated; video remains N/A, no video was ever supplied as an
accessible file). Committed and pushed to
`claude/install-ui-ux-pro-max-skill-xkwlx1`.
