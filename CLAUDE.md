# CLAUDE.md — build rules for this repo

Single-file pitch sites for local businesses. One `index.html` per folder,
fully self-contained.

## The problem this file exists to prevent

An audit of the seven tree/roofing sites found they had converged into one
template. Not similar — the same page:

- **7/7** identical hero formula: eyebrow label → H1 with an italic accent
  clause → star rating + review count → CTA.
- **6/7** identical section order: `hero → services → [gimmick] → why →
  reviews → area → contact`.
- **7/7** sticky call bar, `.eyebrow` with its little rule, `.reveal`
  fade-up, same phone SVG, same preview disclaimer.
- **6/7** Fraunces. M Rosales and Noles shipped **the same palette**
  (`#1C3D2E` + `#C9A876`). Dave's reused the green again.
- Every H1 the same rhythm — two clipped sentences with a period in the
  middle.

The wider repo is varied (18 display faces across 26 sites). The collapse
happened *inside a category*: once a formula worked for one tree service it
got reused for every tree service after it. That is the worst place for it
to happen, because those owners are in the same region and most likely to
see each other's sites.

Varying the gimmick and the hex codes is not variety. The scaffolding has to
change.

## Hard rules

Check the ledger below before building. For a new site:

1. **Never reuse a display font** used by another site in the same trade.
2. **Never reuse a palette.** Two sites sharing a base colour is a bug.
3. **No two consecutive builds share an archetype** (below).
4. **No two consecutive builds share a section order.** Reordering is not
   enough — add, drop, or merge sections.
5. The hero formula `eyebrow → italic-accent H1 → star rating → CTA` is
   **retired**. It is in seven sites already. Something else.
6. A sticky mobile call bar is allowed but is not automatic. Decide.
7. Append the new site to the ledger as part of the build, not after.

## Archetypes

Pick one deliberately. The point is that the page is a different *shape*,
not a different colour.

- **Dark-band brochure** — the current default. Dark hero, alternating
  light/dark bands, card grids. **Over-used; needs a reason.**
- **Editorial** — light throughout, no dark band at all, rules and
  multi-column text, large masthead. Reads like a trade broadsheet.
- **Photo-led** — one full-bleed job photo is the hero, type over it,
  almost no chrome. Only when the owner has supplied good photos.
- **Utility / ledger** — looks like a tool, not a brochure. A coverage
  table, price list or checklist is the first thing on screen. Mono or
  condensed type, dense, few images.
- **Owner's letter** — one column, no cards anywhere, reads as a single
  continuous piece in the owner's voice.
- **Poster** — oversized type *is* the hero. Colour blocking, Swiss grid,
  no rating badge, minimal sections.

## Holds regardless of archetype

These are correctness, not style, and do not count as sameness:

- Pre-compute WCAG contrast for every colour that will carry text, in
  Python, **before** writing markup. Composite nested alpha in sequence.
- Verify in a real browser. Measure collisions and box sizes; do not
  eyeball screenshots. An element can animate perfectly inside a 0×0 box.
- Test on emulated phones with touch. Never `:hover` as the only trigger.
- 44px minimum tap targets, `prefers-reduced-motion`, honest demo forms
  that state nothing was sent, and the preview-site disclosure in the
  footer.
- Ground every claim in supplied facts. No invented reviews, licences,
  years in business, or stock photography.

## Ledger

| Site | Trade | Display face | Base colour | Hero | Archetype |
|---|---|---|---|---|---|
| next-level-tree-service | tree | Fraunces | `#14201a` | dark | dark-band |
| daves-tree-stump | tree | Fraunces | `#1c3d2e` | dark | dark-band |
| ironwood-tree-service | tree | Fraunces | `#14261C` | dark | dark-band |
| m-rosales-tree-service | tree | Fraunces | `#1C3D2E` | dark | dark-band |
| noles-tree-services | tree | Fraunces | `#1C3D2E` | dark | dark-band |
| malama-tree-service | tree | Fraunces | `#0f2419` | light | dark-band |
| opexcellence-tree-stump | tree | Saira Condensed | `#1c3d2e` | dark | dark-band |
| topes-tree-trimming | tree | Fraunces | `#3B5C3F` | dark | dark-band |
| panhandle-roofing-wranglers | roofing | Cormorant Garamond | `#FCFBFC` | light | dark-band |
| 806-auto-detailing | detailing | Barlow Condensed | `#0d0d0e` | light | — |
| jerrys-detail | detailing | Oswald | `#040404` | light | — |
| absolute-real-estate | real estate | Playfair Display | `#f0ead9` | light | — |
| belmar-laundry | laundry | Baloo 2 | `#173f5c` | light | — |
| clearline-studio | studio | Instrument Sans | `#f4f2ed` | light | — |
| crockett-drum | music | Space Grotesk | `#0a0e14` | dark | — |
| garcia-lawn-services | lawn | Manrope | `#171a16` | dark | — |
| ortegas-lawn-care | lawn | Sora | `#121110` | dark | — |
| top-lawn-care | lawn | Black Ops One | `#15181a` | light | — |
| west-texas-lawn | lawn | Schibsted Grotesk | `#211a10` | light | — |
| heating-air-amarillo | hvac | Chakra Petch | `#14171a` | dark | — |
| lubbock-hvac | hvac | Bricolage Grotesque | `#1a0f08` | light | — |
| hh-plumbing | plumbing | Inter | `#000000` | light | — |
| jakes-plumbing | plumbing | Barlow Condensed | `#050b16` | light | — |
| lee-electric | electrical | Archivo | `#000000` | light | — |
| taqueria-jalisco | food | Rye | `#daa056` | light | — |
| texas-pride-concrete | concrete | Space Grotesk | `#dcd5c3` | light | — |

**Burned for tree/roofing:** Fraunces, Saira Condensed, Cormorant Garamond.
Any green in the `#0f2419`–`#476B4C` range. The dark-band brochure shape.
