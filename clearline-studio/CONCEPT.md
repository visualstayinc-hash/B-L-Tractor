# CONCEPT.md — Clearline Studio

**Status: LOCKED before implementation.** If the build drifts from this document, that is a FAIL condition per QUALITY_GATE.md, not a reason to edit this file to match the drift.

**Context note (not in the original brief, added for honesty):** Clearline Studio has no real address, phone number, or client roster — it is being built as a concept/portfolio-demo studio, not a real business with verifiable facts. Unlike every other site in this repository (B&L Tractor, H&H Plumbing, Belmar Laundry, Jerry's Detail, Absolute Real Estate, Texas Pride Concrete — all real Amarillo, TX businesses with facts verified against public listings), nothing here is presented as a real, currently-operating company. The portfolio entries are original abstract/geometric studies, clearly a demonstration of the interaction system, not photographs or logos of real client work. This keeps the same anti-fabrication discipline used elsewhere in the repo, adapted to a context where there is no real business to misrepresent.

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
