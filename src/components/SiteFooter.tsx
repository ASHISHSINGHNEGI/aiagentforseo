import { ArrowRight, Database } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <span>
              RYZE <span className="text-gradient">AI</span>
            </span>
          </div>
          <p className="footer-tagline">
            The autonomous SEO agent for teams that move fast.
          </p>
          <div className="footer-socials">
            {["X", "GH", "LI", "✉"].map((s, i) => (
              <a href="#" key={i} className="social-btn" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links-grid">
          {[
            {
              heading: "Product",
              links: ["Features", "Pricing", "Changelog", "Roadmap"],
            },
            {
              heading: "Developers",
              links: ["API Reference", "OpenAPI Spec", "SDKs", "Status"],
            },
            {
              heading: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              heading: "Legal",
              links: ["Privacy", "Terms", "Cookies", "Security"],
            },
          ].map((col, i) => (
            <div className="footer-col" key={i}>
              <h4>{col.heading}</h4>
              {col.links.map((l, j) => (
                <a href="#" key={j}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-newsletter glass-card">
        <div className="newsletter-text">
          <Database size={18} className="nl-icon" />
          <span>
            Get weekly SEO insights from our AI — direct to your inbox.
          </span>
        </div>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="you@company.com"
            className="newsletter-input font-mono"
          />
          <button className="btn-primary">
            Subscribe <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ryze.ai Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
