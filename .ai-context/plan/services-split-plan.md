# Plan: Split Services out of Skills, recolor cards, global xl radius

## Goal
1. Move the Services section out of `sections/Skills.tsx` into its own section and Next.js page.
2. Assign feature-specific colors to each `ServiceCard`:
   - Full-Stack Web Apps → `#21C5B7`
   - AI Integration & Automation → blue
   - UI/UX & Prototyping → yellow
   - Performance & Maintainability → current secondary color
3. Change all app border-radius to `xl`.

## Steps

1. **Create `sections/Services.tsx`**
   - [ ] Copy `services` array and `ServiceCard` from `sections/Skills.tsx`.
   - [ ] Add a `theme` field per service with `bg`, `iconBg`, `text`, `border`, `tagBorder`, `tagText`.
   - [ ] Apply theme classes to card background, icon box, number, tags, CTA.
   - [ ] Keep translations, `ScrollStack`, and responsive layout.

2. **Create `app/services/page.tsx`**
   - [ ] Add page metadata.
   - [ ] Render `<ServicesSection />` in `<main>`.

3. **Trim `sections/Skills.tsx`**
   - [ ] Remove services array and `ServiceCard`.
   - [ ] Keep only the stack heading and `<SkillList />`.
   - [ ] Keep `id="skills"` for the stack section since nav still points there.

4. **Update navigation**
   - [ ] Add `Services` / `Services` nav item to `constants/navItems.ts`.
   - [ ] Place it between Projects and Skills.

5. **Global border-radius to xl**
   - [ ] In `globals.css`, override radius tokens so every `rounded-*` maps to xl (`0.75rem`).
   - [ ] Replace explicit `rounded-full` usages with `rounded-xl` where they are not meant to be circles.
   - [ ] Keep `rounded-full` only for truly circular elements if any.

6. **Verify & lint**
   - [ ] Run `next build` or `next lint`.
   - [ ] Fix any TypeScript/Tailwind errors.

## Progress

- [ ] Step 1 — Create `sections/Services.tsx`
- [ ] Step 2 — Create `app/services/page.tsx`
- [ ] Step 3 — Trim `sections/Skills.tsx`
- [ ] Step 4 — Update navigation
- [ ] Step 5 — Global border-radius to xl
- [ ] Step 6 — Verify & lint
