import { WORKFLOW_STEPS } from "../data";

function MiniConsole({ logs }: { logs: string[] }) {
  return (
    <div className="mini-console font-mono">
      {logs.map((line, i) => (
        <div
          key={i}
          className={`mc-line ${
            line.startsWith("✓")
              ? "mc-ok"
              : line.startsWith("  ↳")
              ? "mc-info"
              : "mc-cmd"
          }`}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

export function AgentWorkflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="section-header">
        <div className="section-tag">How It Works</div>
        <h2 className="section-title">
          Three steps to <span className="text-gradient">autonomous SEO</span>
        </h2>
        <p className="section-sub">
          Your agent runs end-to-end — from crawl to live deployment — with zero
          manual steps.
        </p>
      </div>
      <div className="workflow-steps">
        {WORKFLOW_STEPS.map((step, i) => (
          <div className="workflow-step glass-card" key={i}>
            <div className="step-num-row">
              <span className="step-num">{step.num}</span>
              <div
                className={`step-metric ${step.good ? "sm-good" : "sm-warn"}`}
              >
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
