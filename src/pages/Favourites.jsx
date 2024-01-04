import { useGlobalContext } from "../context";
import { BsBag, BsFillTrash3Fill } from "react-icons/bs";

export default function Favourites({ addProduct }) {
  const { favourites, setShowCart, handleFavouritesDelete } =
    useGlobalContext();

  console.log(favourites);
  return (
    <div className="favorites">
      <div className="container">
        <div className="boxes">
          {favourites.length === 0 ? (
            <h1>You don't have any favourites</h1>
          ) : (
            favourites.map((product) => (
              <div className="box">
                <img src={product.img} alt="" />
                <div className="text">
                  <h1>{product.title}</h1>
                  <span>${product.price}</span>
                </div>
                <div className="btns">
                  <button
                    onClick={() => {
                      addProduct(product);
                      setShowCart(true);
                    }}
                  >
                    <BsBag />
                  </button>
                  <button
                    onClick={() => {
                      handleFavouritesDelete(product);
                    }}
                  >
                    <BsFillTrash3Fill />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
