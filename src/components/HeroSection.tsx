import { ArrowRight, Play } from "lucide-react";
import { MockConsole } from "./MockConsole";

export function HeroSection() {
  return (
    <div className="hero-outer" id="hero">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI for SEO</h1>
          <p className="hero-description">
            Meet the first autonomous AI agent that audits, optimizes, and
            deploys SEO changes directly to your stack — without lifting a
            finger.
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
