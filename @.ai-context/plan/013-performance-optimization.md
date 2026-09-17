# Performance Optimization Plan

## Overview
Optimize Next.js portfolio for maximum performance, smoothness, and responsiveness without changing design or functionality.

## Current State Audit

### Issues Found
1. **Images**: Missing `sizes` attributes, no `priority` for LCP, no Sanity image optimization
2. **Data Fetching**: Over-fetching in queries, no selective field fetching
3. **Animations**: Framer Motion everywhere, some could be CSS, viewport not optimized
4. **JS Bundle**: GSAP loaded but unused (SmoothScroll commented), heavy motion library
5. **Hydration**: Potential issues with language state
6. **Components**: Some client components could be server, lazy loading opportunities

## Implementation Steps

### Step 1: Image Optimization
- [x] Add `sizes` attributes to all Image components
- [x] Add `priority` to LCP images (hero, first project)
- [x] Add `loading="lazy"` and `decoding="async"` where appropriate
- [x] Optimize image dimensions and formats

**Status:** [x] Completed

### Step 2: Data Fetching Optimization
- [x] Reduce PROJECT_QUERY to only needed fields (removed role, client)
- [x] Optimize caching strategy (revalidate: 3600s)
- [x] Remove unused fields from queries

**Status:** [x] Completed

### Step 3: Animation Optimization
- [x] Add `viewport={{ once: true }}` to all motion components
- [x] Add `will-change` CSS hints for scroll-animated elements
- [x] Optimize scroll handlers with requestAnimationFrame

**Status:** [x] Completed

### Step 4: JavaScript Reduction
- [x] Remove unused GSAP and SmoothScroll
- [x] Remove unused framer-motion package
- [x] Remove unused use-resize-observer package
- [x] Lazy load Particles component (client wrapper)
- [x] Remove dead code (unused refs, imports)

**Status:** [x] Completed

### Step 5: Component Optimization
- [x] Optimize next.config.ts (image formats, cache TTL, optimizePackageImports)
- [x] Optimize font loading (preload, variable)

**Status:** [x] Completed

### Step 6: Hydration & Warnings
- [x] Fix language state hydration (refactored useEffect)
- [x] Remove unused imports

**Status:** [x] Completed

### Step 7: Core Web Vitals
- [x] Optimize LCP (priority images, proper sizes)
- [x] Reduce CLS (proper image dimensions)
- [x] Improve INP (optimized scroll handlers)
- [x] Add proper font loading strategy

**Status:** [x] Completed

## Success Criteria
- Lighthouse score > 90 for Performance
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- No hydration warnings
- Smooth 60fps animations on mobile
