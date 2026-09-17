# Plan: Extract ProjectLink into a marquee section after Hero

## Steps

1. **Marquee keyframes**
   - [x] Add `--animate-marquee` + `@keyframes marquee` to `app/globals.css` `@theme inline`.

2. **Project links query**
   - [x] Add `PROJECT_LINKS_QUERY` in `sanity/lib/query.ts` returning all projects with `links` + `name`.

3. **ProjectLinks section**
   - [x] Create `sections/ProjectLinks.tsx` (server) using marquee layout (no color change), maps all projects with links.

4. **Separate from FeaturedProject**
   - [x] Remove inline `ProjectLink` and top nav map from `sections/FeaturedProject.tsx`; drop unused `SquareArrowUpRight` import.

5. **Wire into page**
   - [x] Add `<ProjectLinks />` right after `<HeroSection />` in `app/page.tsx`.

6. **Verify**
   - [x] `npx tsc --noEmit` clean. Lint config broken pre-existing (`next lint` removed in Next 16; eslint config circular JSON error), unrelated to this change.

## Progress

- Step 1: completed
- Step 2: completed
- Step 3: completed
- Step 4: completed
- Step 5: completed
- Step 6: completed
