export default function Footer() {
  return (
    <footer className="landing-footer">
      <a className="landing-brand" href="#top">
        <span className="brand-mark" aria-hidden="true">
          {"</>"}
        </span>
        <span>CodeMeet</span>
      </a>
      <p>Make something good. Together.</p>
      <span className="footer-copyright">
        © {new Date().getFullYear()} CodeMeet
      </span>
    </footer>
  );
}
