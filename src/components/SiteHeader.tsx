// ============================================================
// SITE HEADER

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

// ============================================================
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/claude.png"
          alt="Ryle"
          style={{ width: "1.8em", height: "1.8em", objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            fontSize: 40,
          }}
        >
          Ryze
        </span>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>
          Features
        </a>
        <a href="#workflow" onClick={() => setMenuOpen(false)}>
          How It Works
        </a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </a>
        <a href="#docs" onClick={() => setMenuOpen(false)}>
          Docs
        </a>
      </div>
      <div className="nav-actions">
        <button className="btn-primary">
          Get started <ArrowRight size={14} />
        </button>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
