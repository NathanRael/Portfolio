# 007 Skills Scroll Stack

## Progress

- [x] 1. Inspect relevant skills, current Skills section, and dependencies
- [x] 2. Define full-screen two-column service section and ScrollStack integration
- [x] 3. Implement ScrollStack component and redesign service cards
- [ ] 4. Run lint and fix related issues
- [x] 5. Review diff and confirm final structure

## Implementation Plan

### 1. Inspect project context

- [x] Read design-system, component-architecture, frontend-project-structure, and code-standard skills.
- [x] Inspect `sections/Skills.tsx`, global tokens, and package dependencies.

### 2. Define visual structure

- [x] Separate “What I Can Build For You” from technology stack content.
- [x] Make services section fill at least one viewport height.
- [x] Put service cards left and heading/subtitle right on desktop.
- [x] Preserve bilingual translation spans and project color tokens.

### 3. Implement feature

- [x] Add typed `ScrollStack` and `ScrollStackItem` client components.
- [x] Add scoped ScrollStack CSS with responsive behavior.
- [x] Redesign service cards with stronger hierarchy, index labels, accents, and enhanced copy.
- [x] Removed `lenis` dependency; stacking is now pure CSS sticky positioning.

### 4. Verify

- [ ] Run project lint. Blocked by existing `next lint` script behavior on Next 16 and circular legacy ESLint config error.
- [x] Fix lint/type issues caused by implementation; TypeScript and Prettier pass.
- [x] Review diff and working tree.

## Verification

- `pnpm exec tsc --noEmit` passes.
- `pnpm exec prettier --check sections/Skills.tsx components/shared/ScrollStack.tsx components/shared/ScrollStack.css` passes.
- `pnpm build` passes.
- `pnpm lint` remains blocked by existing repository lint configuration.

## Follow-up fixes

- First attempt used a JS transform + Lenis smooth-scroll approach. It flickered and never stacked correctly: Lenis smooth scrolling (`lerp: 0.1`) and a native `scroll` listener both drove transforms, the `blur` filter stepped, and framer-motion `whileInView` re-triggered.
- Rebuilt the animation and layout to match the `services-scroll-stack` reference: a tall scroll track (`height: N * 100vh`), a sticky viewport, and absolutely positioned panels that slide up (`translateY`) to cover each other. No Lenis, no per-card scale transforms.
- Left column is now a sticky sidebar (heading, subtitle, and a live counter with progress bar) instead of a floating centered block.
- Service cards are larger (`min-h-[68vh]`) with icon, index, big title, description, and a tag row, but keep the project's own design tokens (not the reference's paper aesthetic).
- Removed the `lenis` dependency and unused framer-motion imports.
