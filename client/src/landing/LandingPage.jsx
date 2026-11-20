import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import "./landing.css";

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="codemeet-landing">
      <Navbar onGetStarted={onGetStarted} />
      <main>
        <Hero onGetStarted={onGetStarted} />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
