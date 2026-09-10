# Crockett Drum Plumbing Heating & Air — Progress

## Build

Built `index.html` as a single self-contained file (inline SVG/CSS/JS,
Google Fonts CDN links only, zero raster images) around the brief's "THE
SYSTEM" concept: three animated SVG paths (water/blue, heat/orange,
air/cyan) converging behind the hero wordmark, a real interactive
three-system selector, a how-it-works strip, a services section built from
researched categories, a problem→solution ("what's wrong?") section, a
reviews section using the exact supplied review material, contact, and a
closing "systems converge into the brand" visual echoing the hero.

Ran a dedicated research pass before writing service/hours/years-in-business
copy, since the brief invited "additional legitimate research" and there
turned out to be a real name-collision risk (at least 3 similarly-named
Lubbock plumbing businesses). Cross-referenced every finding against the
supplied address+phone before using it; explicitly avoided a same-named
company's owner ("Clifton"), phone numbers, and website that surfaced in
search results for a different, unrelated entity.

## Bugs found and fixed

1. **Duplicate "Call Now" pill on desktop** — same bug class caught earlier
   this session on a different project: the mobile-only nav CTA had no
   default `display:none`, so it rendered inline in the desktop nav
   alongside the real CTA. Fixed.
2. **Hero system-path lines crossing through text on mobile** — the hero's
   full-bleed SVG scene uses `preserveAspectRatio="xMidYMid slice"`, which
   scales up considerably on a narrow/tall mobile viewport. The converging
   path lines ended up running directly behind the headline, subhead, and
   system labels, reading as strikethrough lines through the text — a real
   legibility bug, confirmed via screenshot, not a rendering artifact.
   Fixed by adding a radial vignette (`.hero__vignette`) positioned behind
   the text content, strengthened further under a mobile media query.
3. **WCAG contrast failures on `--water` and `--heat`** — computed via the
   actual relative-luminance formula (not eyeballed): the water eyebrow/
   label color measured 4.32:1 against the paper background, and the heat
   star-rating color measured 3.41:1 — both below the 4.5:1 required for
   text at these sizes. Fixed by darkening both base CSS variables
   (`--water` → `#1256bd`, `--heat` → `#b23414`), re-verified to pass
   6.3:1 and 5.8:1 respectively against the paper background, with every
   other usage context (buttons, dark-background text/icons) checked and
   confirmed to also still pass or improve.

## Verification

Playwright at 1920/1440/1024/390px: zero horizontal overflow at every
width. Three-system selector tested by reading actual DOM state (tab
`aria-pressed`, headline/description text content, diagram branch opacity)
before and after each click — confirmed real state changes, not just a
visual check. Single consistent `tel:+18068660588` href across every CTA,
verified real Google Maps directions URL built from the confirmed address.
Reduced-motion confirmed via a `reducedMotion:'reduce'` Playwright context:
flow-dash and pulse-ring animation durations collapse to ~0, hero title
stays fully visible. Mobile nav toggle opens/closes. Zero console/page
errors besides the known Google Fonts CDN block in this sandbox.

## Status: shipped

All B01–B30 matrix items PASS. Committed and pushed to
`claude/install-ui-ux-pro-max-skill-xkwlx1`.
