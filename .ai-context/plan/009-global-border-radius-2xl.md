# Global Border Radius: 2xl (Revision)

## Goal
Apply a `rounded-2xl` border radius to the entire application, including elements that do not currently use a `rounded-*` utility class (e.g., cards, buttons, images).

## Steps
1. [x] Inspect why the previous token-only change did not affect cards/buttons.
2. [x] Add a global base rule in `app/globals.css` that applies `border-radius: var(--radius-2xl)` to all elements (with safe exclusions).
3. [x] Verify the change builds without errors.

## Progress
- Current step: 3 / 3
- Status: completed
