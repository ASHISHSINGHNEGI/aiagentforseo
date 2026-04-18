import {
  Zap, ArrowRight, Play, Search, BarChart3, Code2,
  Globe, Clock, CheckCircle, Star, Menu, X,
  TrendingUp, TrendingDown, Shield, Database, Cpu,
  AlertCircle, Activity, ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import "./App.css";

// ============================================================
// DATA LAYER — all content defined here, never in components
// ============================================================

const CONSOLE_LINES = [
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

interface FeatureData {
  icon: React.ReactNode;
  title: string;
  tag: string;
  desc: string;
  acts: {
    painLabel: string; painVal: string; painSub: string;
    actionText: string;
    resultLabel: string; resultVal: string; resultSub: string; delta: string;
  };
}

const FEATURES: FeatureData[] = [
  {
    icon: <Clock size={18} />, title: "Autonomous Monitoring", tag: "Always-on",
    desc: "24/7 SERP tracking and rank change detection — zero manual input required.",
    acts: {
      painLabel: "Rank Dropped", painVal: "#34", painSub: "homepage · was #8",
      actionText: "Analyzing SERP volatility... Core update detected. Recalibrating content signals for query intent...",
      resultLabel: "Rank Recovered", resultVal: "#8", resultSub: "recovered in 48h", delta: "+26 positions",
    },
  },
  {
    icon: <Code2 size={18} />, title: "API-First Design", tag: "Developer-ready",
    desc: "OpenAPI spec included. Connect the agent to your CI/CD pipeline in minutes.",
    acts: {
      painLabel: "Manual Deploy", painVal: "4.2h", painSub: "avg per SEO update",
      actionText: "Webhook received from CI pipeline... Parsing diff... Applying SEO ruleset v2.4... Validating schema...",
      resultLabel: "Auto Deployed", resultVal: "2.3s", resultSub: "full update via API", delta: "99.5% faster",
    },
  },
  {
    icon: <Globe size={18} />, title: "Scalable Infrastructure", tag: "Enterprise-grade",
    desc: "Serverless architecture. Handles thousands of concurrent crawls, no ops required.",
    acts: {
      painLabel: "Server Error", painVal: "503", painSub: "error rate: 12%",
      actionText: "Elastic scaling triggered... Spawning 8 serverless crawl workers... Load balanced across 3 regions...",
      resultLabel: "Zero Errors", resultVal: "99.9%", resultSub: "uptime SLA maintained", delta: "0 incidents",
    },
  },
  {
    icon: <Search size={18} />, title: "Semantic Analysis", tag: "NLP-powered",
    desc: "Deep NLP for keyword clustering, intent mapping, and topical authority scoring.",
    acts: {
      painLabel: "Keyword Chaos", painVal: "847", painSub: "unclustered keywords",
      actionText: "Running NLP intent classification... Grouping by semantic similarity... Mapping to SERP intent types...",
      resultLabel: "Intent Mapped", resultVal: "23", resultSub: "topical clusters built", delta: "4.1x relevance",
    },
  },
  {
    icon: <BarChart3 size={18} />, title: "Real-Time Analytics", tag: "Live data",
    desc: "Live dashboards with organic traffic, CTR trends, and conversion attribution.",
    acts: {
      painLabel: "Stale Reports", painVal: "72h", painSub: "last data refresh",
      actionText: "Streaming GA4 + Search Console events... Processing 1.2M rows... Updating live dashboard...",
      resultLabel: "Live Dashboard", resultVal: "< 60s", resultSub: "data freshness", delta: "Real-time",
    },
  },
  {
    icon: <Shield size={18} />, title: "Competitor Intelligence", tag: "Strategic",
    desc: "Track rival content strategies, backlink velocity, and SERP feature ownership.",
    acts: {
      painLabel: "Blind Spots", painVal: "0%", painSub: "competitor visibility",
      actionText: "Crawling 12 competitor domains... Extracting content gaps, backlink profiles, SERP features...",
      resultLabel: "Gap Report", resultVal: "47", resultSub: "new opportunities", delta: "+47 targets",
    },
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01", title: "Ingest", subtitle: "Listen & Index",
    desc: "The agent crawls your site and competitor domains, indexing content, backlinks, and SERP positions in real time.",
    logs: ["> Crawling yoursite.com...", "  ↳ 1,247 pages indexed", "  ↳ 3 competitors tracked", "✓ Ingest complete"],
    metric: { label: "Pages indexed", value: "1,247" }, good: true,
  },
  {
    num: "02", title: "Strategy", subtitle: "Analyze & Plan",
    desc: "AI identifies ranking gaps, intent shifts, and content opportunities — then builds a prioritized action plan.",
    logs: ["> Running gap analysis...", "  ↳ 23 opportunities found", "  ↳ 12 critical fixes queued", "✓ Plan generated"],
    metric: { label: "Fixes queued", value: "12" }, good: false,
  },
  {
    num: "03", title: "Act", subtitle: "Execute & Deploy",
    desc: "Pushes metadata updates, content drafts, and schema changes directly to your CMS or repo via API.",
    logs: ["> Deploying via API...", "  ↳ 8 meta tags updated", "  ↳ 4 schema fixes pushed", "✓ All changes live"],
    metric: { label: "Avg position gain", value: "+14" }, good: true,
  },
];

interface PlanData {
  name: string; price: string; period: string; desc: string;
  features: string[]; cta: string; highlight?: boolean; badge?: string;
}
const PLANS: PlanData[] = [
  {
    name: "Basic", price: "$49", period: "/mo",
    desc: "For individual creators and small blogs getting started.",
    features: ["500 pages crawled/mo", "Weekly audit reports", "200 keyword clusters", "Email alerts", "Community support"],
    cta: "Start Free Trial",
  },
  {
    name: "Pro", price: "$149", period: "/mo",
    desc: "For teams that need real-time automation and full API access.",
    features: ["5,000 pages crawled/mo", "Real-time monitoring", "Unlimited keyword clusters", "CMS auto-deploy", "API access (10k/mo)", "Priority support"],
    cta: "Get Started", highlight: true, badge: "Most Popular",
  },
  {
    name: "Enterprise", price: "Custom", period: "",
    desc: "For large orgs with compliance, white-label, and SLA requirements.",
    features: ["Unlimited crawls", "Dedicated agent instance", "Custom CMS & CI/CD integrations", "White-label reports", "99.9% SLA", "Dedicated manager"],
    cta: "Contact Sales",
  },
];

const LOGOS = ["TechCorp", "Startify", "GrowthIO", "LaunchPad", "ScaleUp", "Nexify", "DevStack", "CloudBase"];
const TESTIMONIALS = [
  { quote: "Our organic traffic tripled in 3 months. Autonomous auditing saved us 20+ hours per week.", name: "Sarah Chen", role: "Head of Growth, TechCorp", initials: "SC", stars: 5 },
  { quote: "The API-first design let us plug it directly into our CI/CD pipeline. Absolutely game-changing.", name: "Marcus Rivera", role: "CTO, Startify", initials: "MR", stars: 5 },
  { quote: "We replaced three separate SEO tools with this one agent. ROI was clear within the first week.", name: "Priya Nair", role: "Marketing Lead, GrowthIO", initials: "PN", stars: 5 },
];

// ============================================================
// PRIMITIVE / SHARED COMPONENTS
// ============================================================

function MockConsole() {
  const [phase, setPhase] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    setVisibleLines(0);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleLines(count);
      if (count >= CONSOLE_LINES.length) {
        clearInterval(interval);
        setTimeout(() => setPhase(p => p + 1), 2400);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="console-window">
      <div className="console-titlebar">
        <div className="console-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="console-title">seoai@agent: ~/audit</span>
        <span className="console-live-badge">
          <span className="live-pulse" />LIVE
        </span>
      </div>
      <div className="console-body font-mono">
        <div className="console-prompt-line">
          <span className="prompt-user">seoai</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">agent</span>
          <span className="prompt-path">:~$</span>
          &nbsp;
        </div>
        {CONSOLE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={`${phase}-${i}`} className={`console-line line-${line.type}`}>
            {line.type === "cmd" && <span className="line-prefix">$&nbsp;</span>}
            {line.type === "ok" && <span className="line-prefix ok">✓&nbsp;</span>}
            {line.type === "success" && <span className="line-prefix ok">✓&nbsp;</span>}
            {line.type === "warn" && <span className="line-prefix warn">⚠&nbsp;</span>}
            {line.type === "info" && <span className="line-prefix dim">&nbsp;&nbsp;</span>}
            <span>{line.text}</span>
          </div>
        ))}
        <div className="console-cursor-line">
          <span className="prompt-path">$&nbsp;</span>
          <span className={`console-cursor ${cursor ? "visible" : ""}`}>█</span>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="console-float-card rank-card">
        <TrendingUp size={14} className="fc-icon-green" />
        <div>
          <div className="fc-label">Avg. Rank Change</div>
          <div className="fc-value">+14 positions</div>
        </div>
      </div>
      <div className="console-float-card issues-card">
        <CheckCircle size={14} className="fc-icon-green" />
        <div>
          <div className="fc-label">Issues Resolved</div>
          <div className="fc-value">247 auto-fixed</div>
        </div>
      </div>
    </div>
  );
}

function AgentThoughtBubble({ text }: { text: string }) {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setDots(d => d === 3 ? 1 : d + 1), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="thought-bubble">
      <div className="thought-header">
        <Cpu size={12} className="thought-icon" />
        <span className="thought-title">Agent Processing</span>
        <span className="thought-dots">{"·".repeat(dots)}</span>
      </div>
      <p className="thought-text font-mono">{text}</p>
    </div>
  );
}

function ThreeActCard({ feature }: { feature: FeatureData }) {
  const [act, setAct] = useState(0);
  const durations = [2600, 3200, 3000];

  useEffect(() => {
    const t = setTimeout(() => setAct(a => (a + 1) % 3), durations[act]);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [act]);

  const { acts } = feature;
  const isPain   = act === 0;
  const isAction = act === 1;
  const isResult = act === 2;

  return (
    <div className={`feature-card glass-card ${isResult ? "fc-result" : isPain ? "fc-pain" : "fc-action"}`}>
      {/* Act indicator strip */}
      <div className="act-strip">
        <span className={`act-dot ${isPain ? "act-active-pain" : ""}`} />
        <span className={`act-dot ${isAction ? "act-active-action" : ""}`} />
        <span className={`act-dot ${isResult ? "act-active-result" : ""}`} />
        <span className="act-label">
          {isPain ? "Pain" : isAction ? "Action" : "Result"}
        </span>
      </div>

      {/* Metric widget */}
      <div className={`metric-widget ${isPain ? "mw-pain" : isResult ? "mw-result" : "mw-action"}`}>
        {isPain && (
          <>
            <TrendingDown size={16} className="mw-icon-red" />
            <div>
              <div className="mw-val mw-val-red">{acts.painVal}</div>
              <div className="mw-label">{acts.painLabel}</div>
              <div className="mw-sub">{acts.painSub}</div>
            </div>
          </>
        )}
        {isAction && <AgentThoughtBubble text={acts.actionText} />}
        {isResult && (
          <>
            <TrendingUp size={16} className="mw-icon-green" />
            <div>
              <div className="mw-val mw-val-green">{acts.resultVal}</div>
              <div className="mw-label">{acts.resultLabel}</div>
              <div className="mw-sub">{acts.resultSub}</div>
            </div>
            <span className="mw-delta">{acts.delta}</span>
          </>
        )}
      </div>

      {/* Card body */}
      <div className="fc-body">
        <div className="fc-top">
          <span className="fc-icon-wrap">{feature.icon}</span>
          <span className="fc-tag">{feature.tag}</span>
        </div>
        <h3 className="fc-title">{feature.title}</h3>
        <p className="fc-desc">{feature.desc}</p>
      </div>
    </div>
  );
}

function MiniConsole({ logs }: { logs: string[] }) {
  return (
    <div className="mini-console font-mono">
      {logs.map((line, i) => (
        <div key={i} className={`mc-line ${line.startsWith("✓") ? "mc-ok" : line.startsWith("  ↳") ? "mc-info" : "mc-cmd"}`}>
          {line}
        </div>
      ))}
    </div>
  );
}

function SparklineUp() {
  return (
    <svg viewBox="0 0 80 32" className="sparkline sparkline-up" fill="none">
      <polyline points="0,28 16,24 32,20 48,12 64,6 80,2" stroke="var(--agent-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="0,28 16,24 32,20 48,12 64,6 80,2 80,32 0,32" fill="var(--agent-accent)" fillOpacity="0.08" />
    </svg>
  );
}

function SparklineDown() {
  return (
    <svg viewBox="0 0 80 32" className="sparkline sparkline-down" fill="none">
      <polyline points="0,4 16,8 32,10 48,18 64,24 80,30" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="0,4 16,8 32,10 48,18 64,24 80,30 80,0 0,0" fill="#f87171" fillOpacity="0.06" />
    </svg>
  );
}

// ============================================================
// SITE HEADER
// ============================================================
function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Zap className="logo-icon" size={22} />
        <span>SEO<span className="text-gradient">AI</span></span>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#workflow" onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#docs" onClick={() => setMenuOpen(false)}>Docs</a>
      </div>
      <div className="nav-actions">
        <button className="btn-login">Log In</button>
        <button className="btn-primary">Dashboard <ArrowRight size={14} /></button>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}

// ============================================================
// HERO SECTION — Mock Console (no static images)
// ============================================================
function HeroSection() {
  return (
    <div className="hero-outer" id="hero">
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Agent v2.0 — Real-time SERP tracking is live
        </div>
        <h1 className="hero-title">
          Stop chasing<br />algorithms. <span className="text-gradient">Start<br />scaling</span> organic growth.
        </h1>
        <p className="hero-description">
          Meet the first autonomous AI agent that audits, optimizes, and deploys
          SEO changes directly to your stack — without lifting a finger.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg">
            Start 7-Day Pilot <ArrowRight size={18} />
          </button>
          <button className="btn-ghost btn-lg">
            <Play size={16} fill="currentColor" /> View API Capabilities
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">3.2x</span>
            <span className="stat-label">Traffic Lift</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">48h</span>
            <span className="stat-label">First Results</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Sites Optimized</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <MockConsole />
      </div>
    </section>
    </div>
  );
}

// ============================================================
// SOCIAL PROOF
// ============================================================
function SocialProofBar() {
  return (
    <section className="social-proof">
      <p className="social-proof-label">Trusted by 10,000+ teams worldwide</p>
      <div className="logo-track-wrapper">
        <div className="logo-track">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div className="logo-item" key={i}>
              <span className="logo-chip">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-row">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card glass-card" key={i}>
            <div className="stars">
              {Array(t.stars).fill(0).map((_, si) => (
                <Star key={si} size={13} fill="var(--agent-accent)" stroke="none" />
              ))}
            </div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="avatar-initials">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// PAIN POINT — simulated UI panels, no placeholder images
// ============================================================
function ManualDashboard() {
  return (
    <div className="sim-dashboard pain-bad glass-card">
      <div className="sim-header">
        <div className="sim-status-dot dot-red-solid" />
        <span className="sim-title">Manual SEO Workflow</span>
        <span className="sim-badge badge-red">3 days stale</span>
      </div>
      <div className="sim-body">
        <div className="sim-row">
          <AlertCircle size={13} className="ic-red" />
          <span className="sim-text">23 unresolved issues</span>
          <span className="sim-val red">Critical</span>
        </div>
        <div className="sim-row">
          <Clock size={13} className="ic-muted" />
          <span className="sim-text">Last audit</span>
          <span className="sim-val muted">72h ago</span>
        </div>
        <div className="sim-spreadsheet">
          <div className="ss-header font-mono">keywords.xlsx — 847 rows</div>
          {["best seo tool", "seo automation", "keyword research ai", "+ 844 more..."].map((kw, i) => (
            <div className="ss-row" key={i}>
              <span className="ss-idx">{i < 3 ? i + 1 : "…"}</span>
              <span className="ss-kw">{kw}</span>
              <span className="ss-vol red">{i < 3 ? "manual" : ""}</span>
            </div>
          ))}
        </div>
        <div className="sim-chart-wrap">
          <span className="sim-chart-label red">Organic Traffic ↓</span>
          <SparklineDown />
        </div>
        <div className="sim-tools">
          <span className="tool-chip">Search Console</span>
          <span className="tool-chip">Ahrefs</span>
          <span className="tool-chip">Screaming Frog</span>
          <span className="tool-chip">SEMrush</span>
          <span className="tool-chip muted">+3 more</span>
        </div>
      </div>
    </div>
  );
}

function AgentDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 2800);
    return () => clearInterval(t);
  }, []);

  const gains = ["+6", "+11", "+14", "+9", "+18", "+22"];
  const currentGain = gains[tick % gains.length];

  return (
    <div className="sim-dashboard pain-good glass-card">
      <div className="sim-header">
        <div className="sim-status-dot dot-green-pulse" />
        <span className="sim-title">AI Agent Active</span>
        <span className="sim-badge badge-green">LIVE</span>
      </div>
      <div className="sim-body">
        <div className="sim-row">
          <CheckCircle size={13} className="ic-green" />
          <span className="sim-text">0 open issues</span>
          <span className="sim-val green">All resolved</span>
        </div>
        <div className="sim-row">
          <Activity size={13} className="ic-green" />
          <span className="sim-text">Last sync</span>
          <span className="sim-val green">38s ago</span>
        </div>
        <div className="sim-clusters">
          <div className="cl-header font-mono">Intent clusters — NLP</div>
          {[
            { label: "Informational (312)", pct: 92 },
            { label: "Commercial (189)", pct: 87 },
            { label: "Transactional (346)", pct: 94 },
          ].map((c, i) => (
            <div className="cl-row" key={i}>
              <span className="cl-label">{c.label}</span>
              <div className="cl-bar-bg">
                <div className="cl-bar-fill" style={{ width: `${c.pct}%` }} />
              </div>
              <span className="cl-pct">{c.pct}%</span>
            </div>
          ))}
        </div>
        <div className="sim-chart-wrap">
          <span className="sim-chart-label green">Organic Traffic ↑ {currentGain}%</span>
          <SparklineUp />
        </div>
        <div className="sim-tools">
          <span className="tool-chip tool-chip-green">
            <Zap size={10} /> 1 unified agent
          </span>
        </div>
      </div>
    </div>
  );
}

function PainPointSection() {
  return (
    <section className="pain-point" id="pain">
      <div className="section-header">
        <div className="section-tag">The Problem</div>
        <h2 className="section-title">Manual SEO is <span className="text-gradient">broken</span></h2>
        <p className="section-sub">
          Traditional workflows are slow, fragmented, and reactive. See the difference.
        </p>
      </div>
      <div className="pain-grid">
        <ManualDashboard />
        <div className="pain-vs">
          <span>VS</span>
          <ChevronRight size={18} className="vs-arrow" />
        </div>
        <AgentDashboard />
      </div>
    </section>
  );
}

// ============================================================
// AGENT WORKFLOW — mini consoles per step
// ============================================================
function AgentWorkflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="section-header">
        <div className="section-tag">How It Works</div>
        <h2 className="section-title">Three steps to <span className="text-gradient">autonomous SEO</span></h2>
        <p className="section-sub">
          Your agent runs end-to-end — from crawl to live deployment — with zero manual steps.
        </p>
      </div>
      <div className="workflow-steps">
        {WORKFLOW_STEPS.map((step, i) => (
          <div className="workflow-step glass-card" key={i}>
            <div className="step-num-row">
              <span className="step-num">{step.num}</span>
              <div className={`step-metric ${step.good ? "sm-good" : "sm-warn"}`}>
                <span className="sm-val">{step.metric.value}</span>
                <span className="sm-label">{step.metric.label}</span>
              </div>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-subtitle">{step.subtitle}</p>
            <p className="step-desc">{step.desc}</p>
            <MiniConsole logs={step.logs} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// FEATURE GRID — Three-Act Module per card
// ============================================================
function FeatureGrid() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <div className="section-tag">Features</div>
        <h2 className="section-title">Every capability your stack <span className="text-gradient">needs</span></h2>
        <p className="section-sub">
          Each card shows Pain → Agent Action → Result. Watch the agent work in real time.
        </p>
      </div>
      <div className="feature-bento">
        {FEATURES.map((f, i) => <ThreeActCard key={i} feature={f} />)}
      </div>

      {/* DX Section */}
      <div className="dx-section glass-card">
        <div className="dx-text">
          <div className="section-tag">Developer Experience</div>
          <h3 className="dx-title">API-first SEO agent — <span className="text-gradient">plug &amp; play</span></h3>
          <p className="dx-desc">
            One API call triggers a full audit, strategy, and deployment cycle.
            Full OpenAPI spec included. Works with any CI/CD pipeline.
          </p>
          <button className="btn-primary">
            View API Docs <ArrowRight size={16} />
          </button>
        </div>
        <div className="dx-code-wrap">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
              <span className="code-lang">bash · OpenAPI v3.1</span>
            </div>
            <pre className="code-body font-mono">{`# Trigger a full audit + deploy cycle
curl -X POST https://api.seoai.dev/v1/audit \\
  -H "Authorization: Bearer $SEOAI_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url":         "https://yoursite.com",
    "depth":       3,
    "competitors": ["rival.com", "alt.io"],
    "auto_deploy": true,
    "cms":         "wordpress"
  }'

# Response (2.3s)
{
  "audit_id":   "aud_9xKz2mP",
  "pages":      1247,
  "fixes":      12,
  "deployed":   true,
  "rank_delta": "+14 avg"
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PRICING TABLE
// ============================================================
function PricingCard({ plan }: { plan: PlanData }) {
  return (
    <div className={`pricing-card glass-card ${plan.highlight ? "pricing-highlight" : ""}`}>
      {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

      {/* Agent activity simulation for highlighted card */}
      {plan.highlight && (
        <div className="pricing-live-bar font-mono">
          <span className="plb-dot" />
          <span>Agent active on 3,847 sites right now</span>
        </div>
      )}

      <div className="pricing-body">
        <h3 className="plan-name">{plan.name}</h3>
        <div className="plan-price">
          <span className="price-value">{plan.price}</span>
          <span className="price-period">{plan.period}</span>
        </div>
        <p className="plan-desc">{plan.desc}</p>
        <ul className="plan-features">
          {plan.features.map((f, i) => (
            <li key={i}><CheckCircle size={13} className="ic-green" /> {f}</li>
          ))}
        </ul>
        <button className={`pricing-cta ${plan.highlight ? "btn-primary" : "btn-outline"}`}>
          {plan.cta} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function PricingTable() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <div className="section-tag">Pricing</div>
        <h2 className="section-title">Simple, <span className="text-gradient">transparent</span> pricing</h2>
        <p className="section-sub">
          No hidden fees. Cancel anytime. Every plan includes a 7-day free pilot.
        </p>
      </div>
      <div className="pricing-grid">
        {PLANS.map((plan, i) => <PricingCard key={i} plan={plan} />)}
      </div>
    </section>
  );
}

// ============================================================
// SITE FOOTER
// ============================================================
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <Zap className="logo-icon" size={20} />
            <span>SEO<span className="text-gradient">AI</span></span>
          </div>
          <p className="footer-tagline">
            The autonomous SEO agent for teams that move fast.
          </p>
          <div className="footer-socials">
            {["X", "GH", "LI", "✉"].map((s, i) => (
              <a href="#" key={i} className="social-btn" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>
        <div className="footer-links-grid">
          {[
            { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { heading: "Developers", links: ["API Reference", "OpenAPI Spec", "SDKs", "Status"] },
            { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { heading: "Legal", links: ["Privacy", "Terms", "Cookies", "Security"] },
          ].map((col, i) => (
            <div className="footer-col" key={i}>
              <h4>{col.heading}</h4>
              {col.links.map((l, j) => <a href="#" key={j}>{l}</a>)}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-newsletter glass-card">
        <div className="newsletter-text">
          <Database size={18} className="nl-icon" />
          <span>Get weekly SEO insights from our AI — direct to your inbox.</span>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="you@company.com" className="newsletter-input font-mono" />
          <button className="btn-primary">Subscribe <ArrowRight size={15} /></button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SEOAI Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// ROOT APP
// ============================================================
function App() {
  return (
    <div className="app-container">
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />
      <div className="bg-glow-3" />
      <SiteHeader />
      <main>
        <HeroSection />
        <SocialProofBar />
        <PainPointSection />
        <AgentWorkflow />
        <FeatureGrid />
        <PricingTable />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
