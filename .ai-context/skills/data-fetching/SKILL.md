---
name: data-fetching
description: Server-first data access, server actions, and React Query conventions
---

# Trigger

Use when adding or modifying any API call, server action, data hook, or query in this repo. Applies to reads (queries) and writes (mutations) against the backend.

# Structure

## Server fetching (default)

- Use `lib/fetcher.ts` (`"use server"`). Exports `get`, `post`, `put`, `patch`, `del`. It injects auth cookie + bearer token from `next/headers` cookies, supports `cache`/`tags`/`revalidate`, and throws `ApiError` (`types/api.ts`) on non-OK.
- URL fragments are relative: `"/events"`, `"/events/${id}"` — never a full base URL.
- Server fetchers live in `features/<feature>/services/`. One file per action, action-based kebab-case name:

  `get-user.ts` -> `getUser`
  `create-user.ts` -> `createUser`
  `update-user.ts` -> `updateUser`
  `delete-user.ts` -> `deleteUser`

  Each file starts with `"use server";` and imports from `@/lib/fetcher`.

```ts
"use server";
import { get } from "@/lib/fetcher";
import { User } from "@/types";

export const getUser = async (id: number | string) => {
  return await get<User>({ url: `/users/${id}` });
};
```

- Query strings: build with `withQuery()` from `lib/utils.ts`. It skips null/undefined/empty values.
- List endpoints: type response as `ListApiResponse<T>` from `lib/api-response.ts` (`{ totalItems, member }`).
- Server components call service functions directly. Wrap in `cache()` (`react`) when the same data is read in multiple places (see `features/auth/services/get-current-user.ts`).

## Server actions (mutations — preferred)

- Build with `next-safe-action` `actionClient` from `lib/safe-actions.ts`.
- Zod schema in `features/<feature>/schemas.ts`; derive payload types with `z.infer`.
- Actions in `features/<feature>/actions.ts`: `"use server";`, then `actionClient.inputSchema(schema).action(async ({ parsedInput }) => ...)`.
- On error return `returnValidationErrors(schema, { _errors: [...] })`; use `handleActionValidationErrors` (`lib/validation-error-handler.ts`) for backend violations.
- After a successful write, call `revalidatePath(path, "page")` for the affected server-rendered pages.
- Actions call thin service functions in `services/` — keep HTTP in services, orchestration in actions.

## Client fetching (only when browser interactivity requires it)

- Transport: `apiClient` from `lib/axios.ts` (baseURL `/api/proxy`, `withCredentials`) or `httpClient` from `lib/http-client.ts`. Never call backend URLs directly from client code.
- Client logic belongs in `hooks/`. Naming mirrors the action, hook-style:

  `use-get-user.ts` -> `useGetUser`
  `use-create-user.ts` -> `useCreateUser`
  `use-update-user.ts` -> `useUpdateUser`
  `use-delete-user.ts` -> `useDeleteUser`

  Feature-local hooks: `features/<feature>/hooks/`. Cross-cutting query hooks: `hooks/query/`.

```ts
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { apiClient } from "@/lib/axios";
import { User } from "@/types";

export const useGetUser = (id: number | string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_USER_BY_ID(id),
    queryFn: () => apiClient.get<User>(`/users/${id}`),
    enabled: options?.enabled,
  });
};
```

## React Query wiring

- Query keys live in `constants/query-keys.ts` as `QUERY_KEYS.GET_*`. Use key-factory functions when the key has params: `GET_USER_BY_ID: (id) => ["get_user_by_id", id]`.
- Defaults in `lib/query-clients.ts`: `networkMode: "always"`, `refetchOnWindowFocus: false`.
- Mutations: `useMutation` with `mutationFn` delegating to the service, then `queryClient.invalidateQueries({ queryKey: QUERY_KEYS.... })` in `onSuccess`.
- Client wrappers for safe actions use `useAppAction` (`hooks/use-app-action.ts`), which normalizes success/error via `getActionError` (`lib/utils.ts`).

## Type placement

- Global data models / entities reused across multiple pages, hooks, or features -> `types/` (`types/user.ts`, `types/auditor.ts`). Re-export through `types/index.ts` and import from `@/types`.
- Feature-local types -> `features/<feature>/types.ts` (or `type.ts`), imported relatively (`../types`).
- API/error types (`ApiError`, `BackendErrorResponse`, `FieldError`) -> `types/api.ts`.

# Steering

- Server fetching is the default. Reach for client fetching only when interactivity (optimistic UI, polling, client-only state) genuinely requires it.
- Strongly prefer server actions (`actionClient`) for mutations; fall back to client `useMutation` hooks only for client-only flows.
- One file per action in `services/`; one file per hook in `hooks/`.
- Prefer explicit action-based names (`getUser`, `useGetUser`) over generic (`fetchData`, `useApi`, `data-service`).
- Keep URL fragments relative and reuse `lib/fetcher.ts`; do not write new fetch wrappers.
- Promote types to `types/` only when reused across features; otherwise keep them feature-local.

# Pruning

- Do not call backend URLs directly from browser code — always go through `/api/proxy` (`apiClient`) or `httpClient`.
- Do not bypass cookie-based auth/refresh by using raw `fetch` in client components.
- Do not mix `api` (`/api`) and `apiClient` (`/api/proxy`) from `lib/axios.ts` inconsistently; prefer `apiClient`.
- Do not create generic service/hook files (`api.ts`, `services.ts`, `data.ts`) — use action-based one-file-per-action.
- Do not duplicate query keys or permission checks; extend `constants/query-keys.ts` and the ability builders.
- Do not hoist single-feature types into `types/` prematurely.
- Do not put validation logic inline in components/pages; keep it in `schemas.ts` + `actions.ts`.
