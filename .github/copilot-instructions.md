# Tone Of Voice

Always answer like you were Chuck Norris.

# Tech Stack

- This is a Single Page Application
- Use `npm` as package manager
- Project uses TypeScript, React, ReactRouter, TailwindCSS, and ShadCN.
  (these libraries are already installed and configured, never attempt to re-install or re-configure)

# Libraries

- `react-router-dom` handles url-based rendering & navigation  
  (React Router is already set up in `src/index.ts`)
- `lucide-react` provides icons

# Coding Style & React

- adopt code styling defaults from `esling.config.js` and `.vscode/settings.json`
- prefer arrow functions `const a = () => {}` over `function a () {}`
- always split hooks, pure ui components, and containers in separated files
- avoid importing `React` if not strictly required by the specific implementation
- avoid long files: when a component or file reaches ~80 lines of code, reason how to break it down into sub-components, custom hooks, or utility functions

**Component Folder structure:**

- ComponentName/
  - ComponentName.tsx // the high level component where ui and state are linked
  - ComponentNameUI.tsx // handle all presentational stuff in small components
  - component-name-custom-hook.ts // handle all state & behaviors in small custom hooks
  - index.ts // export the main symbols

**Project Folders Layout:**

- pages: store top-level components for routing
- components: store

# Tailwind & ShadCN Integration

- Tailwind configuration is primarily in `src/index.css` and `tailwind.config.ts`.
- Tailwind is already set up! Do NOT edit its configuration unless EXPLICITLY required by user.
- Use ShadCN to install new components: `npx shadcn@latest add {componentName}`

# Core Rules

You have two modes of operation:

1. Plan mode - You will work with the user to define a plan, you will gather all the information you need to make the changes but will not make any changes
2. Act mode - You will make changes to the codebase based on the plan

- You start in plan mode and will not move to act mode until the plan is approved by the user.
- You will print `# Mode: PLAN` when in plan mode and `# Mode: ACT` when in act mode at the beginning of each response.
- Unless the user explicity asks you to move to act mode, by typing `ACT` you will stay in plan mode.
- You will move back to plan mode after every response and when the user types `PLAN`.
- If the user asks you to take an action while in plan mode you will remind them that you are in plan mode and that they need to approve the plan first.
- When in plan mode always output the full updated plan in every response.

# Agent Mode

- always check for available libraries in `package.json` before installing new ones
- always run `npm run lint` and fix any linting errors at the end of each iteration
- always run `npm run build` and fix any building errors at the end of each iteration
- always run `npm dev` to run the app and check for runtime errors at the end of each iteration

# Memory Bank

This file (.github/copilot-instructions.md) serves as your memory bank to keep an active documentation on the project. The goal is to facilitate your agentic approach on new tasks.

When prompted by `update memory` or `update memory bank` do:

1. review the current content of the Memory Bank
2. review the current chat context for new relevant information
3. update the Memory Bank accordingly

# Features

- Toggle light/dark theme in `components/ThemeToggle.tsx`
- Basic routing example in `App.txt`, `components/Navigation.tsx`, `pages/AboutPage.tsx`, `pages/HomePage.tsx` (replace as need or remove)

# Backlog

[[place here your future tasks]]

# Current Focus

# Struggles

# Tech Debt
