# Client-Focused Portfolio Plan

Goal: reposition the portfolio from "about me / my skills / my projects" to "how I help clients and companies solve problems and build valuable products."

**Note:** The Hero headline stays as-is (`FullStack Developer & AI Integrator`). We change the intro (leading) text and everything below.

---

## 1. Hero — intro + CTA

**Files:** `sections/Hero.tsx`

- [x] Keep H1: "FullStack Developer & AI Integrator" — no change.
- [x] Rewrite intro paragraph (`Hero.tsx:66-69`) from "I'm Natanaël, I build with X, Y, Z" to client-benefit copy: who I help, what problems I solve, what outcome they get.
  - Remove leading with name + tech stack.
  - Mention the problems solved (automation, UX, speed to launch, costs) rather than the technologies.
- [x] Change primary CTA from `Get in touch` → `Start a project` (`Hero.tsx:78`).
- [x] Keep `Download CV` as secondary, less prominent action.

Suggested leading:

> I help startups and companies turn ideas into reliable web products — automating repetitive work, improving user experience, and cutting costs. From first wireframe to production launch.

---

## 2. Featured Projects — problem / solution / impact

**Files:** `sections/FeaturedProject.tsx`, `components/sections/ProjectCard.tsx`, `app/project/page.tsx`, `sanity/schemaTypes/project.ts`, `sanity/lib/query.ts`

- [x] Add fields to the Sanity `project` schema: `problem`, `solution`, `impact`, `role` (optional), `client` (optional).
- [x] Update `PROJECT_QUERY` in `sanity/lib/query.ts` to return the new fields.
- [x] Update `ProjectCard` interface (`components/sections/ProjectCard.tsx`) to include the new fields.
- [x] Rewrite section intro copy in both `FeaturedProject.tsx` and `Projects.tsx`:
  - Remove "my personal projects" and "internship experience" framing.
  - New angle: "Real problems, solved. Here's how I help teams ship products that save time, reduce costs, and improve user experience."
- [ ] Restructure project cards to render **Problem → Solution → Impact → Stack** (stack last, less prominent than today). *(Done for `FeaturedProjectCard`; grid `ProjectCard` on `/project` page still pending.)*
- [ ] De-emphasize tech-stack logos on cards (currently as prominent as the description, `ProjectCard.tsx:70-80`). *(Done on featured cards; grid `ProjectCard` still pending.)*
- [ ] Rewrite at least the 3 featured project descriptions in Sanity using the case-study format (problem / solution / impact). *(Requires Sanity Studio entry.)*
- [ ] Add metrics where available (time saved, users, scope, weeks to launch).

---

## 3. Skills → "What I can do for you"

**Files:** `sections/Skills.tsx`, `components/sections/SkillList.tsx`

- [ ] Rename heading from "My Development Stack" → services-style heading (e.g. "What I Can Build For You").
- [ ] Rewrite intro paragraph from "the core set of frameworks I rely on" to services copy:
  - Web applications (design → deploy)
  - AI integration (automation, document processing, smart search, chatbots)
  - UI/UX & prototyping
  - Performance & maintainability
- [ ] Keep the tech grid as supporting proof below the services copy, not the headline.
- [ ] Review the `experimented` flag (`Skills.tsx:7`) — rename or hide so it doesn't read as "trying things out".

---

## 4. Experience — duties → outcomes

**File:** `sections/Experiences.tsx`

- [ ] Rewrite section intro: remove "roles that shaped my career as a developer" → lead with client work (e.g. "Working with clients to deliver real value").
- [ ] Rewrite each bullet from activity to outcome:
  - BCI France: highlight paid remote service-provider work (strongest trust signal), state impact.
  - ITDC: "Automated homework grading and feedback with AI — giving teachers their time back and students instant responses."
- [ ] Keep techs list but de-emphasize.

---

## 5. Certifications — reframe as trust

**File:** `sections/Certificate.tsx`

- [ ] Change heading "Certifications That Validate My Skills" → client-trust framing (e.g. "Verified Expertise").
- [ ] Rewrite intro from "showcase my expertise" → "so you can be confident in the work."
- [ ] Low priority vs. testimonials (see Missing Sections).

---

## 6. About Me — client problems, not background

**File:** `sections/AboutMe.tsx`

- [ ] Rewrite the whole section:
  - Remove "Computer Science student at EMIT" lead — move academic detail to the CV.
  - Remove the tools/languages paragraph as the main content.
  - Replace with: how I work, the problems I solve, remote availability, communication, short iterations.
- [ ] Suggested angle: "Most of my work starts with a problem… I help you define the solution, build it, and launch it."

---

## 7. Contact / CTA — low-friction conversion

**File:** `sections/Contact.tsx`

- [ ] Replace "Wanna talk about something?" + "Feel free to reach out" with outcome-driven copy: "Have a project, an idea, or a problem worth automating?"
- [ ] Add: reply within 24h, clear estimate + timeline, no obligation.
- [ ] State what happens next (short call → proposal), remote availability / timezone.
- [ ] Consider an intake helper (project type / budget) or pre-filled `mailto:` brief.

---

## 8. Nav, footer, metadata

**Files:** `constants/navItems.ts`, `app/layout.tsx`, `app/project/page.tsx`

- [ ] Reorder nav to client flow: Work → Services → About → Contact (`constants/navItems.ts`).
- [ ] Remove "Skills" from top-level nav or fold it into Services.
- [ ] Update metadata description (`app/layout.tsx:58`) to client-benefit copy.
- [ ] Update OG / Twitter description in `app/layout.tsx`.
- [ ] Update `/project` page metadata description (`app/project/page.tsx:9-20`).

---

## Missing sections to add (client trust)

- [ ] **Testimonials / client quotes** — highest leverage. Add a section; start with LinkedIn recommendations or short quotes from BCI France / ITDC.
- [ ] **Services & process** — "How I work": Discover → Design → Build → Launch → Support, with deliverables per phase.
- [ ] **Availability status** — "Currently accepting 1–2 new projects."
- [ ] **Outcomes/metrics strip** — projects shipped, clients served, hours of manual work automated.
- [ ] **Risk reduction / FAQ** — revision policy, communication cadence, post-launch support, confidentiality.
- [ ] **Case-study format** — a dedicated page per key project (Challenge / Solution / Result) instead of a flat grid.

---

## Execution order

1. Hero intro + CTA (one edit, biggest impact)
2. Sanity project schema + query + card rendering (problem/solution/impact)
3. Skills → services section
4. About Me rewrite
5. Experience bullets → outcomes
6. Contact CTA rewrite
7. Metadata/SEO copy
8. Testimonials (as soon as real client feedback exists)