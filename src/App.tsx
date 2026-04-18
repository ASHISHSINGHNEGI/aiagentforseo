import { Sparkles, ArrowRight, Play, Zap } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Background Effects */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Zap className="logo-icon" size={28} />
          <span>SEO<span className="text-gradient">AI</span></span>
        </div>
        
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </div>
        
        <div className="nav-actions">
          <button className="btn-login">Log In</button>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>v2.0 is now live</span>
        </div>
        
        <h1 className="hero-title">
          Rank Higher with <br />
          <span className="text-gradient">AI-Powered</span> SEO
        </h1>
        
        <p className="hero-description">
          Automate your keyword research, optimize your content, and climb the search rankings faster with our advanced artificial intelligence engine.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Start Free Trial <ArrowRight size={20} />
          </button>
          <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Play size={20} fill="currentColor" /> Watch Demo
          </button>
        </div>

        {/* Decorative Visual/Mockup */}
        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="mac-dot red"></div>
              <div className="mac-dot yellow"></div>
              <div className="mac-dot green"></div>
            </div>
            <div className="dashboard-grid">
              <div className="dashboard-sidebar"></div>
              <div className="dashboard-main">
                <h2>Analytics Dashboard AI</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
