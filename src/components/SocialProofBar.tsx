import { LOGOS } from "../data";

export function SocialProofBar() {
  return (
    <section className="social-proof">
      {/* Row 1 — proof label */}
      <div className="sp-label-row">
        <p className="social-proof-label">Trusted by teams at</p>
      </div>

      {/* Row 2 — branded logo boxes */}
      <div className="logo-track-wrapper">
        {LOGOS.map((brand) => (
          <div className="logo-box" key={brand.name}>
            <span className="logo-box-name" style={brand.style}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
