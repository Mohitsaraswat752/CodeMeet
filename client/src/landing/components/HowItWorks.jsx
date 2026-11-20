import Reveal from "./Reveal";

const steps = [
  { number: "01", title: "Create a room", text: "Start a fresh collaboration room in a single click." },
  { number: "02", title: "Invite your friend", text: "Share your room and bring your coding partner in." },
  { number: "03", title: "Start collaborating", text: "Code, talk, and turn your ideas into working software." },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-shell">
        <Reveal className="section-heading how-heading">
          <span className="section-kicker">THREE STEPS. ZERO FRICTION.</span>
          <h2>From idea to <em>in sync.</em></h2>
          <p>Your next productive session is closer than you think.</p>
        </Reveal>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <article className="step-card">
                <span className="step-number">{step.number}</span>
                {index < steps.length - 1 && <span className="step-connector" aria-hidden="true" />}
                <h3>{step.title}</h3><p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
