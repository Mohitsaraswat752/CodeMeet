import raccoonAnimation from "../../assets/raccoon.gif.gif";

export default function Mascot() {
  return (
    <img
      className="landing-mascot-art"
      src={raccoonAnimation}
      alt="CodeMeet raccoon mascot coding on a laptop"
      loading="eager"
    />
  );
}
