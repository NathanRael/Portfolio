# Services ScrollStack Offset Enhancement (Revision 2)

## Goal
Make the ScrollStack card pile in `Services.tsx` visually recognizable by offsetting each underlying card on the X and Y axes, so previous cards peek out from behind the active card.

## Steps
1. [x] Inspect `ScrollStack.tsx` and `ScrollStack.css`.
2. [x] Compute a smooth depth value per panel from scroll progress (`topCard = segment + segmentProgress`).
3. [x] Apply a per-depth X/Y translate (`16px` per level) plus a subtle scale (`4%` per level) to underlying panels.
4. [x] Verify the change builds.

## Progress
- Current step: 4 / 4
- Status: completed

## Note
The first attempt (12px, no scale) was too subtle / not picked up. Increased to 16px and added scale for a clearer depth cue. If still not visible, restart the dev server (`next dev --turbopack`) and hard-refresh.
