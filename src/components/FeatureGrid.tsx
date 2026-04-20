import { ArrowRight, Cpu, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { FEATURES } from "../data";
import type { FeatureData } from "../data";

function AgentThoughtBubble({ text }: { text: string }) {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d === 3 ? 1 : d + 1)), 500);
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
    const t = setTimeout(() => setAct((a) => (a + 1) % 3), durations[act]);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [act]);

  const { acts } = feature;
  const isPain = act === 0;
  const isAction = act === 1;
  const isResult = act === 2;

  return (
    <div
      className={`feature-card glass-card ${
        isResult ? "fc-result" : isPain ? "fc-pain" : "fc-action"
      }`}
    >
      <div className="act-strip">
        <span className={`act-dot ${isPain ? "act-active-pain" : ""}`} />
        <span className={`act-dot ${isAction ? "act-active-action" : ""}`} />
        <span className={`act-dot ${isResult ? "act-active-result" : ""}`} />
        <span className="act-label">
          {isPain ? "Pain" : isAction ? "Action" : "Result"}
        </span>
      </div>

      <div
        className={`metric-widget ${
          isPain ? "mw-pain" : isResult ? "mw-result" : "mw-action"
        }`}
      >
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

export function FeatureGrid() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2 className="section-title">
          Every capability your stack{" "}
          <span className="text-gradient">needs</span>
        </h2>
        <p className="section-sub">
          Each card has three parts: Pain, Agent Action, and Result. See the
          agent work in real time.
        </p>
      </div>
      <div className="feature-bento">
        {FEATURES.map((f, i) => (
          <ThreeActCard key={i} feature={f} />
        ))}
      </div>

      <div className="dx-section glass-card">
        <div className="dx-text">
          <div className="section-tag">Developer Experience</div>
          <h3 className="dx-title">
            API-first SEO agent —{" "}
            <span className="text-gradient">plug &amp; play</span>
          </h3>
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
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
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
