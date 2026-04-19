import "./App.css";
import { AgentWorkflow } from "./components/AgentWorkflow";
import { FeatureGrid } from "./components/FeatureGrid";
import { HeroSection } from "./components/HeroSection";
import { PainPointSection } from "./components/PainPointSection";
import { PricingTable } from "./components/PricingTable";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SocialProofBar } from "./components/SocialProofBar";

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />
      <div className="bg-glow-3" />
      <SiteHeader />
      <main>
        <HeroSection />
        <SocialProofBar />
        <PainPointSection />
        <AgentWorkflow />
        <FeatureGrid />
        <PricingTable />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
