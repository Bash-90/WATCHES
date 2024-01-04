import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../products";
import { useGlobalContext } from "../context";

export default function Goods({ addProduct }) {
  const [isActive, setIsActive] = useState(false);
  const { setShowCart, handleFavouritesAdd, handleFavouritesDelete } =
    useGlobalContext();
  const [favouritesAdd, setFavouritesAdd] = useState(false);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const stars = Array(5).fill(0);
  const [currentValues, setCurrentValues] = useState({});

  const handleFavouritesToggel = (product) => {
    if (favouritesAdd) {
      setIsActive(true);
      handleFavouritesAdd(product);
    } else {
      setIsActive(false);
      handleFavouritesDelete(product);
    }
  };

  const color = {
    active: "#FFBA5A",
    inactive: "#a9a9a9",
  };

  const handleClick = (productId, value) => {
    setCurrentValues((prevValues) => ({
      ...prevValues,
      [productId]: value,
    }));
  };

  const activeClass = isActive ? "active" : "";

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setFilteredProducts(products);
    } else {
      const value = event.target.value.toLowerCase();
      setSearch(value);
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(value)
        )
      );
    }
  };

  const handlePriceFilter = () => {
    let filteredProducts = products;
    if (
      lowestPrice !== 0 &&
      highestPrice !== 0 &&
      lowestPrice !== "" &&
      highestPrice !== ""
    ) {
      filteredProducts = products.filter(
        (product) =>
          product.price >= lowestPrice && product.price <= highestPrice
      );
    }
    setFilteredProducts(filteredProducts);
  };
  return (
    <>
      <div className="goods">
        <div className="container">
          <div className="inputs">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="text-filter"
            />
            <div className="min">
              <label htmlFor="price-filter-min">MIN: </label>
              <input
                defaultValue="0"
                id="price-filter-min"
                type="number"
                min="1000"
                className="price-filter"
                value={lowestPrice}
                onChange={(e) => setLowestPrice(e.target.value)}
                onBlur={handlePriceFilter}
              />
            </div>
            <div className="max">
              <label htmlFor="price-filter-max">Max: </label>
              <input
                defaultValue="0"
                id="price-filter-max"
                type="number"
                min="1000"
                max="3000"
                className="price-filter"
                value={highestPrice}
                onChange={(e) => setHighestPrice(e.target.value)}
                onBlur={handlePriceFilter}
              />
            </div>
          </div>
          <div className="boxes">
            {filteredProducts.map((product) => {
              const { img, title, price, id } = product;
              const currentValue = currentValues[id] || 0;
              return (
                <div key={id} className="box">
                  <div className="img">
                    <img src={img} />
                    <button
                      className="cart"
                      onClick={() => {
                        addProduct(product);
                        setShowCart(true);
                      }}
                    >
                      <BsBag />
                    </button>
                    <button
                      className={`heart ${activeClass}`}
                      onClick={() => {
                        setFavouritesAdd(!favouritesAdd);
                        handleFavouritesToggel(product);
                      }}
                    >
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <ul>
                    {stars.map((_, index) => (
                      <li key={index}>
                        <AiFillStar
                          size={24}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                          color={
                            currentValue > index ? color.active : color.inactive
                          }
                          onClick={() => handleClick(id, index + 1)}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="text">
                    <h1>{title}</h1>
                    <span>${price}</span>
                    <Link to={`/productdetails/${id}`}>View Details</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
