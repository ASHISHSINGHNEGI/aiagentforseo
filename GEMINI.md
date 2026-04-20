# GEMINI.md - SEOAI Project Context

## Project Overview
**SEOAI** is a high-conversion landing page for an autonomous AI SEO agent. It follows a **"Product-in-Action"** design philosophy, where the UI simulates live product interactions (animated consoles, multi-state feature cards) rather than using static assets.

### Core Technologies
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Plain CSS with CSS Custom Properties (Engine Room palette)
- **Icons:** Lucide-react
- **Fonts:** PPNeueBit (headings) · PPMondwest (body) · Satoshi (default)

## Architecture & Structure
The project uses a clean, component-based architecture with a clear separation between data and view logic.

- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Main layout, orchestrating sections.
- `src/data.ts`: Centralized data store for all marketing copy, feature acts, pricing, and workflow steps. **Modify this file to update site content.**
- `src/components/`: Modular UI components.
  - `MockConsole.tsx`: Animated terminal simulation.
  - `FeatureGrid.tsx`: Implementation of the "Three-Act Module" design pattern.
  - `AgentWorkflow.tsx`: Step-by-step process visualization.
- `src/index.css`: Design system tokens (CSS variables) and global resets.
- `src/App.css`: Component-specific styling and layout.

## Building and Running
| Task | Command |
|---|---|
| Development | `npm run dev` (Runs on http://localhost:5173) |
| Production Build | `npm run build` (Type-checks and bundles) |
| Linting | `npm run lint` |
| Local Preview | `npm run preview` |

## Development Conventions

### Design System: "Engine Room" Palette
All styles MUST use the CSS variables defined in `src/index.css`. Never hardcode hex values.
- Background: `--agent-bg` (#09090b)
- Accent: `--agent-accent` (#34d399 / emerald-400)
- Text: `--agent-text` (#f4f4f5)
- Borders: `--agent-border` (#27272a)

### Three-Act Module Pattern
Feature cards in `FeatureGrid.tsx` cycle through three distinct states:
1. **Pain:** Highlights a common SEO problem (e.g., rank drop).
2. **Action:** Displays a `AgentThoughtBubble` showing the AI's reasoning.
3. **Result:** Shows the resolution and positive metric gain.

### Content Updates
Avoid editing JSX for content changes. Instead, update the corresponding export in `src/data.ts`:
- `CONSOLE_LINES`: For the hero terminal.
- `FEATURES`: For the Three-Act feature cards.
- `WORKFLOW_STEPS`: For the "How it Works" section.
- `PLANS`: For the pricing table.

### Typography
- Headings & Copy: `PPMondwest` / `PPNeueBit`
- Code/Logs: `font-mono` (Courier New) for a terminal aesthetic.
