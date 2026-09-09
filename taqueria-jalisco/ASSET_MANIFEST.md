# ASSET_MANIFEST.md — Taqueria Jalisco

Every image referenced in `index.html`, verified to actually resolve — not just present as a code reference. Verified via Playwright: navigated the real page, scrolled to trigger all lazy-relevant sections, and checked `img.complete && img.naturalWidth > 0` for every `<img>` element in the live DOM, plus listened for failed network requests.

## Verification result

**12 `<img>` tags, 12/12 resolved (0 broken).** The only failed network request across the whole page load is the pre-existing, expected Google Fonts fetch failure (`ERR_CONNECTION_RESET`) — this sandbox's network policy blocks that domain; it has no effect on any image asset, and the fallback font stack (`serif`/`system-ui, sans-serif`) renders correctly in its place.

| File | Source | Role | Used in | Dimensions | License/approval status |
|---|---|---|---|---|---|
| `storefront-hero.jpg` | Extracted directly from the attached PDF (page 1, embedded image) | HERO / STOREFRONT | `#hero` background | 680×510 | User-supplied for this build; real photo of the actual restaurant, not a third-party stock/Yelp/Google image |
| `mural-serenade.jpg` | PDF page 2 | MURAL / STOREFRONT_INTERACTION | `#threshold` (the arch-reveal interaction) + `#murals` entry 01 | 258×258 | Same as above |
| `mural-sign-restaurante.jpg` | PDF page 2 | MURAL / SIGNAGE | `#murals` entry 04 | 258×258 | Same as above |
| `mural-portrait-papel-picado.jpg` | PDF page 2 | MURAL | `#murals` entry 02 | 258×258 | Same as above |
| `mural-ranch-longhorns.jpg` | PDF page 2 | MURAL | `#murals` entry 03 | 258×258 | Same as above |
| `food-combo-plate.jpg` | PDF page 3 | FOOD HERO | `#food-hero` background + `#reviews` (review 2 support image) | 258×258 | Same as above |
| `food-crispy-tacos.jpg` | PDF page 3 | FOOD DETAIL | `.food-detail-row` + `#reviews` (review 1 support image) | 258×258 | Same as above |
| `drink-margarita-dosxx.jpg` | PDF page 3 | DRINK / ATMOSPHERE | `.food-detail-row` | 258×258 | Same as above |
| `drink-frozen-green.jpg` | PDF page 3 | DRINK / ATMOSPHERE | `#reviews` (review 3 support image) | 258×258 | Same as above |
| `storefront-side.jpg` | PDF page 1 | STOREFRONT (secondary) | **Extracted but not currently used in the page** — see note below | 258×258 | Same as above |

## Third-party photo rule (Yelp/Google) — explicitly not used

Per this task's own Section 10 and this sandbox's confirmed network policy (both `yelp.com` and Google Images results are blocked by egress restrictions — confirmed via `WebFetch` returning `EGRESS_BLOCKED` in the prior build), **no Yelp or Google-sourced photographs were fetched or used**. All ten images are the real photographs from the user-supplied PDF, which is both the only technically-reachable real-photo source and the source this task's own hierarchy ranks above Yelp/Google photo research anyway.

## Honest note on `storefront-side.jpg`

Extracted and converted along with the other nine, but not currently placed anywhere in the page — the accessible-entrance/ramp photo didn't have a clear compositional role once the main facade photo was doing the hero job and the four murals were doing the storytelling job. Left in `assets/` rather than deleted, in case a future pass finds a use for it (e.g., an accessibility-note detail shot) — noted here rather than silently unused.

## Desktop/mobile behavior

All ten used images are `object-fit:cover` within fixed-aspect-ratio or fixed-height containers, so none distort. Mobile-specific crop adjustment was necessary and applied for exactly one image (`storefront-hero.jpg` — see PROGRESS.md's Pass 2 entry for the real bug this fixed: a photographed sign/HTML wordmark collision on narrow viewports).
