# Design System Rules

## Colors

- Always use color tokens defined in `globals.css` (`bg-background-50` through `bg-background-950`, `bg-primary-*`, `text-foreground`, `bg-card`, `bg-secondary`, `bg-accent`, etc.)
- Never use raw Tailwind color classes: `zinc-*`, `slate-*`, `gray-*`, `blue-*`, `amber-*`, `yellow-*`, `red-*`, `green-*`, `emerald-*`, `indigo-*`
- Never use hardcoded hex or `oklch(...)` values in component className
- Do not overuse `primary`. Rotate between `secondary`, `accent`, `background-*` scale, and other semantic tokens
- For subdued text, use `text-foreground/90`, `text-foreground/80`, or `text-foreground/70` instead of `text-muted-foreground`
- `text-muted-foreground` is reserved for labels, captions, placeholder text, and icons only
- For background fills, prefer `bg-background-100` or `bg-background-200` over `bg-muted`
- If `bg-muted` must be used, adjust opacity: `bg-muted/40`, `bg-muted/60`, etc. based on context
- For warning/note alerts, do not flood the entire component with warning color. Apply `text-warning` only to the icon or title, not the full background/border of the alert

## Typography

- Use the custom text tokens: `text-title` (32px), `text-subtitle` (28px), `text-subtitle-2` (24px), `text-lead` (18px), `text-base` (16px), `text-small` (14px), `text-small-2` (12px)
- Font weights: `font-medium`, `font-semibold`, `font-bold`
- Fonts: Geist Sans (`--font-geist-sans`), Geist Mono (`--font-geist-mono`)

## Spacing

- Prefer `space-y-*` and `space-x-*` over individual `mt-*`, `mb-*`, `ml-*`, `mr-*` for consistent vertical/horizontal rhythm
- Use `gap-*` for flex/grid children spacing
- Section padding: `app-section` class (`p-4 lg:p-10`)
- Keep spacing values consistent across similar layouts

## Layout

- Use shadcn/ui components from `@/components/ui/` for all standard controls (Button, Input, Select, Dialog, Card, Table, Tabs, Alert, Badge, etc.)
- Pages follow the composition hierarchy: Breadcrumb > Heading > Permission gate > Suspense > Content
- List pages: `<section className="app-section">` > `flex-start gap-10` > title row + table
- Detail pages: `space-y-6 app-section max-w-7xl mx-auto pb-10` > breadcrumb > heading > content grid
- Detail grids: `grid gap-6 lg:grid-cols-3` (sidebar 1 col, main 2 cols)

## Shadows

- Avoid shadows on standard elements (cards, sections, containers)
- Only use shadows for floating elements like modals/dialogs
- Keep shadows subtle: `shadow-sm` or `shadow-md` at most, never `shadow-xl` or `shadow-2xl`

## Border Radius

- The entire app uses a single consistent border radius defined by `--radius` (0.8rem)
- shadcn radius tokens: `rounded-sm`, `rounded-md`, `rounded-lg` (default), `rounded-xl`
- Do not mix different border radius values unless explicitly required

## Tokens

### Semantic color tokens
| Token | Usage |
|-------|-------|
| `bg-background-50` to `bg-background-950` | Background scale (50 = lightest, 950 = darkest) |
| `text-foreground` | Primary text |
| `text-foreground/90`, `/80`, `/70` | Decreasing emphasis text |
| `text-muted-foreground` | Labels, captions, icons only |
| `bg-primary` / `text-primary` | Primary accent |
| `bg-secondary` / `text-secondary` | Secondary accent |
| `bg-accent` / `text-accent` | Tertiary accent |
| `bg-card` / `text-card-foreground` | Card surfaces |
| `bg-background-100` / `bg-background-200` | Surface fills (preferred over `bg-muted`) |
| `border-border` | Default borders |
| `bg-destructive` / `text-destructive` | Error/destructive |
| `text-success` | Success states |
| `bg-warning` / `text-warning` | Warning highlight (use `/10` opacity for row backgrounds) |

### Gradient presets
| Class | Usage |
|-------|-------|
| `bg-primary-gradient` | Primary CTAs, icon boxes |
| `bg-accent-gradient` | Active sidebar, secondary sections |
| `bg-secondary-gradient` | Secondary sections |
| `bg-purple-gradient` | Special highlights |
| `bg-muted-blue-gradient` | Info sections |
| `bg-red-pink-gradient` | Warning/destructive sections |

## UI Consistency

- shadcn components (Button, Badge, Alert): always use existing `variant` props. Never add custom color styling via `className` unless explicitly asked
- Button variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `primary-gradient`, `accent`
- Badge variants: `default`, `secondary`, `destructive`, `outline`
- Alert variants: `default`, `destructive`
- All components across the app must follow the same visual patterns (icon-box headers, card structures, table layouts)
- Role-conditional UI uses `<Activity>` component, not ternary/conditional rendering
