# CONCEPT.md — Clearline Studio

**Status: LOCKED before implementation.** If the build drifts from this document, that is a FAIL condition per QUALITY_GATE.md, not a reason to edit this file to match the drift.

**Context note (updated):** Clearline Studio's contact channel and named founder are real, supplied directly by the user: Evan Greene, `clear.line.studio.creative@gmail.com`, `806-731-9998`, `3312 Ault Dr, Amarillo, TX 79121`. The six portfolio plots remain explicitly disclosed concept studies (original abstract/geometric compositions), not photographs or client work, since no real client history exists — this is stated on the page itself, not hidden. Unlike every other site in this repository (B&L Tractor, H&H Plumbing, Belmar Laundry, Jerry's Detail, Absolute Real Estate, Texas Pride Concrete — all real Amarillo, TX businesses with facts independently verified against public listings), Clearline's facts were supplied directly by the user rather than independently verified against a public listing, since Clearline is a personal/independent studio without one. No years-in-business, project counts, client names, awards, or credentials are stated anywhere on the site, because none were supplied and none would be verifiable.

## IDENTITY & AUTHORSHIP (added in a later revision — see PROGRESS.md)

Clearline Studio is Evan Greene's independent studio. The site previously named "Clearline" only in body copy, with no visible wordmark and no person named anywhere — a real positioning gap, identified and fixed. The correction: a proper "Clearline Studio" wordmark + "Evan Greene — independent design & build" byline in the hero (same visual weight relationship: studio name larger, person's byline smaller, neither disappearing behind the other), a sharpened hero thesis line naming the deliverable (websites and digital products) instead of staying purely abstract, the Process section's intro copy reframed as "how Evan works" rather than an impersonal "how it works," and a small hand-drawn signature mark + "Evan Greene, Clearline Studio" credit line at the close of the Process section — using the same `stroke-dashoffset` draw-on mechanism as everything else on the page, not a new animation type. This is a NEW, specific application of the line device (line-as-signature) distinct from its other three uses already established (navigation, medium-resolution, measurement) — deliberately one more thread, not a rewrite of the existing ones.

## WORDMARK LOCKUP (added in a later revision — see PROGRESS.md)

The user supplied an actual Clearline Studio brand identity board. It is not persisted in this repo or re-viewable in later sessions — the specific facts it established are recorded here so they aren't lost or re-derived incorrectly. The board's wordmark is a two-tier lockup: a wide-tracked, uppercase "CLEARLINE" over a smaller, more widely tracked "STUDIO" subline (not a single mixed-case run). The hero's `.hero-wordmark` was restructured to match this specific structure. The board's mock-invoice contact details (`hello@clearline.studio`, `www.clearline.studio`) are template placeholder text, not real Clearline details, and must never overwrite the real, already-configured contact info. The board's tagline ("MODERN WEBSITES / CLEAN DESIGN / REAL RESULTS") was deliberately not adopted verbatim — "REAL RESULTS" implies a proven-outcomes claim this site cannot substantiate, and is exactly the kind of fabricated credibility this project has consistently refused. The board's single-diagonal mark (distinct from the site's current zigzag `#markPath`) is a candidate for a future, separately-scoped pass, not swapped in without the actual board in hand.

---

## CREATIVE THESIS

Clearline's identity is a single continuous line — the precision of a drafting instrument — that never stays decorative: it is the literal mechanism by which a visitor moves through the site, scrubs between projects, and watches a raw concept sketch resolve into a finished form.

Removing this sentence would make the design direction substantially less coherent: without it, "a line motif" is just a stripe of decoration. With it, the line is required to be functional — it must do navigation's job, not just imply precision.

## VISUAL METAPHOR

The moment before a shape exists — when there is only a line describing intent. Drafting-table vocabulary: baseline ticks, coordinate readouts, uniform line-weight discipline, measured white space — warmed by confident type and physical motion so it reads as a studio's hand, not engineering software.

## USER JOURNEY

1. **Attention** — the page opens on an empty canvas. A single SVG line draws itself in real time and resolves into the studio's wordmark. Nothing else competes for attention in this first second.
2. **Curiosity** — that same line becomes a persistent horizontal spine, fixed in the viewport. It is draggable. This is the entire navigation system — there is no navbar, no hamburger menu.
3. **Discovery** — scrubbing the spine moves through six portfolio plots, each a point along the line. Dragging near a point previews it; releasing snaps to it.
4. **Understanding** — opening a plot redraws the spine into that project's key diagram — a sketch-to-resolution animation that shows process, not a static screenshot.
5. **Trust** — an process section is presented as an annotated technical cross-section (how Clearline works), not a generic "our values" block with icons.
6. **Desire** — six visibly distinct resolutions of the same line (identity, interactive site, spatial installation, editorial system, product interface, title sequence) demonstrate range without needing borrowed photography.
7. **Action** — contact is framed as "start a line": the visitor draws their own first mark on a small canvas as the inquiry gesture, alongside direct contact fields. Conversion is native to the concept, not a bolted-on form.

## SIGNATURE INTERACTION

**The line-scrub navigation.** A fixed horizontal line is the site's only wayfinding device. Drag it and the viewport scrubs through sections; release near a tick and it snaps. It teaches (shows position/progress at a glance), reveals (previews the next plot before you commit to it), and replaces every generic nav pattern (navbar, hamburger, dot-pager) with one mechanism that is genuinely load-bearing, not cosmetic.

## MOTION LANGUAGE

- Elements **draw on** (SVG `stroke-dashoffset`), they do not fade up. This is the one non-negotiable motion rule.
- The scrub-line has weight: a slight spring/overshoot on release, like a physical ruler settling — not linear, not cartoon-bouncy.
- Section-to-section transitions are the line **rerouting** from one diagram into the next, not blocks fading in independently.
- Hover/cursor language over interactive zones: a fine crosshair with a live coordinate readout (drafting-tool cursor), not a generic pointer change.
- `prefers-reduced-motion`: draw-on animations resolve instantly to their final state; the scrub still works, without spring overshoot.

## TYPOGRAPHY STRATEGY

One grotesk display/body face, one mono companion used **as measurement** — the mono face renders project numbers, coordinates, and dates as if they were literal drafting annotations, not just "a monospace accent." Display type is large where it earns it, never oversized for its own sake. Body copy stays fully legible — the client-trust test outranks typographic bravado.

## IMAGE STRATEGY

No borrowed or implied client photography, no fabricated logos presented as real clients. Each portfolio plot is an original abstract/geometric composition (CSS/SVG), a distinct "resolution" of the line into a plausible outcome shape. This is disclosed, not hidden — a footer note states these are concept studies.

## PORTFOLIO STRATEGY

Six plots, each a different medium the line resolves into: brand identity, interactive site, spatial installation, editorial system, product interface, motion/title sequence. The browsing mechanism is the scrub-line itself — not a grid, not cards. Variety of resolution demonstrates range; the mechanism demonstrates craft.

## CONVERSION STRATEGY

"Start a line": a small drawing canvas where the visitor's own cursor stroke is their first gesture toward working with Clearline, paired with direct, undisguised contact info. One conversion moment, integrated into the concept — not a repeated "GET A QUOTE" pattern.
