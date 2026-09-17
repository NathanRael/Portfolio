---
name: design-system
description: Apply the project's design system (colors, typography, spacing, layout, shadows, radius, and UI tokens) to all UI components.
---

# Trigger
Use whenever creating or modifying UI components, pages, or layouts.

# Structure

## Colors
- Use semantic tokens from `globals.css` only (`background-*`, `primary`, `secondary`, `accent`, `foreground`, `card`, `border`, etc.).
- Never use raw Tailwind colors (`gray-*`, `zinc-*`, `blue-*`, etc.) or hardcoded colors (`#`, `rgb`, `oklch`).
- Prefer `background-100/200` over `muted`.
- Use `foreground/90|80|70` for reduced emphasis.
- Reserve `muted-foreground` for labels, captions, placeholders, and icons.
- Use warning/destructive colors only as accents, not full component backgrounds.

## Typography
- Use text tokens (`title`, `subtitle`, `subtitle-2`, `lead`, `base`, `small`, `small-2`).
- Font weights: `medium`, `semibold`, `bold`.

## Spacing
- Prefer `space-*` and `gap-*` over individual margins.
- Use `app-section` for page padding.
- Keep spacing consistent across similar layouts.

## Layout
- Use shadcn/ui components for all standard controls.
- Follow page hierarchy:
  - Breadcrumb → Heading → Permission Gate → Suspense → Content.
- Use predefined list/detail layouts and grids.

## Shadows
- No shadows on standard surfaces.
- Only floating elements may use `shadow-sm` or `shadow-md`.

## Radius
- Use the shared `--radius` tokens (`rounded-sm/md/lg/xl`).
- Keep radius consistent across the app.

## Components
- Use existing shadcn variants only.
- Preserve established visual patterns.
- Use `<Activity>` for role-based UI instead of conditional rendering.

# Steering
- Prefer semantic tokens over visual styling.
- Reuse existing patterns before introducing new ones.
- Optimize for consistency, accessibility, and maintainability.

# Pruning
- Ignore these rules when explicitly requested otherwise.
- Do not redefine design tokens or create custom variants unless required.