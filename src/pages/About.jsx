import Identification from "../components/Identification";
import Branded from "../components/Branded";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-bc"></div>
        <div className="text">
          <h1>ABOUT</h1>
          <span>Home / about</span>
        </div>
      </div>
      <Identification />
      <Branded />
    </>
  );
}
