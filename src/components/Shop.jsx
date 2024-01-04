import { Link } from "react-router-dom";
export default function Shop() {
  return (
    <>
      <div className="shop">
        <div className="row">
          <div className="box-1">
            <div className="text">
              <h1>HYBRID WATCHES</h1>
              <p>Tortor aliquam nulla facilisi cras fermen.</p>
              <Link to="/store">Shop Now</Link>
            </div>
          </div>
          <div className="box-2">
            <div className="text">
              <h1>AN UNIQUE TIMEPIECE</h1>
              <p>
                Gravida di dui sapien eget mi proin sed. Porttitor lacus luctus.
              </p>
              <Link to="/store">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
