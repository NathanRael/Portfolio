# Skills Showcase Enhancement

## Overview
Transform basic skills grid into visually impressive showcase with better hierarchy, skill differentiation, and engaging interactions.

## Current State
- Simple grid: icon + name per skill
- Grouped by category with animated headings
- Uses `experimented` boolean field but doesn't display it
- Basic rotate animation on hover

## Implementation Plan

### Step 1: Enhance Skill Data Model
- [ ] Add `yearsOfExperience` field to skill schema (optional, number)
- [ ] Add `proficiencyLevel` field: beginner | intermediate | advanced | expert
- [ ] Update SKILL_QUERY to fetch new fields
- [ ] Add descriptions field for context

**Status:** [ ] Not started

### Step 2: Redesign SkillCard Component
- [ ] Create visually distinct card with glassmorphism effect
- [ ] Show proficiency indicator (progress bar or level badge)
- [ ] Display years of experience if available
- [ ] Add skill description tooltip or expandable section
- [ ] Differentiate `experimented` skills with special styling/badge
- [ ] Better hover animations (scale + glow effect)

**Status:** [ ] Not started

### Step 3: Improve Category Presentation
- [ ] Replace simple heading with interactive category tabs or cards
- [ ] Add category icons (code for languages, database icon, etc.)
- [ ] Show skill count per category
- [ ] Animate category transitions

**Status:** [ ] Not started

### Step 4: Add Showcase Layout
- [ ] Implement filterable grid with category tabs
- [ ] Add "featured skills" section highlighting top technologies
- [ ] Create visual hierarchy: primary skills larger/more prominent
- [ ] Add scroll-triggered stagger animations

**Status:** [ ] Not started

### Step 5: Polish & Interactions
- [ ] Add smooth filter transitions
- [ ] Implement skill card flip or expand for details
- [ ] Add keyboard navigation for accessibility
- [ ] Test responsive behavior on mobile

**Status:** [ ] Not started

## Design Direction
- Glassmorphism cards with subtle gradients
- Proficiency shown as colored progress bars or level badges
- Primary/expert skills get larger cards or special borders
- Category tabs with smooth transitions
- Hover: scale + glow + slight rotation
- Mobile: stack cards, simplify animations

## Success Criteria
- Visually impressive compared to current basic grid
- Clear skill differentiation (experience level, proficiency)
- Engaging but not overwhelming animations
- Accessible and responsive
- Maintains existing i18n pattern
