import { ArrowRight, CheckCircle } from "lucide-react";
import { PLANS } from "../data";
import type { PlanData } from "../data";

function PricingCard({ plan }: { plan: PlanData }) {
  return (
    <div
      className={`pricing-card glass-card ${plan.highlight ? "pricing-highlight" : ""}`}
    >
      {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

      {plan.highlight && (
        <div className="pricing-live-bar font-mono">
          <span className="plb-dot" />
          <span>Agent active on 3,847 sites right now</span>
        </div>
      )}

      <div className="pricing-body">
        <h3 className="plan-name">{plan.name}</h3>
        <div className="plan-price">
          <span className="price-value">{plan.price}</span>
          <span className="price-period">{plan.period}</span>
        </div>
        <p className="plan-desc">{plan.desc}</p>
        <ul className="plan-features">
          {plan.features.map((f, i) => (
            <li key={i}>
              <CheckCircle size={13} className="ic-green" /> {f}
            </li>
          ))}
        </ul>
        <button
          className={`pricing-cta ${plan.highlight ? "btn-primary" : "btn-outline"}`}
        >
          {plan.cta} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

export function PricingTable() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <h2 className="section-title">
          Simple, <span className="text-gradient">transparent</span> pricing
        </h2>
        <p className="section-sub">
          No hidden fees. Cancel anytime. Every plan includes a 7-day free
          pilot.
        </p>
      </div>
      <div className="pricing-grid">
        {PLANS.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
}
