---
name: component-architecture
description: Use when creating, splitting, reviewing, or refactoring React components and hooks.
---

# Trigger
Use when a component becomes large, mixes rendering with logic, needs client/server separation, or contains reusable UI or business logic.

# Structure

## Components
- One component = one clear responsibility.
- Keep components primarily focused on rendering and composition.
- Prefer splitting around distinct visual sections, reusable UI, or independent state.
- Use `<entity>-<role>.tsx` naming: `user-table.tsx`, `user-modal.tsx`, `user-details-card.tsx`, `user-table-wrapper.tsx`.
- Keep components roughly under 200 lines; split earlier when readability suffers.

## Logic
- Extract state, effects, callbacks, form logic, filters, and business logic into custom hooks.
- Prefer one hook per logical concern: `use-user-form.ts`, `use-user-filter.ts`.
- Hooks return only the state/actions required by the component.
- Put pure reusable logic in `utils.ts` or `lib/`.
- Avoid business logic inside JSX, `onClick`, or other event handlers.

```tsx
Component
  └── hook → state/effects/callbacks/data
       └── utils/lib → pure logic
```

## Server / Client

- Keep static/render-only components as Server Components.
- Add `"use client"` only when client behavior is required.
- Separate data fetching from interactive rendering when necessary:
  `wrapper.tsx` (server) → fetches/awaits → `component.tsx` (client) → renders/interacts.
- Do not make a parent client component only because one child needs `"use client"`; isolate the client boundary.

## Component slicing

Extract a section when it:

- has its own state/effects
- represents a distinct visual responsibility
- is reused
- appears in a loop
- makes the parent difficult to read
- contains excessive JSX

## Reusability

- Feature-only components → `features/<feature>/components/`
- App-wide composites → `components/shared/`
- Shared UI primitives → `components/ui/` (shadcn; do not modify)
- Cross-feature reusable domain UI → appropriate shared component folder
- Reuse through props/configuration rather than duplicated JSX.

# Steering

- Prefer the smallest component that remains readable.
- Prefer composition over deeply nested abstractions.
- Extract logic before extracting components when the problem is mainly behavioral.
- Extract components before creating generic abstractions when the problem is mainly visual.
- Keep client boundaries as small as possible.
- Reuse existing components and patterns before creating new ones.

# Pruning

- Do not keep 400+ line components with mixed concerns.
- Do not copy-paste repeated JSX.
- Do not put business logic directly in components when it can live in a hook or utility.
- Do not add `"use client"` to static components.
- Do not create a hook for trivial local rendering state unless it improves clarity.
- Do not create generic reusable components prematurely.
- Do not move feature-specific components into global folders without real cross-feature reuse.
