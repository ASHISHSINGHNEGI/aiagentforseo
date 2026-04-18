import {
  Zap, ArrowRight, Play, Search, BarChart3, Code2,
  Globe, Clock, CheckCircle, ChevronRight, Star,
  Mail, Menu, X,
  TrendingUp, Target, Layers, Shield, Database
} from "lucide-react";
import { useState } from "react";
import "./App.css";

// --- SECTION: SiteHeader ---
function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Zap className="logo-icon" size={26} />
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
        <button className="btn-primary">Dashboard</button>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}

// --- SECTION: HeroSection ---
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI Agent v2.0 — Now with real-time SERP tracking
        </div>

        <h1 className="hero-title">
          Stop chasing algorithms.<br />
          <span className="text-gradient">Start scaling</span> organic growth.
        </h1>

        <p className="hero-description">
          Meet the first autonomous AI agent that audits, optimizes, and deploys
          SEO changes directly to your stack — without lifting a finger.
        </p>

        <div className="hero-actions">
          <button className="btn-primary btn-lg">
            Start 7-Day Pilot <ArrowRight size={20} />
          </button>
          <button className="btn-ghost btn-lg">
            <Play size={18} fill="currentColor" /> View API Capabilities
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">3.2x</span>
            <span className="stat-label">Avg. Traffic Lift</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">48h</span>
            <span className="stat-label">First Results</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Sites Optimized</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-img-wrapper">
          <img
            src="/src/hero.png"
            alt="AI SEO Dashboard"
            className="hero-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/900x560/09090b/34d399?text=AI+SEO+Dashboard";
            }}
          />
          <div className="hero-img-glow"></div>
        </div>

        <div className="hero-float-card card-rank">
          <TrendingUp size={18} className="card-icon-green" />
          <div>
            <div className="card-label">Avg. Rank Change</div>
            <div className="card-value">+14 positions</div>
          </div>
        </div>

        <div className="hero-float-card card-audit">
          <CheckCircle size={18} className="card-icon-blue" />
          <div>
            <div className="card-label">Audit Complete</div>
            <div className="card-value">247 issues fixed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SECTION: SocialProofBar ---
const LOGOS = [
  { name: "TechCorp", img: "https://placehold.co/120x40/18181b/34d399?text=TechCorp" },
  { name: "Startify", img: "https://placehold.co/120x40/18181b/34d399?text=Startify" },
  { name: "GrowthIO", img: "https://placehold.co/120x40/18181b/34d399?text=GrowthIO" },
  { name: "LaunchPad", img: "https://placehold.co/120x40/18181b/34d399?text=LaunchPad" },
  { name: "ScaleUp", img: "https://placehold.co/120x40/18181b/34d399?text=ScaleUp" },
  { name: "Nexify", img: "https://placehold.co/120x40/18181b/34d399?text=Nexify" },
];

function SocialProofBar() {
  return (
    <section className="social-proof">
      <p className="social-proof-label">Trusted by 10,000+ teams worldwide</p>
      <div className="logo-track-wrapper">
        <div className="logo-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div className="logo-item" key={i}>
              <img src={logo.img} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-row">
        {[
          {
            quote: "Our organic traffic tripled in 3 months. The autonomous auditing saved us 20 hours per week.",
            name: "Sarah Chen",
            role: "Head of Growth, TechCorp",
            avatar: "https://placehold.co/48x48/18181b/34d399?text=SC",
            stars: 5,
          },
          {
            quote: "The API-first design let us plug it directly into our CI/CD pipeline. Absolutely game-changing.",
            name: "Marcus Rivera",
            role: "CTO, Startify",
            avatar: "https://placehold.co/48x48/18181b/34d399?text=MR",
            stars: 5,
          },
          {
            quote: "We replaced three separate SEO tools with this one agent. ROI was clear within the first week.",
            name: "Priya Nair",
            role: "Marketing Lead, GrowthIO",
            avatar: "https://placehold.co/48x48/18181b/34d399?text=PN",
            stars: 5,
          },
        ].map((t, i) => (
          <div className="testimonial-card glass-card" key={i}>
            <div className="stars">
              {Array(t.stars).fill(0).map((_, si) => (
                <Star key={si} size={14} fill="#34d399" stroke="none" />
              ))}
            </div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} className="avatar" />
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

// --- SECTION: PainPointSection ---
function PainPointSection() {
  const manual = [
    "Spend hours on manual keyword spreadsheets",
    "Miss ranking opportunities due to slow audits",
    "Struggle with inconsistent on-page optimization",
    "React to algorithm updates days too late",
    "Pay for 5+ disconnected SEO tools",
  ];
  const ai = [
    "AI auto-discovers high-intent keyword clusters",
    "Real-time SERP monitoring with instant alerts",
    "Autonomous on-page fixes pushed to your CMS",
    "Proactive algorithm change detection & adaption",
    "One unified agent replaces your entire stack",
  ];

  return (
    <section className="pain-point" id="pain">
      <div className="section-header">
        <div className="section-tag">The Problem</div>
        <h2 className="section-title">Manual SEO is <span className="text-gradient">broken</span></h2>
        <p className="section-sub">
          Traditional SEO workflows are slow, fragmented, and reactive. There's a better way.
        </p>
      </div>

      <div className="pain-grid">
        <div className="pain-col pain-bad glass-card">
          <div className="pain-col-header">
            <img
              src="https://placehold.co/48x48/18181b/f87171?text=✗"
              alt="Manual SEO"
              className="pain-icon-img"
            />
            <h3>Manual SEO</h3>
            <span className="pain-tag bad-tag">Slow &amp; Reactive</span>
          </div>
          <img
            src="https://placehold.co/400x220/1A202C/ef4444?text=Manual+SEO+Workflow"
            alt="Manual SEO workflow"
            className="pain-section-img"
          />
          <ul>
            {manual.map((item, i) => (
              <li key={i}><X size={16} className="icon-red" /> {item}</li>
            ))}
          </ul>
        </div>

        <div className="pain-vs">
          <span>VS</span>
        </div>

        <div className="pain-col pain-good glass-card">
          <div className="pain-col-header">
            <img
              src="https://placehold.co/48x48/2D3748/22c55e?text=✓"
              alt="AI Agent"
              className="pain-icon-img"
            />
            <h3>AI Agent SEO</h3>
            <span className="pain-tag good-tag">Autonomous &amp; Proactive</span>
          </div>
          <img
            src="https://placehold.co/400x220/09090b/34d399?text=AI+Agent+Workflow"
            alt="AI Agent SEO workflow"
            className="pain-section-img"
          />
          <ul>
            {ai.map((item, i) => (
              <li key={i}><CheckCircle size={16} className="icon-green" /> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// --- SECTION: AgentWorkflow ---
const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Ingest",
    subtitle: "Listen & Index",
    description:
      "The agent crawls your site and competitor domains, indexing content, backlinks, and SERP data in real time.",
    img: "https://placehold.co/480x300/09090b/34d399?text=Step+1%3A+Ingest",
    icon: <Database size={28} />,
  },
  {
    num: "02",
    title: "Strategy",
    subtitle: "Analyze & Plan",
    description:
      "Our AI identifies ranking gaps, intent shifts, and content opportunities — then generates a prioritized action plan.",
    img: "https://placehold.co/480x300/09090b/34d399?text=Step+2%3A+Strategy",
    icon: <Target size={28} />,
  },
  {
    num: "03",
    title: "Act",
    subtitle: "Execute & Deploy",
    description:
      "It pushes metadata updates, content drafts, and schema changes directly to your CMS or codebase via API.",
    img: "https://placehold.co/480x300/09090b/34d399?text=Step+3%3A+Act",
    icon: <Zap size={28} />,
  },
];

function AgentWorkflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="section-header">
        <div className="section-tag">How It Works</div>
        <h2 className="section-title">Three steps to <span className="text-gradient">autonomous SEO</span></h2>
        <p className="section-sub">
          Your AI agent runs end-to-end — from data ingestion to live deployment — with zero manual intervention.
        </p>
      </div>

      <div className="workflow-steps">
        {WORKFLOW_STEPS.map((step, i) => (
          <div className="workflow-step glass-card" key={i}>
            <div className="step-media">
              <img src={step.img} alt={step.title} className="step-img" />
            </div>
            <div className="step-body">
              <div className="step-num-row">
                <span className="step-num">{step.num}</span>
                <span className="step-icon-wrap">{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>
              <p className="step-desc">{step.description}</p>
              {i < WORKFLOW_STEPS.length - 1 && (
                <div className="step-connector"><ChevronRight size={20} /></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SECTION: FeatureGrid ---
const FEATURES = [
  {
    icon: <Clock size={28} />,
    title: "Autonomous Monitoring",
    description:
      "24/7 SERP tracking and rank change detection without any manual input or scheduled reports.",
    img: "https://placehold.co/320x180/09090b/34d399?text=24%2F7+Monitoring",
    tag: "Always-on",
  },
  {
    icon: <Code2 size={28} />,
    title: "API-First Design",
    description:
      "Fully documented OpenAPI specs. Plug the agent into your existing CI/CD pipeline in minutes.",
    img: "https://placehold.co/320x180/09090b/34d399?text=API+First",
    tag: "Developer-ready",
    highlight: true,
  },
  {
    icon: <Globe size={28} />,
    title: "Scalable Infrastructure",
    description:
      "Built on serverless architecture. Handle thousands of concurrent crawls without provisioning servers.",
    img: "https://placehold.co/320x180/09090b/34d399?text=Serverless+Scale",
    tag: "Enterprise-grade",
  },
  {
    icon: <Search size={28} />,
    title: "Semantic Analysis",
    description:
      "Deep NLP for keyword clustering, intent mapping, and topical authority scoring at scale.",
    img: "https://placehold.co/320x180/09090b/34d399?text=Semantic+NLP",
    tag: "NLP-powered",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Real-Time Analytics",
    description:
      "Live dashboards showing organic traffic, CTR trends, and conversion attribution as they happen.",
    img: "https://placehold.co/320x180/09090b/34d399?text=Live+Analytics",
    tag: "Real-time",
  },
  {
    icon: <Shield size={28} />,
    title: "Competitor Intelligence",
    description:
      "Track rival content strategies, backlink velocity, and SERP feature ownership automatically.",
    img: "https://placehold.co/320x180/09090b/34d399?text=Competitor+Intel",
    tag: "Strategic",
  },
];

function FeatureGrid() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <div className="section-tag">Features</div>
        <h2 className="section-title">Everything your SEO stack <span className="text-gradient">needs</span></h2>
        <p className="section-sub">
          One agent. Every capability. Built for technical decision-makers who demand results.
        </p>
      </div>

      <div className="feature-bento">
        {FEATURES.map((f, i) => (
          <div className={`feature-card glass-card ${f.highlight ? "feature-highlight" : ""}`} key={i}>
            <div className="feature-img-wrap">
              <img src={f.img} alt={f.title} className="feature-img" />
            </div>
            <div className="feature-body">
              <div className="feature-top">
                <span className="feature-icon-wrap">{f.icon}</span>
                <span className="feature-tag">{f.tag}</span>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DX / Developer Section */}
      <div className="dx-section glass-card">
        <div className="dx-text">
          <div className="section-tag">Developer Experience</div>
          <h3 className="dx-title">SEO Agent with an <span className="text-gradient">API-first mindset</span></h3>
          <p className="dx-desc">
            Hook the agent into your existing pipeline with a single API call. Full OpenAPI spec included.
          </p>
          <button className="btn-primary">
            View API Docs <ArrowRight size={18} />
          </button>
        </div>
        <div className="dx-code-wrap">
          <img
            src="https://placehold.co/520x320/050505/34d399?text=curl+-X+POST+%2Fapi%2Faudit%0A+-H+%22Authorization%3A+Bearer+%22%0A+-d+%7B%22url%22%3A+%22yoursite.com%22%7D"
            alt="API code example"
            className="dx-code-img"
          />
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-lang">bash</span>
            </div>
            <pre className="code-body">{`curl -X POST https://api.seoai.dev/v1/audit \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://yoursite.com",
    "depth": 3,
    "competitors": ["rival.com"],
    "auto_deploy": true
  }'`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SECTION: PricingTable ---
const PLANS = [
  {
    name: "Basic",
    price: "$49",
    period: "/mo",
    desc: "Perfect for individual creators and small blogs.",
    features: [
      "Up to 500 pages crawled/mo",
      "Weekly audit reports",
      "Keyword clustering (up to 200)",
      "Email alerts",
      "Community support",
    ],
    cta: "Start Free Trial",
    img: "https://placehold.co/280x140/09090b/34d399?text=Basic+Plan",
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    desc: "For growing teams that need real-time SEO automation.",
    features: [
      "Up to 5,000 pages crawled/mo",
      "Real-time monitoring & alerts",
      "Unlimited keyword clusters",
      "CMS auto-deploy (WordPress, Webflow)",
      "API access (10k calls/mo)",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
    img: "https://placehold.co/280x140/18181b/34d399?text=Pro+Plan",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with advanced compliance needs.",
    features: [
      "Unlimited page crawls",
      "Dedicated AI agent instance",
      "Custom CMS & CI/CD integrations",
      "White-label reports",
      "SLA guarantee (99.9% uptime)",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    img: "https://placehold.co/280x140/09090b/34d399?text=Enterprise",
  },
];

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
        {PLANS.map((plan, i) => (
          <div className={`pricing-card glass-card ${plan.highlight ? "pricing-highlight" : ""}`} key={i}>
            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
            <img src={plan.img} alt={plan.name} className="pricing-img" />
            <div className="pricing-body">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price-value">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <p className="plan-desc">{plan.desc}</p>
              <ul className="plan-features">
                {plan.features.map((f, fi) => (
                  <li key={fi}><CheckCircle size={15} className="icon-indigo" /> {f}</li>
                ))}
              </ul>
              <button className={`pricing-cta ${plan.highlight ? "btn-primary" : "btn-outline"}`}>
                {plan.cta} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SECTION: SiteFooter ---
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <Zap className="logo-icon" size={22} />
            <span>SEO<span className="text-gradient">AI</span></span>
          </div>
          <p className="footer-tagline">
            The autonomous SEO agent for teams that move fast.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter"><X size={18} /></a>
            <a href="#" aria-label="GitHub"><Code2 size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Globe size={18} /></a>
            <a href="#" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
            <a href="#">Roadmap</a>
          </div>
          <div className="footer-col">
            <h4>Developers</h4>
            <a href="#">API Reference</a>
            <a href="#">OpenAPI Spec</a>
            <a href="#">SDKs</a>
            <a href="#">Status</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="newsletter-text">
          <Layers size={20} className="newsletter-icon" />
          <span>Get weekly SEO insights from our AI — straight to your inbox.</span>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="you@company.com" className="newsletter-input" />
          <button className="btn-primary newsletter-btn">Subscribe <ArrowRight size={16} /></button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SEOAI Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

// --- ROOT APP ---
function App() {
  return (
    <div className="app-container">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

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
