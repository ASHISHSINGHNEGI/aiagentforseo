# **Project: AI SEO Agent Landing Page**

# **Project Overview**

The objective is to build a modern, high-conversion landing page for an AI SEO Agent that automates keyword research, content optimization, and technical audits. Leveraging the existing modular architecture from previous projects, the backend will prioritize session persistence and context-aware interactions.

## Context

- **Product:** AI-powered SEO Agent.
- **Role:** Autonomous SEO optimization, SERP tracking, and deployment.
- **Target Audience:** Developers and Technical SEO Managers.

## Tech Stack & Architecture

- **Framework:** React + TypeScript.
- **Styling:** Tailwind CSS (utility-first).
- **Structure:** Modular component-based architecture.
- **Data Handling:** Content-first approach. All content, pricing, and features must be defined as data objects (in `data.ts`) rather than hardcoded in the UI.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Design Pattern: "Product-in-Action" (Dashboard-First)

- **Philosophy:** No stock photos. Every section must visually simulate the product interface.
- **The Three-Act Module:** Every feature section must follow this specific flow:
  1. **Pain:** UI Component showing the issue (e.g., Red status, low rank).
  2. **Action:** `AgentThoughtBubble` component showing the AI processing the fix.
  3. **Result:** Metric widget showing the success state (e.g., Green status, improved rank).
- **Interactive Mockups:** Hero sections should use a "Mock Console" component. Simulate live output (logs/audit findings) rather than static images.
- **Typography:** Use `font-mono` for console logs, audit outputs, and code snippets. Use `font-sans` for standard marketing copy.

## Design System & Styling

- **Palette:** Use the "Engine Room" palette for all components.
- **Design Tokens:**
  - Background: `bg-agent-bg` (zinc-950)
  - Text: `text-agent-text` (zinc-100)
  - Accent/CTA: `text-agent-accent` (emerald-400)
  - Borders: `border-zinc-800`
- **Rule:** Never hardcode hex values. Always reference the `tailwind.config.js` `agent` theme object.
- **Accessibility:** Ensure a minimum contrast ratio of 4.5:1 for all text.

|   Section    |  Component Name  |   Purpose   |                                        Key Elements                                        |
| :----------: | :--------------: | :---------: | :----------------------------------------------------------------------------------------: |
|   **Nav**    |    SiteHeader    | Navigation  |                Logo, Links (Features, Pricing, Docs), CTA (Login/Dashboard)                |
|   **Hero**   |   HeroSection    | Conversion  |  H1 (Value Prop), Sub-headline, Primary CTA (e.g., "Start your audit"), Hero Graphic/Demo  |
|  **Trust**   |  SocialProofBar  | Credibility |                     "Trusted by" logos or simple testimonial carousel                      |
| **Problem**  | PainPointSection | Engagement  |                      Contrast "Manual SEO" vs. "AI Agent Efficiency"                       |
| **Solution** |  AgentWorkflow   |   Clarity   |                       3-step visual (Listen/Analyze, Plan, Execute)                        |
| **Features** |   FeatureGrid    |   Detail    | High-level technical selling points (Automation, Real-time analytics, OpenAPI integration) |
| **Pricing**  |   PricingTable   | Conversion  |                         Tiered plan cards (Basic, Pro, Enterprise)                         |
|  **Footer**  |    SiteFooter    |   Utility   |                         Contact, Legal, Socials, Newsletter Signup                         |

# **Landing Page Structure**

### **Detailed Component Breakdowns**

#### **1. HeroSection**

- **Headline:** Stop chasing algorithms. Start scaling organic growth.
- **Sub-headline:** Meet the first autonomous AI agent that audits, optimizes, and deploys SEO changes directly to your stack.
- **Primary CTA:** [Start 7-Day Pilot]
- **Secondary CTA:** [View API Capabilities]

#### **2. AgentWorkflow (The "How It Works")**

Since you are building an _agent_, users need to visualize the process:

- **Step 1: Ingest.** The agent indexes your site and competitor data.
- **Step 2: Strategy.** Our AI analyzes ranking gaps and intent shifts.
- **Step 3: Act.** It pushes metadata updates or content drafts directly to your CMS via API.

#### **3. FeatureGrid (Technical Highlights)**

This is where you showcase the backend capabilities that appeal to fellow devs/technical decision-makers:

- **Autonomous Monitoring:** 24/7 SERP tracking without manual input.
- **API-First Design:** Fully documented OpenAPI specs for custom integrations.
- **Scalable Infrastructure:** Built on serverless architecture for handling thousands of concurrent requests.
- **Semantic Analysis:** Deep NLP for keyword clustering and intent mapping.

#### **4. The "Design-First" Twist**

Given your experience with Swagger and OpenAPI, I suggest adding a **Developer Experience (DX) section**. Marketing this as an "SEO Agent with an API-first mindset" differentiates you from generic SaaS tools. You can showcase a code snippet block demonstrating how easy it is to hook the agent into an existing CI/CD pipeline.

### **Implementation Strategy**

Since you are comfortable with the MERN stack and TypeScript, you can map these components 1:1 to your frontend codebase:

1.  **Modularize:** Create a directory `/components` to hold these individual files. main page should only import component created in `/components`
2.  **State Management:** For the Hero CTA or Pricing toggles, use minimal state.
3.  **Type Safety:** Define your interfaces for components (e.g., `interface PricingCardProps`) early to ensure consistency.
