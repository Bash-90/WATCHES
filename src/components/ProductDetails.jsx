import products from "../products";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div className="product-details">
      <div className="container">
        <div className="img">
          <img src={product.img} alt="" />
        </div>
        <div className="text">
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
