export default function Hero({ onGetStarted }) {
  return (
    <section className="landing-hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> THE COLLABORATION SPACE FOR
          DEVELOPERS
        </div>
        <h1>
          Build better
          <br />
          software, <em>together.</em>
        </h1>
        <p className="hero-description">
          Bring your code, conversations, and ideas into one focused room. Pair
          up, work through the hard parts, and ship something great together.
        </p>
        <div className="hero-actions">
          <button className="primary-cta" type="button" onClick={onGetStarted}>
            Start collaborating <span aria-hidden="true">→</span>
          </button>
          <a className="secondary-cta" href="#how-it-works">
            See how it works <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            <i>J</i>
            <i>M</i>
            <i>A</i>
            <i>+</i>
          </div>
          <span>One shared space. Better work, together.</span>
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Preview of a live collaborative coding session"
      >
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="code-window">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>pair-session.jsx</span>
            <span className="live-indicator">
              <i /> LIVE
            </span>
          </div>
          <div className="code-content">
            <div className="code-line">
              <b>01</b>
              <code>
                <span className="code-purple">import</span> {"{ "}{" "}
                <span className="code-blue">useState</span> {" }"}{" "}
                <span className="code-purple">from</span>{" "}
                <span className="code-green">'react'</span>;
              </code>
            </div>
            <div className="code-line">
              <b>02</b>
              <code />
            </div>
            <div className="code-line">
              <b>03</b>
              <code>
                <span className="code-purple">function</span>{" "}
                <span className="code-yellow">BuildSomething</span>() {"{"}
              </code>
            </div>
            <div className="code-line">
              <b>04</b>
              <code>
                &nbsp; <span className="code-purple">const</span> [ideas,
                setIdeas] = <span className="code-yellow">useState</span>([]);
              </code>
            </div>
            <div className="code-line">
              <b>05</b>
              <code>
                &nbsp; <span className="code-purple">const</span> makeItHappen =
                () =&gt; {"{"}
              </code>
            </div>
            <div className="code-line highlighted">
              <b>06</b>
              <code>
                &nbsp;&nbsp;&nbsp;{" "}
                <span className="code-blue">collaborate</span>(ideas);
                <span className="cursor-tag">Maya</span>
              </code>
            </div>
            <div className="code-line">
              <b>07</b>
              <code>&nbsp; {"};"}</code>
            </div>
            <div className="code-line">
              <b>08</b>
              <code>{"}"}</code>
            </div>
            <div className="code-line">
              <b>09</b>
              <code />
            </div>
            <div className="code-line">
              <b>10</b>
              <code>
                <span className="code-comment">// Better, together.</span>
              </code>
            </div>
          </div>
          <div className="window-status">
            <span>
              <i /> Maya is editing
            </span>
            <span>JavaScript&nbsp; ▾</span>
          </div>
        </div>
        <div className="call-card">
          <span className="call-avatar">M</span>
          <span>
            <b>Maya Chen</b>
            <small>Frontend engineer</small>
          </span>
          <span className="call-wave">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <span className="visual-spark spark-one">✳</span>
        <span className="visual-spark spark-two">✳</span>
      </div>
    </section>
  );
}
