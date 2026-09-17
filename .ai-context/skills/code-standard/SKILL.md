---
name: code-standard
description: Use when writing or reviewing code to enforce project conventions (TypeScript, Next.js, state, permissions, errors, dates, E2E).
---

# Code Standards

## General

- Keep modules small and single-purpose
- Fix root causes — do not layer workarounds
- Do not mix unrelated concerns in one component or route
- Do not add comments unless explicitly requested
- All interactive elements must carry a `data-cy` attribute for Cypress E2E testing

## TypeScript

- Strict mode is required throughout the project
- Avoid `any`; use explicit interfaces or narrowly scoped types
- Use `interface` for object contracts
- Use `z.infer<typeof schema>` to derive form/action types from Zod schemas — never duplicate the shape manually
- Export types from barrels: `types/index.ts` for global, `features/<f>/types.ts` for feature-local
- When a type is used by two or more features, promote it to `types/`

## Next.js

- Default to React Server Components — no `"use client"` unless the component needs hooks, browser interactivity, or real-time state
- Keep route handlers focused on a single responsibility
- Pages should be thin wrappers that import feature components and pass promises
- Layouts are forced dynamic (`dynamic = "force-dynamic"`) when they perform auth/permission checks
- Breadcrumb navigation is used on detail pages only, not list pages

## The Wrapper Pattern (Server/Client Boundary)

Every list page follows a strict async-wrapper pattern:

1. **Page** (server component): reads search params, creates a data Promise, passes it to the wrapper
2. **Wrapper** (server component): `await`s the Promise, passes plain data to the client table
3. **Table** (client component): receives plain data, manages interactivity, filtering, pagination

```tsx
// page.tsx (server)
const adminsPromise = getAdmins({ page: currentPageIndex });
return <AdminTableWrapper adminsPromise={adminsPromise} />;

// wrapper.tsx (server)
const { totalItems, member: adminList } = await adminsPromise;
return <AdminTable itemCount={totalItems} adminList={adminList} />;

// table.tsx (client)
"use client";
const table = useReactTable({ data, columns, manualPagination: true, ... });
```

The Promise is resolved on the server; only serialized data crosses the boundary.

## State (Zustand)

- Use `create()` from `zustand` with `persist` middleware for persistent state
- Auth-related ephemeral state uses `sessionStorage` (via `createJSONStorage(() => sessionStorage)`)
- App-level state (organization selection) uses `localStorage` (via `createJSONStorage(() => localStorage)`)
- Store file naming: `use<Feature>Store`
- Type the store interface explicitly before `create<Interface>()`

## Permissions (CASL)

- Abilities are composed centrally in `lib/permissions/permissions.ts` via `defineAbilitiesFor()`
- Per-feature ability builders live in `features/<f>/lib/<feature>-permission.ts`
- Gate server-side rendering with `<Can I="action" a="SUBJECT">` from `lib/permissions/can.ts`
- Gate client-side rendering with the same `Can` component
- Page-level actions (list, create) and row-level actions (update, delete) are separately gated
- `PermissionContext` hydrates the Zustand permission store client-side in `app/space/layout.tsx`

## Protected Components

Do NOT modify `components/ui/*` (shadcn/ui) unless explicitly instructed. Project-specific styling lives in feature components or `components/shared/`.

## Error Handling

- Server actions: use `handleActionValidationErrors(e, schema)` from `lib/validation-error-handler` to map backend violations to field errors
- Client forms: use `handleFormValidationErrors(result, form)` to map action result errors to react-hook-form field errors
- Non-form action results: use `getActionError(response)` from `lib/utils` to extract the first error string, then `toast.error(error)`
- Always `try/catch` in actions; use `returnValidationErrors(schema, errors)` for validation errors
- The `ApiError` class from `types/api.ts` auto-extracts violations from backend responses

## Date Handling

- Use `date-fns` with `fr` locale for human-readable formatting
- Use `luxon` (`DateTime.fromISO`, `DateTime.fromFormat`) for robust date parsing
- Calendar inputs use shadcn `Calendar` + `Popover` with `locale={fr}` and `mode="single"`

## Conditional Rendering

- Prefer React's `<Activity>` component over ternary operators for conditional mount/unmount:
  ```tsx
  <Activity mode={condition ? "visible" : "hidden"}>
    <Component />
  </Activity>
  ```
- Use it for role-dependent UI (auditor-specific columns, committee sections, etc.)

## Authentication & Tokens

- Tokens are stored as httpOnly cookies (never in localStorage)
- `proxy.ts` middleware handles auth redirects and token refresh side effect
- Token names are centralized in `features/auth/constants/token-name.ts`
- After critical data changes (role updates, type changes), call `refreshToken()` + redirect to `/auth/login` to re-establish the session
- Logout clears organization store, then calls `logoutAction()`, then redirects

## E2E Testing

- All interactive elements have `data-cy` attributes
- MSW handlers live in `mocks/handlers/` with mock data in `mocks/data/`
- Handlers are aggregated in `mocks/handlers.ts`
- Mocking is active only when `NODE_ENV !== "production"` and `E2E_MOCKING_ENABLED=true`
