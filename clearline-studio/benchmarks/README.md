# Benchmarks — index

**Test method used for all seven: BLOCKED.** This environment has no live outbound network access to arbitrary external domains (confirmed repeatedly earlier in this session — Google Fonts CSS loads, but general web fetches do not). I cannot open these URLs, so "browser interaction / live inspection" as a test method is BLOCKED for all seven entries below, not PASS. What follows is general/genre-level knowledge where I have any confidence in it, explicitly marked UNKNOWN where I don't — never a fabricated description of a specific case study I have not actually seen.

This does not block building Clearline: CONCEPT.md commits to a specific mechanism (the line as functional navigation) independent of whatever these sites actually do. The benchmarks inform direction, not verification — the actual verification is Playwright screenshots of Clearline itself, in `/artifacts/visual/`.

## BENCHMARK → PRINCIPLE → CLEARLINE TRANSLATION

| Benchmark | Principle (genre-level, unverified against the live site) | Clearline translation |
|---|---|---|
| MakeMePulse | Interactive studio case-study pages built as cinematic, scroll-driven narratives rather than static portfolio grids | The portfolio is browsed by scrubbing a line, not scrolling a grid — a different but equally non-generic browsing mechanism |
| AIR | UNKNOWN — no reliable specific knowledge of this reference | Not used as a direct source; the brief's own note ("physical form translated into digital interaction") is honored generically by having the line behave as a physical object (weight, spring, overshoot) |
| FromAnother | Bold, singular art direction as the whole identity, not a template with a coat of paint | Clearline's whole system (type, motion, cursor, layout) is derived from one governing device — the line — rather than assembled from independent decorative choices |
| Save Design | UNKNOWN — no reliable specific knowledge | Not used as a direct source |
| Stress Release | UNKNOWN — no reliable specific knowledge, though the name suggests a tactile, direct-manipulation interaction moment | The line-scrub itself is that moment: dragging it has resistance and spring, a deliberate tactile beat rather than a passive scroll |
| Just Married Booth | UNKNOWN — no reliable specific knowledge, though the name suggests visitor participation/contribution | The contact section has the visitor draw their own line as the inquiry gesture — participation, not a form |
| Max Mara | UNKNOWN — no reliable specific knowledge, though fashion-campaign sites of this kind are generally associated with slow, controlled cinematic pacing | Section transitions are paced deliberately (the line rerouting, not a snap-cut), but Clearline does not attempt literal cinematic/video pacing since there is no real footage to pace |

See individual files in this directory for the per-benchmark detail the brief requested (URL / what is being studied / observed principle / implementation target / our result / gap). The "our result / gap" columns are filled in during the verification passes (QUALITY_GATE.md), after the site actually runs.
