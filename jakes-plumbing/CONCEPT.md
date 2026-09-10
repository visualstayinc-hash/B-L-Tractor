# Jake's Plumbing Services — Concept

**Business:** Jake's Plumbing Services, Amarillo, TX, (806) 654-5496

## Source material

The client supplied a screenshot (PDF) of an existing Jake's Plumbing
Services logo/hero concept — a pipe, a water droplet, the "Jake's" script
wordmark, a red "PLUMBING SERVICES" ribbon, and a wave underneath. The brief
was explicit: **do not redesign the logo** — bring it to life through
motion.

Background removal (`rembg`, u2net model) isolated the real logo from its
photographic backdrop cleanly. The isolated logo was then split into 4
overlapping horizontal image layers (pipe+droplet, "Jake's" text, red
banner, wave) by inspecting the alpha channel for natural gaps, so each
piece could be animated independently while reassembling pixel-perfectly
into the original artwork when stacked at their original offsets — verified
by compositing all 4 layers back together and confirming it matches the
source exactly.

**Not fabricated as a redesign**: no pixel of the original artwork was
redrawn, recolored, or replaced. Motion is created entirely by CSS
transforms/animation and mask/gradient overlays applied on top of and
around the real, unmodified logo pixels.

## Verified business facts

A research pass found:
- **No public Google Business Profile, star rating, review count, booking
  URL, or services list could be verified anywhere.** None of these appear
  on the site as a result — no invented rating, no invented review count,
  no "Book Online" link to a fabricated URL.
- A real, active Facebook page: *"Jake's Plumbing Services | Amarillo TX"*
  — used as the honest destination for "Reviews" and as a real secondary
  contact method.
- The 3 broad service categories (Residential, Commercial, Repairs &
  Installations) and the supporting copy lines came directly from the
  supplied reference screenshot, reproduced faithfully rather than
  expanded into an invented detailed service list.

"Book Online" is kept as a CTA label (matching the reference concept's own
labeling) but routes to the Contact section rather than a fabricated
booking platform, since no real booking URL exists to point to.

## The animation

- **Pipe**: static artwork with a masked shimmer sweep (a moving gradient
  clipped to the pipe layer's own alpha channel as a CSS mask) suggesting
  water moving through it.
- **Droplet**: a supplementary small drip element falls from the main
  droplet's tip on a loop, with a soft splash-ring at the bottom of its
  fall — layered on top of, not replacing, the real droplet artwork.
- **"Jake's" text**: gentle vertical float (buoyancy), independent timing
  from the other layers.
- **Red banner**: a 3D skew/rotateX oscillation faking a ribbon-in-current
  wave, without warping the text itself (the banner "PLUMBING SERVICES"
  wording is never distorted — the whole image tilts as one rigid ribbon).
- **Wave**: a slow vertical bob plus horizontal scale pulse for a flowing
  feel.
- **Background current**: a large, slowly rotating soft-focus SVG ring
  behind the whole lockup, suggesting a water current.
- **Scroll response**: as the visitor scrolls through the hero, the whole
  logo lifts and scales down while fading, and the shimmer/current/banner
  animations speed up — all driven by one scroll-fraction calculation, no
  scroll-jacking.
- **Mouse parallax** (desktop, hover-capable devices only): a very subtle
  logo shift toward the cursor.
- **Reduced motion**: drip, splash, and shimmer are hidden entirely; the
  logo stays static and fully visible; nothing flashes or moves rapidly.

## Real bugs found and fixed during build

1. Each of the 4 logo layers had its own independent `drop-shadow` filter,
   which produced faint horizontal seam lines exactly where adjacent layers
   met (visible even with motion disabled — not an animation artifact).
   Fixed by moving the shadow to the shared container so the whole lockup
   casts one unified shadow.
2. The "Call Now" nav button (`--blue-bright` background, white text)
   measured 2.56:1 contrast — a real WCAG AA failure, computed via the
   actual relative-luminance formula. The same base `--blue` also failed as
   eyebrow text on the light paper background (3.87:1). Both fixed by
   darkening `--blue` to `#1665ab` (passes 4.5:1+ in every real context it's
   used).
3. The About section's "Call" button used `.btn--dark` (navy background) on
   the About section's own navy background — nearly invisible. Fixed by
   switching it to `.btn--primary` (red).
