---
name: table
description: Use when implementing list views, tables, pagination, filters, or action cells.
---

# Table Rules

## Core Stack

- Always use **TanStack Table** (`@tanstack/react-table`) as the headless engine + **shadcn Table** (`components/ui/table`) for rendering
- Never build tables with raw HTML or custom implementations

## Pagination

- Every table **must** have pagination
- **Server-side pagination is preferred** over client-side when the API supports it
- Pagination state lives in URL params via `useQueryParams()`: `page` (1-indexed) and `limit` (items per page)
- Use the `Pagination` component from `components/pagination.tsx`
- Include `TableLimitSelect` from `components/table-limit-select.tsx` for page size selection (5, 10, 15, 20)
- Filter/search changes must reset `page` to `"1"`

## Filters

- Every table should have filters when the context allows it — do not force filters if there is no meaningful data to filter on
- Use `SearchInput` from `components/search-input.tsx` with debounce: `useDebounceValue(value, 500)` then sync to URL via `setParams({ q: debouncedValue })`
- Use `FiltersForm` + `FilterDropdown` / `FilterDropdownMulti` from `components/filter/` for select-based filters
- All filter state is stored in URL search params via `useQueryParams()`

## Data Flow

```
Page (server) → reads URL params, creates Promise
  └── Wrapper (server) → awaits Promise, passes plain data
       └── Table (client) → useReactTable + shadcn Table + Pagination
```

## Column Definitions

- Define columns via a **factory function** that accepts a config object and returns `ColumnDef<T>[]`
- Build columns with `useMemo` in the table component
- Actions column is always last
- Extract complex cell renderers as named sub-components

```tsx
export function entityColumns(config: EntityColumnsConfig): ColumnDef<Entity>[] {
  const cols: ColumnDef<Entity>[] = [/* ... */];
  cols.push({
    id: "actions",
    header: "Actions",
    enableSorting: false,
    cell: ({ row }) => config.actionRenderer(row.original),
  });
  return cols;
}
```

## Action Cells

- Use `DropdownMenu` with `MoreVertical` icon trigger (or `EllipsisVertical`)
- Trigger button: `variant="ghost"`, `size="sm"`, `h-8 w-8 p-0`
- Always call `e.stopPropagation()` on click handlers to prevent row-level events
- Use `RoleFilter` to gate role-specific menu items
- Destructive actions: `text-destructive` styling + confirmation dialog

## Table Styling

- Container: `w-full border rounded-lg overflow-hidden`
- Header: `bg-background-100/50 h-14`
- Rows: `h-14`, cells at `px-10`
- Empty state: single `TableRow` with `colSpan={columns.length}`, centered text, `h-24`

## Loading / Error / Empty States

- Wrap the table in a loading/error wrapper component
- Loading: centered `Loader2` spinner + text
- Error: centered error message with `text-destructive`
- Empty: centered message ("Aucun resultat")
