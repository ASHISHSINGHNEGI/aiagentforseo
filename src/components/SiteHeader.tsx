import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const isLight = !dark;

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-pill">
        {/* Logo */}
        <div className="logo">
          {scrolled || isLight ? (
            <img src="/claude(black).svg" alt="Ryze" style={{ width: "1.5em", height: "1.5em", objectFit: "contain" }} />
          ) : (
            <img src="/claude.png" alt="Ryze" style={{ width: "1.5em", height: "1.5em", objectFit: "contain" }} />
          )}
          <span className="logo-text">Ryze</span>
        </div>

        {/* Center links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#docs" onClick={() => setMenuOpen(false)}>Docs</a>
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          <button
            className="nav-theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="nav-login">Log in</button>
          <button className="nav-cta">Get started</button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
