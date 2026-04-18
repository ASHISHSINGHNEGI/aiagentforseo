# SEOAI — AI-Powered SEO Agent Landing Page

A high-conversion landing page for an autonomous AI SEO agent. Built with React 19 + TypeScript + Vite, following a **"Product-in-Action"** design philosophy — every section simulates the live product interface rather than using static images.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Styling | Plain CSS with CSS custom properties (Engine Room palette) |
| Icons | lucide-react |
| Fonts | PPNeueBit (headings) · PPMondwest (body) |

## Commands

```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── App.tsx          # All sections & components (single-page architecture)
├── App.css          # All styles — Engine Room palette via CSS vars
├── index.css        # CSS custom properties + font-face declarations
├── main.tsx         # React entry point
└── assets/
    └── ppmodwestFOnt/   # PPNeueBit + PPMondwest font files

public/
└── earth.webp       # Hero section background image
```

## Design System — "Engine Room" Palette

All color values are defined as CSS custom properties in `index.css`. **Never hardcode hex values** in components or stylesheets — always reference a token.

| Token | Value | Usage |
|---|---|---|
| `--agent-bg` | `#09090b` (zinc-950) | Page background |
| `--agent-bg-card` | `#18181b` (zinc-900) | Card backgrounds |
| `--agent-bg-raised` | `#27272a` (zinc-800) | Raised elements |
| `--agent-border` | `#27272a` (zinc-800) | Default borders |
| `--agent-border-mid` | `#3f3f46` (zinc-700) | Hover borders |
| `--agent-text` | `#f4f4f5` (zinc-100) | Primary text |
| `--agent-text-muted` | `#a1a1aa` (zinc-400) | Secondary text |
| `--agent-text-faint` | `#71717a` (zinc-500) | Tertiary / labels |
| `--agent-accent` | `#34d399` (emerald-400) | CTAs, highlights |
| `--agent-accent-dk` | `#10b981` (emerald-500) | Accent dark |
| `--agent-accent-lt` | `#6ee7b7` (emerald-300) | Accent light / hover |

## Page Sections

| Section | Component | Key Design Detail |
|---|---|---|
| Nav | `SiteHeader` | Fixed glassmorphism bar, mobile-responsive menu |
| Hero | `HeroSection` | `earth.webp` background + animated `MockConsole` |
| Trust | `SocialProofBar` | Auto-scrolling logo track + testimonial cards |
| Problem | `PainPointSection` | Two live simulated dashboards (Manual vs AI Agent) |
| How It Works | `AgentWorkflow` | 3-step cards each with a `MiniConsole` output |
| Features | `FeatureGrid` | **Three-Act Module** per card: Pain → Action → Result |
| DX Section | (inside FeatureGrid) | Live API code block with OpenAPI annotation |
| Pricing | `PricingTable` | 3-tier cards; Pro card has live agent pulse indicator |
| Footer | `SiteFooter` | Links grid + newsletter form |

## Design Patterns

### Three-Act Module
Every feature card automatically cycles through three states (2.5–3s each):

1. **Pain** — red metric widget showing the problem (e.g. "Rank: #34 ↓")
2. **Action** — `AgentThoughtBubble` with pulsing indicator and live reasoning text
3. **Result** — green metric widget showing the improvement (e.g. "Rank: #8 ↑ · +26 positions")

### Mock Console
The hero uses an animated terminal (`MockConsole`) instead of a static screenshot. 14 log lines type in sequentially at 380ms intervals, pause, then loop. Line types:

- `cmd` — command prompt line (zinc-400)
- `ok` — success (emerald-400)
- `warn` — warning (amber-400)
- `info` — detail indent (zinc-500)
- `success` — final result (emerald-400, bold)

### Font Usage
- `font-sans` (PPMondwest/PPNeueBit) — marketing copy and headings
- `font-mono` (Courier New) — console logs, audit outputs, code snippets, API blocks

## Content Data

All page content is defined as typed data objects at the top of `App.tsx` — nothing is hardcoded in JSX. To update copy, features, pricing, or workflow steps, edit the data arrays:

```
CONSOLE_LINES   — hero terminal log sequence
FEATURES        — feature cards with Three-Act content
WORKFLOW_STEPS  — how-it-works steps with mini-console logs
PLANS           — pricing tiers
LOGOS           — social proof logo names
TESTIMONIALS    — testimonial cards
```
