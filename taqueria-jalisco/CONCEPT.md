# CONCEPT.md — Taqueria Jalisco (rebuild)

**Status: LOCKED before implementation.** This replaces the prior build's concept entirely — that build used an invented SVG mural (sun/agave icon, generic papel-picado triangles) because no real photography was available. It now is. This document is written from the attached PDF's actual photographs, not from generic "Mexican restaurant" convention.

## REAL BUSINESS FACTS

- **Name:** Taqueria Jalisco (storefront reads "JALISCO TAQUERIA & RESTAURANT" / "TAQUERIA JALISCO RESTAURANTE" — both real signs, see below)
- **Address:** 2211 Avenue Q, Lubbock, TX 79411
- **Phone:** (806) 763-7605
- **Hours:** Closed Monday. Tuesday–Sunday, 7:00 AM – 10:00 PM. (carried over from the prior build's cross-referenced research — unchanged, still the best-sourced hours)
- **Rating:** 4.5★ Google (per this task's brief — supersedes the prior build's Tripadvisor 4.3★/Yelp citation; Google is the source of record per this task)
- **Price range:** $10–$20/person
- **Google description (verbatim, per brief):** "Tacos, enchiladas & other Mexican staples dished alongside margaritas in a modest space."
- **Service signals:** happy hour food, private dining room, great cocktails

## VISUAL EXTRACTION (from the attached PDF — the actual restaurant, not a reference)

### STOREFRONT CHARACTER
A plain stucco commercial box building turned into an illustrated hacienda facade entirely through paint — no real architectural arches or columns, but PAINTED ones: a trompe-l'oeil arch spans the top of the wall, flanked by two painted brick-red cylindrical "columns," with painted brown window trim and lintels below. It is a flat wall performing as architecture. This trompe-l'oeil-through-paint logic is the single most important, specific, non-generic fact about this building — a Google Maps hero shot only gets you the address, not the trick this exact building is playing on its own flat wall.

### SIGNAGE CHARACTER
Two distinct real signs photographed, both dark chocolate-brown ink on warm ochre/cream ground, both ALL CAPS, both bold and blocky with a hand-painted (not printed) irregularity — no script/cursive "taco truck" font anywhere on the actual building:
1. **"JALISCO / TAQUERIA & RESTAURANT"** — the main facade sign, bold slab-adjacent poster capitals, arched baseline following the painted arch above it, with a small teal-green agave silhouette centered beneath the wordmark.
2. **"TAQUERIA JALISCO ⚜ RESTAURANTE"** — a second sign (different wall/angle), old-west wanted-poster-style serif capitals with a small ornamental flourish divider between lines, framed by a scalloped painted arch border.

### COLOR SYSTEM (sourced directly from the photographs, not invented)
- **Ground:** warm ochre / ochre-gold stucco, sun-aged, not flat or clean (`#c9954a`–`#d9a75c` range observed)
- **Ink:** dark chocolate brown, not black (`#3b2a1a`–`#4a3524` range) — every line, every letter
- **Accent — architecture:** brick/terracotta red, used only for the two painted "columns" and the curb paint (`#a63a2a`–`#b8432c` range)
- **Accent — agave:** a single small muted teal-green, used sparingly as one graphic element, not a dominant color (`#4a8a82` range)
- **Papel picado (interior only):** a brighter, more varied party-banner palette (blue, yellow, green, purple, pink) — confirmed by a real interior photo, but confined to that specific decorative context, not bled into the main UI chrome
- **Food/interior:** warm ambient restaurant lighting, wood-grain tables, cheese-yellow and salsa-red as food-photography accent notes

### MATERIAL SYSTEM
Painted stucco (not brick, not real wood cladding — a flat illustrated surface), real wood-grain tables, red-painted curb, checkered red/white paper for food presentation, warm low interior lighting (sconces visible in the facade photo, warm tungsten tones in interior food shots).

### MURAL SYSTEM (real, photographed, figurative — not abstract icons)
Four distinct real murals identified, each doing different narrative work:
1. **The serenade** — a man playing guitar to a seated woman, framed in a painted stone archway flanked by agave, romantic folk-art painting style.
2. **The portrait** — a woman in a red floral sombrero with a bouquet, a distant cathedral/cityscape behind her (likely evoking Guadalajara, Jalisco's capital), photographed with real papel picado banners strung above it — this is the one photo that shows papel picado as it actually exists in the space.
3. **The ranch** — a wooden barn, a Texas flag, cowboys on horseback herding longhorn cattle. This is the single most specific, least-generic fact available: this taquería's own wall blends Jalisco identity with West Texas ranching identity. No generic "Mexican restaurant" template would arrive at this image.
4. **The two exterior signs themselves** — see SIGNAGE CHARACTER above; they are murals too, not typography applied after the fact.

### TYPOGRAPHIC CHARACTER
Bold, blocky, hand-painted poster capitals (facade sign) and an old-west wanted-poster serif (second sign) — dignified and a little severe, not playful or bubbly. The prior build's choice of "Bungee" (a rounded, bouncy poster font) is a real mismatch against this reference and is replaced here with **Rye** (Google Fonts' actual wanted-poster/Western-signage display face) for major headline moments, paired with a plain, confident grotesk (**Archivo**) for body copy, menu prices, and anything that needs to stay fast to read.

### PHOTOGRAPHIC CHARACTER
Unstaged, real restaurant photography — slightly warm/dim indoor lighting, generous home-style combo plates (cheese-smothered, not minimalist plating), oversized novelty-glass margaritas (one with a Dos Equis bottle inverted into the glass), checkered-paper taco presentation. Not food-blog-clean; not styled. The site's photographic treatment should not "clean up" this character with bright clinical color grading.

### ATMOSPHERE
Warm, established, lived-in, family-run — a real Lubbock fixture, not a resort or a big-city trend restaurant. The ranch mural specifically signals West Texas belonging alongside Jalisco heritage — both real, both present, neither performed for effect.

## IMAGE LIBRARY (real photographs from the attached PDF — `assets/`)

| File | Role |
|---|---|
| `storefront-hero.jpg` | HERO / STOREFRONT — the primary facade shot, highest native resolution (680×510) of the set |
| `storefront-side.jpg` | STOREFRONT (secondary) — ramp/accessible-entrance side view |
| `mural-sign-restaurante.jpg` | SIGNAGE — the second real sign, wanted-poster serif |
| `mural-serenade.jpg` | MURAL — the guitar/serenade scene |
| `mural-portrait-papel-picado.jpg` | MURAL + real papel picado in situ |
| `mural-ranch-longhorns.jpg` | MURAL — the Texas ranch/longhorn scene |
| `drink-margarita-dosxx.jpg` | DRINK — margarita with inverted Dos Equis |
| `drink-frozen-green.jpg` | DRINK — frozen green margarita, whipped cream |
| `food-crispy-tacos.jpg` | FOOD — crispy tacos, checkered paper, salsas, lime |
| `food-combo-plate.jpg` | FOOD — combo plate, cheese-smothered enchiladas, beans, rice |

All ten are real photographs of the actual restaurant, supplied directly by the user for this build (not scraped from Yelp/Google, which are blocked by this sandbox's network policy in any case, and which the brief itself flags as not automatically licensed for production use). Native resolution is modest (258×258 for 8 of 10 images) — used here at supporting/detail scale, not stretched to full-bleed hero sizes where softness would show, except the one higher-resolution storefront shot.

## GOOGLE TESTIMONIALS (verbatim, user-supplied — primary source, not Yelp)

Three reviews, used exactly as supplied, no paraphrasing, no invented names beyond what was given (Review 2 and 3 had no name supplied — presented unattributed, not fabricated). See index.html for full text and the presentation system (editorial integration paired with food/atmosphere imagery, not generic testimonial cards).

## CREATIVE THESIS

This building performs architecture it doesn't have — a flat stucco wall painted into an arch, columns, and a wanted-poster sign. The site does the same thing to a flat screen: typography and image framing perform the trompe-l'oeil arch-and-column logic of the real facade, so scrolling through the page feels like walking toward, and then through, that painted doorway.

Removing this sentence would leave "use warm colors and real photos" — accurate but generic. With it, the arch/column motif has a job: it has to actually frame content, not decorate a header.

## SIGNATURE INTERACTION

**The painted arch as a real framing device.** A CSS/SVG arch-and-column frame (matching the facade's actual proportions and colors) is the structural container the visitor scrolls *through* at the transition into the mural section — not a static illustration, an actual clip-path/mask the following content is revealed inside of, tightening or widening as you scroll, echoing the trompe-l'oeil logic of the real wall.

**Secondary interaction:** the menu behaves as a real menu board — categories expand in place (accordion-like reveal with new information, not a modal or a separate page), so exploring the (large, real) menu doesn't dump forty items on the visitor at once.

## MOTION LANGUAGE

- The arch-frame interaction is the one non-generic motion device — purposeful, tied to the actual facade, not decorative.
- Photography reveals via clip/mask transitions echoing the arch, never a generic fade-up.
- `prefers-reduced-motion`: all transitions resolve instantly to final state.

## BRAND BOARD ADDENDUM (added in a later revision — secondary source, per this task's own source hierarchy)

A brand identity board was supplied as a "secondary art-direction source," explicitly subordinate to the PDF's real photographs. Two genuinely useful, non-conflicting things were taken from it:

1. **Exact hex values**, replacing this document's earlier photo-estimated approximations: Dark Wood/Ink `#3B2A1A`, Adobe Brown `#5B3A2B`, Brick Red `#A63A2A`, Cream `#F3E4C6`, Ochre `#DAA056`, Agave Blue `#4ABA82`, Warm Gold `#C9A34A`, Sage `#6B7F72`. Notably, three of these (`#3b2a1a`, `#a63a2a`, `#f3e4c6`) exactly matched values already extracted directly from the real photographs in the prior pass — a real, independent confirmation that the photo-based extraction was accurate, not a case where the board contradicted the photos.
2. **The arch as a recurring divider motif**, not just the one large threshold interaction — the board shows a row of repeating arches with a decorative border strip. Added as two thin `.arch-divider` strips between major sections (see EXPERIENCE_ARCHITECTURE.md). A real implementation bug was found and fixed here too: the first attempt used a `viewBox`+`preserveAspectRatio="slice"` combination that cropped the arch tops off entirely (an aspect-ratio mismatch between the 240×36 viewBox and the actual ~1440×36 rendered element caused the pattern to scale up ~6x and show only a thin vertical-line slice of the content) — fixed by removing the viewBox and letting the SVG pattern tile at true 1:1 pixel scale.

**Explicitly not taken from the board:** the suggested icon row (agave/taco/margarita/pin/fork-knife line icons) — this directly conflicts with this same task's own Section 33 anti-AI-slop rule, which explicitly bans "taco icons, cactus icons, sombreros, generic Mexican wallpaper." Where a secondary source's suggestion conflicts with a primary, explicit rule in the same brief, the rule wins — this is a deliberate judgment call, not an oversight. Also not taken: the "RESERVE A TABLE" button mockup — reservations were never confirmed as a real, current practice, so presenting one would be inventing a feature (see EXPERIENCE_ARCHITECTURE.md's Conversion/Visit Path section).

## HONESTY NOTES (carried forward, still binding)

- Menu prices: every price shown must trace to the researched list in this task's brief or be labeled clearly as approximate/unconfirmed — see the menu data table for per-item sourcing status.
- Daily specials are presented as "recent specials, subject to change," not permanent facts.
- No fabricated testimonials, no invented reviewer names beyond what was supplied, no Yelp substitution for the three Google reviews or the 4.5★ rating.
- Real photography only — no stock imagery, no invented SVG mural (that approach is retired per this task's explicit rejection of it).
- **Menu category completeness check (added in a later revision).** Cross-referencing the built site against the full 17-category master list surfaced two categories (Parrillada/Fajitas, Favoritos) that had never been included anywhere — not priced, not even in the "Also on the menu" honest-gap list — and one specific, repeatedly-named dish (Menudo) missing from the menu entirely. All three added: the two categories to "Also on the menu," Menudo to Especialidades de la Casa, all correctly labeled "Ask your server" rather than priced or omitted. A lesson for future passes: cross-check the *complete* source category list against the built site directly, not just against what was already flagged as missing in a prior pass.
