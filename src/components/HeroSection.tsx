import { ArrowRight } from "lucide-react";
import { MockConsole } from "./MockConsole";

const ICONS = [
  { src: "/icons/anthropic.svg", alt: "Anthropic" },
  { src: "/icons/gemma-color.svg", alt: "Gemma" },
  { src: "/icons/adobefirefly-color.svg", alt: "Adobe Firefly" },
  { src: "/icons/ollama.svg", alt: "Ollama" },
  { src: "/icons/microsoft-color.svg", alt: "Microsoft" },
];

export function HeroSection() {
  return (
    <div className="hero-outer" id="hero">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI Agent for SEO</h1>
          <p className="hero-description">
            AI-powered SEO optimization that finds leaks, fixes issues, and
            deploys changes automatically.
          </p>
          <div className="hero-actions">
            <div className="hero-input-group">
              <input
                type="email"
                className="hero-email-input"
                placeholder="Enter your email"
              />
              <button className="hero-cta-btn">
                Get started <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="hero-trusted">
            <div className="trusted-logos">
              {ICONS.map((icon) => (
                <img
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  className="trusted-icon"
                />
              ))}
            </div>
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
