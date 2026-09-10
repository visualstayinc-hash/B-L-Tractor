# Crockett Drum Plumbing Heating & Air — Concept

**Business:** Crockett Drum Plumbing Heating & Air, 8808 Urbana Ave,
Lubbock, TX 79424, (806) 866-0588
**Google:** 4.4★, 38 reviews

## No-photo constraint

No client photos were supplied for this project. Per the brief, the site
is built entirely from code-generated visuals — inline SVG, CSS, and
motion — rather than stock photography standing in for real work. Nothing
on the site claims to depict "our team," "our truck," or "our work" — every
image is an original diagram or system visualization.

## Core thesis: THE SYSTEM

A house runs on three systems — water (plumbing), heat (heating), and
airflow (air conditioning). Crockett Drum keeps them working. The entire
visual language is built from this idea: animated pipe/duct/thermal paths
that converge into the brand, rather than a generic hero photo + icon-grid
template.

## Verified facts and how they're used

A dedicated research pass (WebSearch, cross-referenced against
address+phone since at least 3 similarly-named Lubbock plumbing businesses
exist) confirmed:
- Name, address, phone match "Crockett Drum Plumbing, Inc." exactly —
  confirmed via corporate filing records, Yelp, Yellow Pages, and Chamber
  of Commerce listings that all converge on the same triple.
- Hours: Mon–Fri 8am–5pm, Sat 8am–12pm, Sun closed — corroborated across
  multiple public directories, consistent with Google's own "Open · Closes
  5 PM" snippet. Shown on-site as "per public listings — call to confirm,"
  not as a guaranteed fact, since the agent could not load the live Google
  Business Profile directly to verify Saturday/Sunday hours firsthand.
- "Over 30 years" in business — corroborated by an actual TX corporate
  filing date (11/27/1989) plus a Blue Book contractor listing dating to
  2010. Used once, in the hero subhead.
- Service categories: plumbing (drain & sewer cleaning, fixture and water
  heater installation), air conditioning service & repair, heating
  contracting — corroborated across Yelp/Yellow Pages/Chamber of Commerce.
- "Mr. Crockett" is NOT confirmed as any real living owner — the research
  found the company's actual officers are Davy Drum (President) and Darla
  Drum (Secretary). The site never asserts "Mr. Crockett" or "Mr. Drum" as
  the owner; both names appear only inside the verbatim customer review
  quotes where the reviewers themselves used them.

## Reviews — used exactly as supplied

Two full reviews (Jerry Reyes, Baylee Stovall) and two short quotes are
reproduced verbatim. The Jerry Reyes review was supplied truncated with an
ellipsis — it's shown exactly as truncated, with an explicit on-page note
("Shown as supplied — the source review continues beyond this point")
rather than inventing or guessing the missing ending.

The 4.4★/38-review rating is shown as-is — not rounded up, not described
as "perfect" or "100% satisfaction." The reviews section explicitly states
the feedback is mixed, per the brief's own caution against overclaiming.

## Signature interaction

The three-system selector (Plumbing / Heating / Air tabs) is real
state-driven interactivity, not decoration: clicking a tab changes the
headline, description, metadata, and which branch of the diagram SVG is
highlighted — verified via Playwright by reading the actual DOM state
before and after each click, not just visual inspection.

## Real bugs found and fixed during build

1. **Duplicate "Call Now" button on desktop** — the mobile-only nav CTA had
   no default `display:none`, so it rendered a second time in the desktop
   nav (the same class of bug caught and fixed in an earlier project this
   session). Fixed.
2. **Hero system-path lines crossed directly over the headline and body
   text on mobile** — the hero background SVG scales via
   `preserveAspectRatio="xMidYMid slice"`, which on a narrow/tall mobile
   viewport scales up enough that the converging path lines land squarely
   behind the text, reading as strikethrough lines. There was no dimming
   layer to prevent this. Fixed by adding a radial vignette specifically
   behind the hero content, strengthened further on mobile.
3. **WCAG contrast failures on `--water` (eyebrow text, small stat labels)
   and `--heat` (star-rating color) against light backgrounds** — computed
   via the relative-luminance formula: 4.32:1 and 3.41:1 respectively,
   both under the 4.5:1 required for text this size. Fixed by darkening
   both base colors (`--water` to `#1256bd`, `--heat` to `#b23414`),
   verified to pass 6.3:1 and 5.8:1 against the paper background.
