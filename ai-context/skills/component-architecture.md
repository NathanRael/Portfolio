# Component Architecture Rules

## Single Responsibility Principle

A component does **one thing**. If it grows beyond ~200 lines or mixes concerns, split it.

| Sign | Action |
|------|--------|
| Too much business logic (state, effects, callbacks) | Extract into a **custom hook** (`use-*.ts`) |
| Multiple distinct visual sections | Split into **sub-components** in the same `components/` folder |
| Mixed data fetching + rendering | Separate into **wrapper** (server, fetches) and **inner** (client, renders) |
| A section appears in a loop or is reused | Extract to its own file |
| A section has its own state or effects | Extract + create a hook if needed |
| A section is >150 lines of JSX | Extract to keep parent readable |
| Needs `"use client"` inside a server parent | Extract as a client component |

## Logic Extraction (Face-Like Hooks)

Keep components as thin rendering shells. All logic goes into hooks and pure functions.

```
Component (rendering only)
  └── useFeatureLogic()    ← state, effects, callbacks, data fetching
       └── helper functions ← pure utilities imported from utils.ts or lib/
```

**Pattern:**
```tsx
// hooks/use-student-form.ts — ALL logic lives here
export function useStudentForm() {
  const form = useForm({ ... });
  const { data } = useGetStudent(id);
  const onSubmit = async (values) => { ... };
  return { form, onSubmit, isEditMode, ... };
}

// components/student-form-page.tsx — pure rendering
export default function StudentFormPage() {
  const { form, onSubmit, isEditMode } = useStudentForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <PersonalInfoSection form={form} />
        <ContactInfoSection form={form} />
      </form>
    </Form>
  );
}
```

**Rules:**
- One hook per logical concern (form state, filter state, data fetching, etc.)
- Hooks return only what the component needs
- Pure helper functions go in `utils.ts` or `lib/`, not inline in components

## Component Slicing

Break large components into small, focused pieces. Each file has a single clear purpose.

```
features/<feature>/components/
  entity-page.tsx              ← container: uses hook, composes sections
  entity-form-section.tsx      ← presentational: one form section
  entity-detail-card.tsx       ← presentational: one info card
  entity-action-cell.tsx       ← presentational: dropdown actions
  entity-table-columns.tsx     ← factory: returns ColumnDef[]
  entity-table-wrapper.tsx     ← server: awaits Promise, passes data
  entity-modal.tsx             ← presentational: create/update form
```

**Naming convention:** `<entity>-<role>.tsx` where role describes what it renders (table, modal, card, cell, wrapper, columns, filter, section).

## Reusable Components

If logic or UI appears more than once, extract it into a reusable component.

### Where reusable components live

| Scope | Location | Example |
|-------|----------|---------|
| App-wide UI primitive | `components/ui/` | Button, Input, Dialog (shadcn — do not modify) |
| App-wide composite | `components/shared/` | SectionTitle, PageSkeleton, FormSubmitButton |
| Cross-feature domain | `components/filter/` | FilterDropdown, FilterSearchBar |
| Feature-internal | `features/<f>/components/` | Only if reused within the same feature |

### Rules for reusable components

- Accept `className` prop and use `cn()` for class merging
- Use existing shadcn variants — never add custom color overrides via className
- Configuration-driven when possible (accept config objects/arrays as props)
- Document required props with TypeScript interfaces
- Export via barrel `index.ts` when the folder has 3+ components

### Dynamic reusable components

When the same UI pattern repeats with different data, make it data-driven:

```tsx
// Bad: duplicating the same card structure 5 times
<Card>...</Card>  // entity A
<Card>...</Card>  // entity B

// Good: one component, different props
<EntityCard config={entityAConfig} />
<EntityCard config={entityBConfig} />

// Good: render-prop pattern for flexible content
<DataTable columns={columns} data={data} renderRow={(item) => <CustomRow item={item} />} />
```

## Anti-Patterns

| Anti-Pattern | Fix |
|---|---|
| 400+ line component with inline logic | Extract hook + sub-components |
| Copy-pasted JSX blocks | Extract into a reusable component |
| Business logic inside `onClick` handlers | Move to hook or utility function |
| Component importing from 3+ features | Likely needs to be split or moved to `components/shared/` |
| `"use client"` on a file that only renders static content | Remove directive, make it a server component |
| Inline styles or hardcoded values | Use design tokens and Tailwind classes |
