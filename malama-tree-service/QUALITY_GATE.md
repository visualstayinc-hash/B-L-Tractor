# Mālama Tree Service — Quality Gate

Evidence-based pass/fail against the brief's B01–B30 matrix. Status reflects
the shipped build after the fixes noted below (Playwright verification at
1920/1440/1024/390px, WCAG contrast via the relative-luminance formula).

| # | Item | Status | Evidence |
|---|------|--------|----------|
| B01 | Mālama identity immediately clear | PASS | Hero: logo mark, "MĀLAMA / TREE SERVICE" headline, Keaau HI subline |
| B02 | Real supplied imagery used | PASS | Real photos (palm-climb, chainsaw-on-trunk, crew+child-on-felled-tree, the actual Google Business flyer) extracted from a genuine PDF attachment and embedded as base64 — hero background, "Real Job Photos" gallery, About section flyer card |
| B03 | Real supplied video integrated | N/A | No video was ever supplied as an accessible file |
| B04 | Hero visually distinctive | PASS | Full-bleed animated SVG canopy, staged headline reveal |
| B05 | Hero communicates tree service immediately | PASS | Canopy scene + "TREE SERVICE / KEAAU, HAWAII" copy in first view |
| B06 | Motion is purposeful | PASS | Canopy sway, branch-drop/leaf-fall loop, scroll reveals — no floating-leaf filler |
| B07 | Tree transformation interaction exists | PASS | Drag-to-reveal Overgrown→Cared-for slider, mouse+touch+keyboard verified in Playwright |
| B08 | Real work visually demonstrated | PASS | "Real Job Photos" gallery section with the 2 real job-site photos, honestly captioned, no invented project names/locations |
| B09 | Services accurate | PASS | Trimming, Removal, Stump Grinding, Excavator, Boom Truck, Chipping, Pruning, Free Estimates — from supplied source material only |
| B10 | No fabricated services | PASS | No service listed beyond the confirmed list |
| B11 | Google rating accurate | PASS | 5.0★ shown in hero badge, trust strip, reviews, about, contact |
| B12 | Google review count accurate | PASS | "17 reviews" shown everywhere the rating appears, no invented figure |
| B13 | Supplied reviews used accurately | PASS | All 4 verbatim quotes reproduced exactly (incl. emoji, punctuation) in the reviews carousel |
| B14 | No fabricated testimonials | PASS | Only the 4 supplied quotes appear; no invented reviewer names |
| B15 | Phone number correct | PASS | (808) 640-5035 / tel:+18086405035 everywhere, single href confirmed via Playwright |
| B16 | Call CTA works | PASS | `tel:+18086405035` link, hero/nav/contact/action bar |
| B17 | Quote/contact CTA works | PASS | Scrolls to #contact with Call + Text CTAs; no fake form submitted anywhere (none built, since no backend exists) |
| B18 | Location correct | PASS | "Keaau, HI 96749" only — no invented street address |
| B19 | Hours accurate | PASS | "Open 24 Hours" as supplied, not altered |
| B20 | Mobile intentionally designed | PASS | Persistent Call/Quote action bar, single-column layout, no overflow at 390px |
| B21 | Desktop polished | PASS | Screenshots reviewed at 1440/1920px |
| B22 | Videos perform correctly | N/A | No video used |
| B23 | No broken images | PASS | All imagery is inline SVG — nothing to break |
| B24 | No broken links | PASS | All nav/CTA hrefs resolve to in-page anchors or tel:/sms: |
| B25 | No horizontal overflow | PASS | Confirmed false at 1920/1440/1024/390px via Playwright |
| B26 | No console-breaking errors | PASS | Zero console/page errors besides the known Google Fonts CDN block in this sandbox |
| B27 | Accessibility passes | PASS | Semantic sections, alt-free decorative SVGs marked `aria-hidden`, slider has `role="slider"` + keyboard support, WCAG contrast re-computed and fixed (amber darkened to `#9c5e18`, step numbers brightened) |
| B28 | Anti-template passes | PASS | Canopy hero, drag transformation, storm case study — none of it survives a find/replace into a different trade |
| B29 | Anti-AI-slop passes | PASS | No glassmorphism, no fake stats/awards, no generic icon-grid-only services section |
| B30 | Feels like a real professional tree-service company | PASS | Verbatim reviews, honest hours/location, no invented credentials |

## Real bugs found and fixed this pass

1. **Duplicate "Call Now" pill on desktop** — the mobile-only nav CTA
   (`.nav__cta--mobile`) had no `display:none` default, so it rendered inline
   in the desktop nav alongside the real CTA. Fixed by hiding it by default
   and only showing it inside the `max-width:920px` mobile menu.
2. **WCAG contrast failures** — computed via the relative-luminance formula,
   not eyeballed: amber-on-white button text (3.37:1), amber eyebrow text on
   paper/cream backgrounds (3.17–4.28:1), and the decorative step-numbers on
   the forest-mid background (2.01:1) all failed their required thresholds.
   Fixed by darkening `--amber` from `#c9791f` to `#9c5e18` (passes 4.5:1+ in
   every real usage context) and raising the step-number opacity to 0.49
   (3.04:1, correct threshold for large decorative text).
3. **Storm illustration only showed 2 cars** while the copy says three —
   fixed to show three vehicles under the fallen limb for consistency with
   the real, paraphrased storm story.
4. **Nav text had no contrast fallback over the real hero photo** — the hero
   background changed from a dark illustrated scene (always dark, so white
   nav text was always safe) to a real bright-sky photo with a slow pan/zoom
   animation. White nav links floating over open sky or a cloud with only a
   light scrim were a real, verifiable contrast risk. Fixed with a dedicated
   dark gradient behind the unscrolled nav plus a text-shadow fallback, both
   removed once the nav switches to its solid scrolled background.

## Real photos (added after initial ship)

The client's first two attempts to send real tree-work photos arrived as
pasted/inline chat images and were never accessible as files in this build
environment. A third attempt sent as a genuine PDF attachment worked —
extracted the embedded images directly (native resolution, not a
re-rasterized page render) and embedded them as base64 `data:` URIs:
hero background (palm-climbing photo), a new "Real Job Photos" gallery
(chainsaw-on-trunk, crew member + child on a felled tree), and the actual
Google Business flyer image in the About section. B02/B08 flipped from
PARTIAL to PASS as a result.
