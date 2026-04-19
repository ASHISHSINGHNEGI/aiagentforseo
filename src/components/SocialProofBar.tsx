import { Star } from "lucide-react";
import { LOGOS, TESTIMONIALS } from "../data";

export function SocialProofBar() {
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
              {Array(t.stars)
                .fill(0)
                .map((_, si) => (
                  <Star
                    key={si}
                    size={13}
                    fill="var(--agent-accent)"
                    stroke="none"
                  />
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
