import shop1 from "../img/shop01.webp";
import shop2 from "../img/shop02.webp";
import shop3 from "../img/shop03.webp";
import { Link } from "react-router-dom";
export default function Type() {
  return (
    <>
      <div className="type">
        <div className="container">
          <div className="boxes">
            <div className="box">
              <img src={shop1} alt="" />
              <h1>Chronograph Watch</h1>
              <Link to="/store">See All</Link>
            </div>
            <div className="box">
              <img src={shop3} alt="" />
              <h1>Best Quartz Dial Watch</h1>
              <Link to="/store">See All</Link>
            </div>
            <div className="box">
              <img src={shop2} alt="" />
              <h1>Swiss Analog Watch</h1>
              <Link to="/store">See All</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
