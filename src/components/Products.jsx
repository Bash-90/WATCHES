import { useState, useRef, useEffect } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsBag, BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import products from "../products";
import { useGlobalContext } from "../context";
export default function Products({ addProduct }) {
  const { setShowCart, handleFavouritesAdd, handleFavouritesDelete } =
    useGlobalContext();
  const row = useRef();
  const sliderContainer = useRef();
  const [favouritesAdd, setFavouritesAdd] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [slide, setSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const stars = Array(5).fill(0);
  const [currentValues, setCurrentValues] = useState({});

  const color = {
    active: "#FFBA5A",
    inactive: "#a9a9a9",
  };

  const activeClass = isActive ? "active" : "";

  const handleFavouritesToggle = (product) => {
    if (favouritesAdd) {
      setIsActive(true);
      handleFavouritesAdd(product);
    } else {
      setIsActive(false);
      handleFavouritesDelete(product);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSlide(slide + 1);
      goToPrevSlide();
      goToNextSlide();
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  });

  const handleStarsClick = (productId, value) => {
    setCurrentValues((prevValues) => ({
      ...prevValues,
      [productId]: value,
    }));
  };

  useEffect(() => {
    setElementWidth(row.current.clientWidth);
    setSlideCount(sliderContainer.current.children.length);
  });

  const goToPrevSlide = () => {
    setSlide(slide === 0 ? slideCount - 3 : slide - 1);
  };

  const goToNextSlide = () => {
    setSlide(slide === slideCount - 3 ? 0 : slide + 1);
  };
  return (
    <>
      <div className="products">
        <div className="container">
          <h1 className="title">CLASSIC WATCHES</h1>
          <button className="left" onClick={goToPrevSlide}>
            <BsArrowLeftCircle />
          </button>
          <button className="right" onClick={goToNextSlide}>
            <BsArrowRightCircle />
          </button>
          <div
            className="slider"
            ref={sliderContainer}
            style={{
              transform: `translateX(-${(elementWidth + 16) * slide}px)`,
            }}
          >
            {products.map((product) => {
              const { img, title, price, id } = product;
              const currentValue = currentValues[id] || 0;
              return (
                <div className="slide" key={id} ref={row}>
                  <div className="img">
                    <img src={img} alt={title} />
                    <button
                      className={`heart ${activeClass}`}
                      onClick={() => {
                        setFavouritesAdd(!favouritesAdd);
                        handleFavouritesToggle(product);
                      }}
                    >
                      <AiOutlineHeart />
                    </button>
                    <button
                      className="cart"
                      onClick={() => {
                        addProduct(product);
                        setShowCart(true);
                      }}
                    >
                      <BsBag />
                    </button>
                  </div>
                  <div className="text">
                    <ul>
                      {stars.map((_, index) => (
                        <li key={index}>
                          <AiFillStar
                            size={24}
                            style={{
                              marginRight: 5,
                              cursor: "pointer",
                            }}
                            color={
                              currentValue > index
                                ? color.active
                                : color.inactive
                            }
                            onClick={() => handleStarsClick(id, index + 1)}
                          />
                        </li>
                      ))}
                    </ul>
                    <h2>{title}</h2>
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
