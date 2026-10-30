# AGENTS

Scope: this file applies to all work under Universe/.

## Repo Identity
- Canonical role: Universe, a Meanwhile app whose index page is a Three.js scene.
- Stack: React + TypeScript + Vite + Tailwind. Three.js draws the scene.
- Conventions follow [Meanwhile](https://github.com/MeanwhileJS/meanwhile).

## Fast Start
- Install: `npm install`
- Dev: `npm run dev` (http://127.0.0.1:5174)
- Lint: `npm run lint`
- Build: `npm run build`

## Architecture Notes
- A page is `component.tsx` + `index.ts` + a static `.path`. Subcomponents sit beside the page that uses them.
- Atomic folders: Atoms / Molecules / Organisms / Templates / Pages.
- App shell: `createAppRouter` (`src/lib/router.ts`) in `src/App.tsx`, brand-agnostic `Layout`, `NotFoundBoundary`.
- Routing mode: `VITE_ROUTER=browser` (default) or `hash`. Don't hard-code a router.
- The index page mounts `Scene` (`src/components/Organisms/Scene`), which owns the Three.js renderer.
- Prefer `cn` for class names.

## Conventions That Matter
- Typical component file set: `component.tsx`, `index.ts`, optional `variants.tsx`. `story.tsx`, tests, and `docs.mdx` are byproduct.
- Only `component.tsx` is required while shipping.
- Named looks in `variants.tsx` must match design and the behavior story. Do not invent a parallel dialect.
- Copying a neighbor file is a valid path.

## Jira
- Site: https://macovin.atlassian.net
- Project: not set for this repo. Ask before creating tickets.
- Default issue type: Task
- Factory work goes in `MNWL`. Do not file Universe work there unless it changes the factory.

## Working Rules for Agents
- Extend existing component patterns instead of creating parallel patterns.
- Preserve Vite for the app.
- Keep edits in this repo unless asked.
- Tracking, Storybook, tests, and docs are a byproduct of the story. Do not hold a feature for them.
