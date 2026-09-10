# Lee Electric — Concept

**Business:** Lee Electric, 3521 50th St #47, Lubbock, TX 79413,
(806) 535-3352
**Google:** 4.6★, 79 reviews

## The source image is the brand — preserved, not redesigned

The client supplied one real image: Lee Electric's actual logo — a bald
eagle over an American flag, "RESIDENTIAL · COMMERCIAL" arched above in
gold, "Lee Electric" in red/gold script below, with a lightning bolt worked
into the wordmark itself. Per the brief's explicit instruction, this was
**never redrawn, retraced, or replaced**. The exact image was extracted
from the supplied PDF, its pure-black background converted to true alpha
transparency (the source background measured RGB(0,0,0) uniformly — a
clean cut, not a matte guess), and compressed to WebP for reasonable file
size. It's used directly, unmodified, as the hero centerpiece, the nav
mark, and the footer mark.

## Color system, extracted from the image

Sampled dominant colors directly from the source pixels (excluding the
black background):
- Gold `#e0af1f`/`#ffdf5c` — from the "RESIDENTIAL · COMMERCIAL" lettering
  and eagle beak. Used as the site's "current/electricity" accent color.
- Red `#cc1414` — from the "Lee Electric" wordmark. Used as the primary
  brand/CTA color.
- Navy `#0d1440` — from the flag's star field. Used as a secondary dark
  tone.
- White/black — from the eagle and the logo's own background.

This is a deliberate, source-derived palette, not a designer's guess at
"what an electrician site should look like."

## Creative thesis: OFF → CURRENT → POWER

Electricity is invisible until it's needed. The hero opens on a dark,
inactive circuit network; current traces animate in and illuminate in
sequence; the real Lee Electric logo powers on at the end (a glow/scale-in
timed to the last circuit reaching the center) rather than being placed
statically on the page. This motion language — dim/off, traveling current,
lit/active — continues through hover and tab-selection states across the
whole site (the "Power Grid" service selector, the diagnose-card hover
states).

## Verified facts and how they're used

A dedicated research pass flagged something important: the exact address
(3521 50th St #47) and exact phone ((806) 535-3352) the client supplied
could not be tied together on a single independent source — the
best-corroborated public "Lee Electric" record (BBB/Yelp/Angi) consistently
shows a *different* street number (4206A 50th St) and a *different* phone.
The client's brief explicitly supplied these exact facts as verified and
said not to change them, so they're used as given (the same trust extended
to every client-supplied fact this session) — but because of that
ambiguity, the site does **not** add anything from the secondary sources
that could belong to a mismatched record: no owner name, no license
number, no "23 years in business," no expanded service list (ceiling fans,
panel work, breakers, LED lighting, pool/hot tub electrical). Those all
trace back to the address/phone combination the research flagged as
possibly a different variant of the business.

What *is* used: the two service categories directly visible on the
client's own real logo — "Residential" and "Commercial" — plus the
specific, review-evidenced examples of real work (a whole-house outage
affecting A/C and kitchen power, pendant light installation, a crooked
switch cover-plate fix). Nothing beyond what the logo or the reviews
themselves support.

## Reviews — used exactly as supplied

All 6 supplied review excerpts (3 short, 3 long) are reproduced verbatim.
The Cathy Sypert review was supplied truncated with an ellipsis — shown
exactly as truncated, with an explicit on-page note, not completed or
guessed. "Mr. Lee" and "Greg" appear only inside the verbatim quotes;
the site never asserts either as the business owner, consistent with the
brief's explicit caution (echoed by the research pass, which found
independent-but-uncertain corroboration for a "Greg Lee" as owner tied to
the *possibly-different* address/phone combination discussed above).

## Real bugs found and fixed during build

The gold star-rating color (`#e0af1f`) measured 1.92:1 against the paper
background — a serious WCAG failure, computed via the relative-luminance
formula, not eyeballed. Fixed by introducing a separate darker
`--gold-text` (`#8b6d13`) for text-on-light contexts (star ratings, step
numbers) while keeping the vivid `--gold`/`--gold-bright` for the
dark-background circuit/glow treatment where it already passed easily.
