# Plan: Make ScrollStack offset clearly visible

## Steps

1. **Fix offset/scale cancelation**
   - [x] Reduce `scaleStep` so scale shrink no longer cancels the 16px X/Y offset (center-origin scale currently eats ~14px of the 16px peek).
   - [x] Keep `baseOffset` 16px (within requested 8-16px range).

2. **Verify**
   - [x] `npx tsc --noEmit`, prettier.

## Progress

- Step 1: completed
- Step 2: completed
