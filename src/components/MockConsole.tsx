import { CheckCircle, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { CONSOLE_LINES } from "../data";

export function MockConsole() {
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
        setTimeout(() => setPhase((p) => p + 1), 2400);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530);
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
          <span className="live-pulse" />
          LIVE
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
          <div
            key={`${phase}-${i}`}
            className={`console-line line-${line.type}`}
          >
            {line.type === "cmd" && (
              <span className="line-prefix">$&nbsp;</span>
            )}
            {line.type === "ok" && (
              <span className="line-prefix ok">✓&nbsp;</span>
            )}
            {line.type === "success" && (
              <span className="line-prefix ok">✓&nbsp;</span>
            )}
            {line.type === "warn" && (
              <span className="line-prefix warn">⚠&nbsp;</span>
            )}
            {line.type === "info" && (
              <span className="line-prefix dim">&nbsp;&nbsp;</span>
            )}
            <span>{line.text}</span>
          </div>
        ))}
        <div className="console-cursor-line">
          <span className="prompt-path">$&nbsp;</span>
          <span className={`console-cursor ${cursor ? "visible" : ""}`}>█</span>
        </div>
      </div>

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
