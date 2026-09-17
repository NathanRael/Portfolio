# Plan: White noise background for Services section

## Steps

1. **Create lightweight noise asset**
   - [x] Add `public/images/white-noise.svg` using `feTurbulence` (grayscale, stitched/tileable), far smaller than the embedded-base64 `noise-texture.svg`.

2. **Apply to Services background**
   - [x] Replace heavy `noise-texture.svg` background with tiled `white-noise.svg` at low opacity, `pointer-events-none`.

3. **Verify**
   - [x] `npx tsc --noEmit`, prettier.

## Progress

- Step 1: completed
- Step 2: completed
- Step 3: completed
