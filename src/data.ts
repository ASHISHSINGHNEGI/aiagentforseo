import { BarChart3, Clock, Code2, Globe, Search, Shield } from "lucide-react";
import React from "react";

// ============================================================
// CONSOLE
// ============================================================
export const CONSOLE_LINES = [
  { text: "seoai audit --url yoursite.com --depth 3", type: "cmd" },
  { text: "Connecting to crawler network...", type: "cmd" },
  { text: "Connected. 4 nodes active.", type: "ok" },
  { text: "Indexing yoursite.com...", type: "cmd" },
  { text: "  ↳ 1,247 pages discovered", type: "info" },
  { text: "  ↳ 89 target keywords loaded", type: "info" },
  { text: "Analyzing SERP gaps...", type: "cmd" },
  { text: "  ↳ 23 ranking opportunities found", type: "info" },
  { text: "  ↳ 12 high-priority fixes queued", type: "warn" },
  { text: "Deploying optimizations via API...", type: "cmd" },
  { text: "  ↳ Meta tags updated (8 pages)", type: "ok" },
  { text: "  ↳ Schema markup injected (4 pages)", type: "ok" },
  { text: "  ↳ Internal links rebalanced", type: "ok" },
  { text: "Audit complete — avg position gain: +14 ↑", type: "success" },
] as const;

// ============================================================
// FEATURES
// ============================================================
export interface FeatureData {
  icon: React.ReactNode;
  title: string;
  tag: string;
  desc: string;
  acts: {
    painLabel: string;
    painVal: string;
    painSub: string;
    actionText: string;
    resultLabel: string;
    resultVal: string;
    resultSub: string;
    delta: string;
  };
}

export const FEATURES: FeatureData[] = [
  {
    icon: React.createElement(Clock, { size: 18 }),
    title: "Autonomous Monitoring",
    tag: "Always-on",
    desc: "24/7 SERP tracking and rank change detection — zero manual input required.",
    acts: {
      painLabel: "Rank Dropped",
      painVal: "#34",
      painSub: "homepage · was #8",
      actionText:
        "Analyzing SERP volatility... Core update detected. Recalibrating content signals for query intent...",
      resultLabel: "Rank Recovered",
      resultVal: "#8",
      resultSub: "recovered in 48h",
      delta: "+26 positions",
    },
  },
  {
    icon: React.createElement(Code2, { size: 18 }),
    title: "API-First Design",
    tag: "Developer-ready",
    desc: "OpenAPI spec included. Connect the agent to your CI/CD pipeline in minutes.",
    acts: {
      painLabel: "Manual Deploy",
      painVal: "4.2h",
      painSub: "avg per SEO update",
      actionText:
        "Webhook received from CI pipeline... Parsing diff... Applying SEO ruleset v2.4... Validating schema...",
      resultLabel: "Auto Deployed",
      resultVal: "2.3s",
      resultSub: "full update via API",
      delta: "99.5% faster",
    },
  },
  {
    icon: React.createElement(Globe, { size: 18 }),
    title: "Scalable Infrastructure",
    tag: "Enterprise-grade",
    desc: "Serverless architecture. Handles thousands of concurrent crawls, no ops required.",
    acts: {
      painLabel: "Server Error",
      painVal: "503",
      painSub: "error rate: 12%",
      actionText:
        "Elastic scaling triggered... Spawning 8 serverless crawl workers... Load balanced across 3 regions...",
      resultLabel: "Zero Errors",
      resultVal: "99.9%",
      resultSub: "uptime SLA maintained",
      delta: "0 incidents",
    },
  },
  {
    icon: React.createElement(Search, { size: 18 }),
    title: "Semantic Analysis",
    tag: "NLP-powered",
    desc: "Deep NLP for keyword clustering, intent mapping, and topical authority scoring.",
    acts: {
      painLabel: "Keyword Chaos",
      painVal: "847",
      painSub: "unclustered keywords",
      actionText:
        "Running NLP intent classification... Grouping by semantic similarity... Mapping to SERP intent types...",
      resultLabel: "Intent Mapped",
      resultVal: "23",
      resultSub: "topical clusters built",
      delta: "4.1x relevance",
    },
  },
  {
    icon: React.createElement(BarChart3, { size: 18 }),
    title: "Real-Time Analytics",
    tag: "Live data",
    desc: "Live dashboards with organic traffic, CTR trends, and conversion attribution.",
    acts: {
      painLabel: "Stale Reports",
      painVal: "72h",
      painSub: "last data refresh",
      actionText:
        "Streaming GA4 + Search Console events... Processing 1.2M rows... Updating live dashboard...",
      resultLabel: "Live Dashboard",
      resultVal: "< 60s",
      resultSub: "data freshness",
      delta: "Real-time",
    },
  },
  {
    icon: React.createElement(Shield, { size: 18 }),
    title: "Competitor Intelligence",
    tag: "Strategic",
    desc: "Track rival content strategies, backlink velocity, and SERP feature ownership.",
    acts: {
      painLabel: "Blind Spots",
      painVal: "0%",
      painSub: "competitor visibility",
      actionText:
        "Crawling 12 competitor domains... Extracting content gaps, backlink profiles, SERP features...",
      resultLabel: "Gap Report",
      resultVal: "47",
      resultSub: "new opportunities",
      delta: "+47 targets",
    },
  },
];

// ============================================================
// WORKFLOW
// ============================================================
export const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Ingest",
    subtitle: "Listen & Index",
    desc: "The agent crawls your site and competitor domains, indexing content, backlinks, and SERP positions in real time.",
    logs: [
      "> Crawling yoursite.com...",
      "  ↳ 1,247 pages indexed",
      "  ↳ 3 competitors tracked",
      "✓ Ingest complete",
    ],
    metric: { label: "Pages indexed", value: "1,247" },
    good: true,
  },
  {
    num: "02",
    title: "Strategy",
    subtitle: "Analyze & Plan",
    desc: "AI identifies ranking gaps, intent shifts, and content opportunities — then builds a prioritized action plan.",
    logs: [
      "> Running gap analysis...",
      "  ↳ 23 opportunities found",
      "  ↳ 12 critical fixes queued",
      "✓ Plan generated",
    ],
    metric: { label: "Fixes queued", value: "12" },
    good: false,
  },
  {
    num: "03",
    title: "Act",
    subtitle: "Execute & Deploy",
    desc: "Pushes metadata updates, content drafts, and schema changes directly to your CMS or repo via API.",
    logs: [
      "> Deploying via API...",
      "  ↳ 8 meta tags updated",
      "  ↳ 4 schema fixes pushed",
      "✓ All changes live",
    ],
    metric: { label: "Avg position gain", value: "+14" },
    good: true,
  },
];

// ============================================================
// PRICING
// ============================================================
export interface PlanData {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

export const PLANS: PlanData[] = [
  {
    name: "Basic",
    price: "$49",
    period: "/mo",
    desc: "For individual creators and small blogs getting started.",
    features: [
      "500 pages crawled/mo",
      "Weekly audit reports",
      "200 keyword clusters",
      "Email alerts",
      "Community support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    desc: "For teams that need real-time automation and full API access.",
    features: [
      "5,000 pages crawled/mo",
      "Real-time monitoring",
      "Unlimited keyword clusters",
      "CMS auto-deploy",
      "API access (10k/mo)",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large orgs with compliance, white-label, and SLA requirements.",
    features: [
      "Unlimited crawls",
      "Dedicated agent instance",
      "Custom CMS & CI/CD integrations",
      "White-label reports",
      "99.9% SLA",
      "Dedicated manager",
    ],
    cta: "Contact Sales",
  },
];

// ============================================================
// SOCIAL PROOF
// ============================================================
export interface LogoBrand {
  name: string;
  src: string;
  color: string;
}

export const LOGOS: LogoBrand[] = [
  { name: "Google",    src: "https://cdn.simpleicons.org/google/4285F4",    color: "#4285F4" },
  { name: "Meta",      src: "https://cdn.simpleicons.org/meta/0866FF",      color: "#0866FF" },
  { name: "Microsoft", src: "https://cdn.simpleicons.org/microsoft/737373", color: "#737373" },
  { name: "Netflix",   src: "https://cdn.simpleicons.org/netflix/E50914",   color: "#E50914" },
  { name: "Spotify",   src: "https://cdn.simpleicons.org/spotify/1DB954",   color: "#1DB954" },
  { name: "Amazon",    src: "https://cdn.simpleicons.org/amazon/FF9900",    color: "#FF9900" },
  { name: "GitHub",    src: "https://cdn.simpleicons.org/github/f0f6fc",    color: "#f0f6fc" },
  { name: "Apple",     src: "https://cdn.simpleicons.org/apple/a3a3a3",     color: "#a3a3a3" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our organic traffic tripled in 3 months. Autonomous auditing saved us 20+ hours per week.",
    name: "Sarah Chen",
    role: "Head of Growth, TechCorp",
    initials: "SC",
    stars: 5,
  },
  {
    quote:
      "The API-first design let us plug it directly into our CI/CD pipeline. Absolutely game-changing.",
    name: "Marcus Rivera",
    role: "CTO, Startify",
    initials: "MR",
    stars: 5,
  },
  {
    quote:
      "We replaced three separate SEO tools with this one agent. ROI was clear within the first week.",
    name: "Priya Nair",
    role: "Marketing Lead, GrowthIO",
    initials: "PN",
    stars: 5,
  },
];
