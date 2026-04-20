import { LOGOS } from "../data";

export function SocialProofBar() {
  return (
    <section className="social-proof">
      <div className="sp-label-row">
        <p className="social-proof-label">Trusted by teams at</p>
      </div>

      <div className="logo-grid">
        {LOGOS.map((brand) => (
          <div className="logo-box" key={brand.name}>
            <img
              src={brand.src}
              alt={brand.name}
              className="logo-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
