# CONCEPT.md — Taqueria Jalisco

**Status: LOCKED before implementation.**

## REAL BUSINESS FACTS (independently verified against public listings — see sources)

- **Name:** Taqueria Jalisco (also listed as "Taqueria Jalisco #7")
- **Address:** 2211 Avenue Q, Lubbock, TX 79411
- **Phone:** (806) 763-7605
- **Hours:** Closed Monday. Tuesday–Sunday, 7:00 AM – 10:00 PM.
- **Cuisine:** Mexican taqueria — tacos, enchiladas, tortas, fajitas, menudo, margaritas
- **Longevity:** BBB file opened 4/3/1995 — consistently described across aggregators as ~31 years in business
- **Standing:** 4.3★ (Tripadvisor, ranked #13 of 684 Lubbock restaurants), 292 reviews on Yelp
- **Confirmed real menu items/prices** (cross-checked across 2+ independent sources — this is the *complete* set of items with real, sourced data; nothing beyond this list should be presented with a specific price):
  - Chicken Fajitas — $16.99
  - Burrito (regular/grande) — $11.99
  - Street Tacos
  - Tacos al Pastor
  - Torta Pastor
  - Chicken Enchiladas
  - Shrimp Cocktail Quesadilla
  - Menudo
  - General price range per person: $10–$20

**Sources:** Yelp, BBB, Tripadvisor, Waze, Favor Delivery, restaurantguru.com, menuswithprice.com — cross-referenced via web search since several individual restaurant/review sites (Yelp, kwickmenu.com) are blocked by this sandbox's network policy and could not be fetched directly. Address and phone number agree across every source. Hours reconciled after an initial apparent conflict (one snippet implied Sunday closed; a second, more specific query confirmed Sunday is open 7am–10pm, consistent with "Tuesday–Sunday" language elsewhere) — do not re-introduce the Monday-only-closed vs. Sunday-closed confusion; it is resolved.

**What is NOT claimed:** a complete menu with full pricing (only the items above have sourced prices/names — anything else on the page is a category or description, never an invented specific dish+price not in this list), any specific interior photography (no verified real photos of this location were available to this build — see IMAGE STRATEGY), any awards beyond the sourced rating/rank above, any staff names beyond none supplied.

## CREATIVE THESIS

A taquería's identity in West Texas is carried by hand: the painted plywood sign bolted above the door, the papel picado strung across the ceiling for a birthday or a saint's day, the mural on the cinderblock wall next door. None of it is subtle, all of it is made by a person with a brush, not a printer. The site treats **papel picado — cut paper — as the literal interface**: sections are introduced by a scalloped, perforated paper edge that tears away to reveal what's under it, exactly the gesture of pulling down a banner to see the wall behind it.

Removing this sentence would make the direction generic: without "cut paper as interface," this is just "a colorful Mexican restaurant site." With it, every reveal on the page has to be a tear, not a fade.

## VISUAL METAPHOR

Hand-painted taquería signage + papel picado banner strings + the flat, saturated color-block language of Mexican folk art — filtered through a modest West Texas storefront, not a resort-Cancún aesthetic. Bold, slightly imperfect hand-lettering (never a generic script font standing in for "Mexican"), flat color fields with no gradients, a perforated/scalloped edge motif used structurally.

## USER JOURNEY

1. **Attention** — the page opens on a single painted sign board, hand-lettered, the taquería's name resolving stroke by stroke like a sign painter's brush.
2. **Curiosity** — a strung papel picado banner runs across the top of the page as the persistent navigation device — each flag is a section, scalloped edges torn rather than clicked.
3. **Discovery** — scrolling tears through banner after banner into the food, the story, the visit info — each section is genuinely different in composition, not a repeated card.
4. **Trust** — real hours, real address, real phone, real rating are stated plainly, with a disclosed boundary on what isn't independently confirmed (no invented menu beyond the sourced items).
5. **Action** — visit info reads like a hand-painted hours sign, not a generic contact card; a real tel: link, a real maps link, a real address.

## SIGNATURE INTERACTION

**The paper-tear reveal.** Each major section is capped by a perforated papel picado edge. Scrolling into a section visibly tears that edge open (an SVG clip-path/mask animation, not a plain fade or slide) to reveal the content beneath — the site's one non-generic, non-decorative motion signature, doing the job a card-grid fade normally fakes.

## MOTION LANGUAGE

- Sections reveal via a **paper-tear** (animated scalloped clip-path), never opacity/translateY fade-up.
- The sign-painted wordmark **draws on** (stroke-dashoffset), same discipline as every other site in this project.
- `prefers-reduced-motion`: tears and draw-ons resolve instantly to their final state.

## TYPOGRAPHY STRATEGY

One bold hand-painted-feeling display face for headlines/signage (large, slightly irregular baseline treatment via letter-spacing/rotation micro-variance, not a script cliché), one clean grotesk for body/menu copy so prices and hours stay legible — sign-painter voice for identity, plain readable voice for information a diner actually needs.

## IMAGE STRATEGY

No stock photography, no borrowed/implied photos of this specific restaurant (none were available to verify). All visuals are original CSS/SVG illustration — flat-color plates, papel picado cut patterns, hand-lettered marks — openly a designed interpretation of the taquería's real visual culture, not a fabricated photograph passed off as the real location. This mirrors the same disclosed-illustration approach used elsewhere in this repository (Clearline Studio's concept-study portfolio) — original work standing in honestly for photography that isn't available.

## MENU STRATEGY

Only the sourced items/prices listed above appear with specific prices. Broader categories (tacos, tortas, enchiladas, fajitas, quesadillas, menudo) are presented as real categories this taquería serves, without inventing specific unlisted dishes or numbers.

## CONVERSION STRATEGY

Visit info (hours/address/phone) presented as its own hand-painted "sign," with real `tel:`/maps links — no fake reservation system, no fake online-ordering flow that doesn't exist on the real site.
