import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Cart({
  productQuntity,
  addProduct,
  removeProduct,
  cartTotal,
  cart,
  setCart,
}) {
  const { showCart, setShowCart } = useGlobalContext();
  const classShow = showCart ? " active" : "";

  function handleCartClose() {
    setShowCart(false);
  }

  return (
    <>
      <div className={`cart-buy${classShow}`}>
        <div className="title">
          <h1>Your Cart</h1>
          <button onClick={handleCartClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="products-container">
          {cart.length === 0 ? (
            <h1>Your bag is empty!</h1>
          ) : (
            cart.map((product) => {
              const { img, title, price, id } = product;
              return (
                <div className="product">
                  <div className="img">
                    <img src={img} alt={title} />
                  </div>
                  <div className="text">
                    <h1 className="title">{title}</h1>
                    <span>${price}</span>
                  </div>
                  <div className="quantity">
                    <button
                      className="minus"
                      onClick={() => productQuntity(id, "dec")}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="plus"
                      onClick={() => productQuntity(id, "inc")}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <h1 className="total">
          <span>Total:</span> ${cartTotal}
        </h1>
      </div>
    </>
  );
}
