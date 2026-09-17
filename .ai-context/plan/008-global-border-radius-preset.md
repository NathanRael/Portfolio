# 008 Global Border-Radius Preset

## Progress

- [x] 1. Inspect relevant skills, globals.css, and Tailwind config
- [x] 2. Add `--radius` preset variable in globals.css
- [x] 3. Apply synced border-radius globally via base layer
- [x] 4. Verify formatting and build

## Implementation Plan

### 1. Inspect project context

- [x] Read `design-system` and `code-standard` skills.
- [x] Inspect `app/globals.css` and `tailwind.config.ts`.
- [x] Confirm Tailwind v4 with `@theme` and semantic tokens.

### 2. Define radius preset

- [x] Add `--radius: var(--radius-xl)` to `:root` in `app/globals.css`.
- [x] Keep variable semantic and easy to adjust (change to `--radius-lg`, `--radius-2xl`, raw value, etc.).

### 3. Apply globally

- [x] Add `@layer base { :root * { border-radius: var(--radius); } }` in `app/globals.css`.
- [x] `:root *` specificity beats Tailwind preflight's `button { border-radius: 0 }`, so buttons (lang toggle, back-to-top) also round.
- [x] Existing `rounded-*` utilities override the default.
- [x] Pseudo-elements included.

### 4. Verify

- [x] Run Prettier check on `app/globals.css`.
- [x] Run `pnpm build` to confirm no CSS/Tailwind errors.
- [x] Review diff.

## Verification

- `pnpm exec prettier --check app/globals.css` passes.
- `pnpm build` passes.
- `pnpm exec tsc --noEmit` passes.

## Follow-up fixes

- Initial `*` selector was overridden by Tailwind preflight on `<button>`, so lang toggle and back-to-top stayed square. Switched to `:root *` to win without `!important`.
