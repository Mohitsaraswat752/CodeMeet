const features = [
  { icon: "code", title: "Real-time code editor", text: "Write, review, and iterate together in a shared editor that keeps your whole room in sync." },
  { icon: "call", title: "Video & audio calls", text: "Talk through the tricky bits face to face, without leaving your collaboration space." },
  { icon: "board", title: "Collaborative whiteboard", text: "Sketch a system, map an idea, and make the next step clear for everyone." },
  { icon: "room", title: "Room-based collaboration", text: "Open a room for your team and bring code, calls, and creative thinking together." },
];

function FeatureIcon({ type }) {
  const paths = {
    code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>,
    call: <><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z" /><path d="M9 9.5v1m3-2v3m3-2v1" /></>,
    board: <><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M8 21h8m-4-4v4M8 9h8m-8 4h5" /></>,
    room: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0m2-8a3 3 0 1 0 0-6m1 8a5 5 0 0 1 3 4" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-kicker">EVERYTHING IN ONE ROOM</span>
          <h2>Tools that keep your<br /><em>momentum going.</em></h2>
          <p>Less switching tabs. More solving problems together.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-topline"><span className="feature-icon"><FeatureIcon type={feature.icon} /></span><span className="feature-number">0{index + 1}</span></div>
              <h3>{feature.title}</h3><p>{feature.text}</p>
              <span className="feature-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
