# Visual checklist — written before implementation

Maps to the Visual, Interaction & Motion, Anti-Slop/Anti-Template, Portfolio & Client Trust, and Mobile sections of QUALITY_GATE.md. Evaluated by actually looking at Playwright screenshots in `/artifacts/visual/`, never by reading the CSS and assuming.

## Composition
- [ ] First viewport is distinctive, not a generic hero (V01).
- [ ] Every viewport has a clear primary/secondary/tertiary focus (V02).
- [ ] With animation mentally removed, the page still reads as an intentional composition — the screenshot test (V03).
- [ ] Typography choices are deliberate; mono is used as measurement, not decoration (V04).
- [ ] Palette reads as Clearline's own, not a generic dark-agency default (V05).

## Interaction & motion
- [ ] Line-scrub shows visible spring/overshoot on release (I01).
- [ ] Opening a portfolio plot draws-on its resolution, does not instant-swap (I02).
- [ ] The "start a line" canvas visibly marks under a simulated draw gesture (I03).
- [ ] Motion has hierarchy — not everything animates the same way (MO01).
- [ ] Every animation traces to a stated trigger/purpose (MO02).

## Anti-slop / anti-template
- [ ] No generic hero, card grid, gradient/pill/glassmorphism, blanket fade-up, or meaningless cursor effect (S01–S05).
- [ ] **Anti-template test**: could this exact architecture be reused for a plumber/realtor/landscaper/dentist/laundromat/detailer by swapping text and images alone? Must be NO — the line-scrub nav and portfolio mechanism are structurally tied to Clearline's own concept (T01).

## Portfolio & client trust
- [ ] Portfolio browsing is itself a demonstration of craft, not a static list (P01).
- [ ] Six plots are visibly distinct in medium/shape (P02).
- [ ] A first-time visitor can state, within two viewports: what Clearline does, what it makes, why the work is credible, how to contact them (C01–C04).

## Mobile (real mobile-viewport screenshots — not CSS reading)
- [ ] Mobile composition is recomposed, not a collapsed desktop stack (M01).
- [ ] Line-scrub nav is touch-operable (M02).
- [ ] Mobile typography is legible and correctly scaled, no overflow (M03).
- [ ] Portfolio plots are reachable and openable by touch (M04).
