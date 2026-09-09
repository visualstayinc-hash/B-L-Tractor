# EXPERIENCE_ARCHITECTURE.md — Taqueria Jalisco

## Core concept

The building performs architecture it doesn't structurally have — a flat stucco wall painted into an arch, columns, and hand-lettered signage. The site performs the same trick on a flat screen: the arch motif is the actual interface (a scroll-driven reveal, a repeating divider strip echoing the brand board's arch pattern), not an illustration sitting next to the content.

## User journey

The six experience-states named in this task's brief map to six real sections — not because "hero/menu/contact" is the default, but because each state earned a genuinely different composition and interaction, verified by inspection rather than assumed from the outline:

1. **Arrive** — `#hero`. The real facade photograph, full-bleed, with the site's own wordmark (Rye, matching the storefront's actual painted capitals) laid over it.
2. **Cross the arch** — `#threshold`. The signature interaction (see below) — a scroll-linked arch that grows from a small centered doorway to full-viewport coverage, revealing the first mural.
3. **Discover the walls** — `#murals`. All four real murals, each with distinct framing (alternating left/right rows, one full-width), each captioned with what makes it specific to this building (the ranch/longhorn mural explicitly called out as something no generic template would paint).
4. **Enter the food** — `#food`. A full-bleed hero food photo, then a two-up detail row (crispy tacos, the Dos Equis margarita) — hero/secondary/detail hierarchy, not four equal cards.
5. **Explore the menu** — `#menu`. An accordion, single-category-open-at-a-time, covering every sourced menu item/price plus an honest "Also on the menu" category for the real categories that exist but had no confirmed pricing (added this pass — see PROGRESS.md).
6. **Hear real customers** — `#reviews`. The three supplied Google reviews, verbatim, each paired with a real food/atmosphere photo, not a testimonial-card grid.
7. **Plan the visit** — `#visit`. Real hours/address/phone with working `tel:`/maps links.

## Primary signature interaction: the threshold arch

**Storefront interaction and mural interaction are the same mechanism, deliberately** — the brief's Sections 21 and 22 both describe "architecture becomes the interface" and "murals as interaction," and for this specific building those are one fact, not two: the arch IS the storefront's own architecture, and the mural IS what's revealed through it. Building two separate systems for the same physical fact would be inventing complexity, not depth.

Mechanism: `#threshold` is a 280vh scroll runway with a `position:sticky` 100vh stage inside it. On every scroll frame, JS computes the arch's actual SVG path in real viewport pixels (`archPathD(cx, baseY, half, straightHeight)`) so the aperture is centered and grows from a ~90px-wide doorway to full-viewport coverage as the visitor scrolls through the runway — genuinely continuous, not a single fire-once reveal.

**A real implementation bug was found and fixed here** (see PROGRESS.md/QUALITY_GATE.md Q19 for full detail): the first version paired pixel-space `clipPathUnits` with percentage-value path coordinates, so the "arch" only ever rendered a ~40px sliver regardless of scroll position. Found via live scroll-position screenshots (not the automated overflow/console check, which reported nothing wrong), fixed by computing the path in real pixels every frame, re-verified numerically and visually at three real scroll positions.

## Secondary interaction: the menu accordion

`USER_ACTION → SYSTEM_RESPONSE → INFORMATION_CHANGE`: clicking a category header opens it (revealing its real items/prices) and closes whatever was previously open — verified via `aria-expanded` state changes across a real Playwright click, not assumed from markup. This is a real exploration mechanism, not a decorative toggle — a visitor choosing "Especialidades de la Casa" genuinely sees different information than choosing "A La Carte."

## The arch as a recurring (not omnipresent) motif

Per this task's Section 06 ("do not place arches everywhere... create hierarchy"), the arch appears in exactly three places, each doing different work: the primary scroll-driven reveal (`#threshold`), and two thin repeating-arch divider strips (matching the brand board's own arch-pattern border) between Murals→Food and Menu→Reviews — a quiet, recurring signal rather than a decorative border slapped on every section.

## Motion system

Only one continuously-driven motion element exists (the threshold arch); everything else is either a discrete state change (menu accordion) or static composition. This is deliberate restraint per Section 28's explicit "do not fade every section, do not parallax every image" — see QUALITY_GATE.md Q23 for the full Trigger/Purpose/Direction/Timing/Easing/Hierarchy breakdown.

## Mobile strategy

Recomposed, not desktop-stacked-vertically: the hero's photo crop and scrim are mobile-specific (a real bug — a photographed-sign/HTML-wordmark collision — was found and fixed here, see PROGRESS.md); menu/hours rows switch to column layout below 420px; the murals grid collapses to single-column below 860px with image-first ordering preserved. The threshold arch interaction works identically on mobile (verified: it's driven by `getBoundingClientRect()`/`innerWidth`/`innerHeight`, not desktop-only assumptions).

## Conversion / visit path

Two real, working contact paths exist from anywhere on the page: the fixed topbar's call button (`tel:+18067637605`) and `#visit`'s hours/phone/maps block. No fake reservation system was added — Section 10's brand-board mockup suggested a "Reserve a Table" button, but reservations were never confirmed as an actual accepted practice here, so it was deliberately left out rather than presented as a real feature.
