---
name: frontend-project-structure
description: Use when adding features, files, or organizing the codebase into feature-sliced modules.
---

# Trigger
Use for any new file, feature, refactor, or code placement decision in the frontend codebase.

# Structure

## Core rule
Use a feature-sliced architecture. Keep logic close to the feature that owns it, and promote only shared code to global folders.

## Folder placement
- `app/` → routes, layouts, pages
- `components/` → shared UI and wrappers
- `features/<feature>/` → feature-owned logic
- `hooks/` → global client hooks only
- `lib/` → shared infrastructure (fetcher, auth, utils, permissions)
- `services/` → cross-feature server services
- `store/` → app-wide Zustand stores
- `types/` → global/shared TypeScript types
- `schemas/` → shared Zod schemas
- `config/`, `constants/`, `context/` → app-wide shared setup

## Feature module structure
Inside `features/<feature>/`:
- `components/`
- `hooks/`
- `services/`
- `actions.ts`
- `schemas.ts`
- `types.ts`
- `stores.ts`
- `constants/`
- `utils.ts`
- `lib/`

## Fetcher naming and placement
### Server fetching
- Put server fetchers in `services/`.
- Use one file per action.
- Name files by intent: `get-user.ts`, `get-users.ts`, `delete-user.ts`, `create-user.ts`, `update-user.ts`.
- Keep the file name aligned with the action, not the implementation.

### Client fetching
- Put client data-fetching logic in `hooks/`.
- Use React Query or equivalent hook-based client fetching there.
- Name hooks with the action form: `use-get-user`, `use-get-users`, `use-delete-user`, `use-create-user`, `use-update-user`.
- Keep client fetch logic out of components unless it is trivial.

## Type placement
- Use `types/` for global types shared across multiple pages, features, hooks, or backend-facing models.
- Prefer `types/` for base entities used broadly, such as `user.ts`, `product.ts`, `order.ts`, etc.
- Use `features/<feature>/types.ts` only for feature-specific types that are not reused elsewhere.
- If a type is likely to be reused across multiple pages or hooks, make it global early.

## Data flow
- Server-first by default.
- SSR or server-side reads → `services/`
- Interactive client reads → `hooks/`
- Mutations → `actions.ts`
- Feature-specific UI → `components/`

## Naming conventions
- Files: lowercase with hyphens.
- Hooks: `use-get-x`, `use-create-x`, `use-update-x`, `use-delete-x`.
- Services: `get-x.ts`, `create-x.ts`, `update-x.ts`, `delete-x.ts`.
- One responsibility per file.

# Steering
- Keep code colocated by ownership.
- Promote code to global folders only when it is reused across features/pages/hooks.
- Prefer explicit file names over generic ones.
- Prefer consistency over cleverness.
- Split files early when a module starts mixing concerns.

# Pruning
- Do not place shared/global types inside feature folders.
- Do not put client hooks in `services/`.
- Do not put server fetchers in `hooks/`.
- Do not create multi-action files when each action can have its own file.
- Do not duplicate shared models across features.
- Do not move code to `types/` unless it is truly reused beyond one feature.