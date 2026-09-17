# Plan: Extract ExperienceCard & ServiceCard, add white noise inside cards

## Steps

1. **ExperienceCard component**
   - [x] Create `components/sections/ExperienceCard.tsx` with `Experience` interface + card markup + white-noise overlay.
   - [x] Remove inline `ExperienceCard` and `Experience` interface from `sections/Experiences.tsx`, import the new component.

2. **ServiceCard component**
   - [x] Create `components/sections/ServiceCard.tsx` with `Service` interface + card markup + white-noise overlay.
   - [x] Remove inline `ServiceCard` from `sections/Services.tsx`, import the new component.

3. **Verify**
   - [x] `npx tsc --noEmit`, prettier.

## Progress

- Step 1: completed
- Step 2: completed
- Step 3: completed
