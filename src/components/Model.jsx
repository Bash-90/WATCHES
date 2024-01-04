import shop4 from "../img/shop04.webp";
import watch from "../img/Watch_01.gif";

export default function Model() {
  return (
    <>
      <div className="model">
        <div className="container">
          <div className="row">
            <div className="text">
              <span>Trending Model</span>
              <h1>THE HOTTEST WRIST WATCHES @ 50% DISCOUNT</h1>
              <p>
                Semper eget duis at tellus at urna condimentum mattis
                pellentesque. Nec dui nunc mattis enim ut tellus elem
              </p>
              <a href="#">Shop Now</a>
            </div>
            <div className="imgs">
              <img src={watch} alt="" />
              <div className="after">
                <img src={shop4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
