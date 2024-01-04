import new1 from "../img/new1.webp";
import new2 from "../img/new2.webp";
export default function News() {
  return (
    <>
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="boxes">
              <div className="box">
                <div className="img">
                  <img src={new1} alt="" />
                  <div className="details">
                    <span>jun, 2022</span>
                    <h1>Finest Men’s Quality Swiss Watch Collections</h1>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={new2} alt="" />
                  <div className="details">
                    <span>jun, 2022</span>
                    <h1>Finest Men’s Quality Swiss Watch Collections</h1>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="text">
                <h1>RECENT NEWS</h1>
                <p>
                  Nec feugiat in fermentum posuere urna nec tincidunt praesent.
                  Ipsum consequat nisl vel pretium lectus quam. Nulla aliquet
                  enim tortor at auctor urna nunc id.
                </p>
                <a href="#">Blogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
