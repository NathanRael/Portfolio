# Smooth scroll implementation plan

## Goal
Add inertia/latency-based smooth scrolling to the portfolio using the already-installed GSAP (and Framer Motion fallback capability). Keep existing page structure and animations intact.

## Plan

1. **Audit current scroll setup**
   - [x] Confirm `gsap`, `framer-motion`, and `motion` are in `package.json`.
   - [x] Read `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, and `components/sections/Navbar.tsx`.
   - [x] Identify anchor links (`#contact`, nav items) and existing `scroll-behavior: smooth` CSS.

2. **Design the smooth-scroll component**
   - [ ] Create `components/SmoothScroll.tsx` as a client component.
   - [ ] Register `gsap/ScrollToPlugin`.
   - [ ] Track a virtual `targetY` scroll position.
   - [ ] On `wheel`, prevent native scroll, accumulate delta into `targetY`, clamp to document bounds, and `gsap.to(window, { scrollTo: { y: targetY }, ... })` with an ease that creates latency/inertia.
   - [ ] Sync `targetY` to `window.scrollY` when the user overrides via scrollbar/keyboard/touch so the next wheel event doesn't jump.
   - [ ] Intercept anchor/hash clicks, prevent native jump, and animate to the target element with GSAP.
   - [ ] Disable conflicting CSS `scroll-behavior: smooth` while the component is active.

3. **Integrate into layout**
   - [ ] Render `<SmoothScroll />` in `app/layout.tsx`.

4. **Verify**
   - [ ] Run `next lint` and fix issues.
   - [ ] Run dev/build if feasible to confirm no runtime errors.

## Progress

- [x] Step 1 — Audit current scroll setup
- [x] Step 2 — Design the smooth-scroll component
- [x] Step 3 — Integrate into layout
- [x] Step 4 — Verify
