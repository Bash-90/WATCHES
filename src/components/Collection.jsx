import { Link } from "react-router-dom";
import Goods from "./Goods";

export default function Collection({ addProduct }) {
  return (
    <>
      <div className="collection">
        <div className="container">
          <div className="text">
            <h1>Collection</h1>
            <span>
              <Link to="/">Home</Link> / Pretty Products
            </span>
          </div>
        </div>
      </div>
      <Goods addProduct={addProduct} />
    </>
  );
}
