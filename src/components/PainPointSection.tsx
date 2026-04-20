import {
  Activity,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Clock,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

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
          {[
            "best seo tool",
            "seo automation",
            "keyword research ai",
            "+ 844 more...",
          ].map((kw, i) => (
            <div className="ss-row" key={i}>
              <span className="ss-idx">{i < 3 ? i + 1 : "…"}</span>
              <span className="ss-kw">{kw}</span>
              <span className="ss-vol red">{i < 3 ? "manual" : ""}</span>
            </div>
          ))}
        </div>
        {/* <div className="sim-chart-wrap">
          <span className="sim-chart-label red">Organic Traffic ↓</span>
          <SparklineDown />
        </div> */}
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
    const t = setInterval(() => setTick((n) => n + 1), 2800);
    return () => clearInterval(t);
  }, []);

  const gains = ["+6", "+11", "+14", "+9", "+18", "+22"];
  void gains[tick % gains.length];

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
        {/* <div className="sim-chart-wrap">
          <span className="sim-chart-label green">
            Organic Traffic ↑ {currentGain}%
          </span>
          <SparklineUp />
        </div> */}
        <div className="sim-tools">
          <span className="tool-chip tool-chip-green">
            <Zap size={10} />
            Ryze agent
          </span>
        </div>
      </div>
    </div>
  );
}

export function PainPointSection() {
  return (
    <section className="pain-point" id="pain">
      <div className="section-header">
        <h2 className="section-title">
          Manual SEO is <span className="text-gradient">broken</span>
        </h2>
        <p className="section-sub">
          Traditional workflows are slow, fragmented, and reactive. See the
          difference.
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
