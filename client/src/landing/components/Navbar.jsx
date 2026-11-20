export default function Navbar({ onGetStarted }) {
  return (
    <header className="landing-nav">
      <a className="landing-brand" href="#top" aria-label="CodeMeet home">
        <span className="brand-mark" aria-hidden="true">{"</>"}</span><span>CodeMeet</span>
      </a>
      <nav className="landing-nav-links" aria-label="Main navigation">
        <a href="#features">Features</a><a href="#how-it-works">How it works</a>
      </nav>
      <button className="landing-nav-cta" type="button" onClick={onGetStarted}>Get started <span aria-hidden="true">↗</span></button>
    </header>
  );
}
