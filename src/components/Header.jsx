import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.webp";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

export default function Header() {
  const [classActive, setClassActive] = useState(false);
  const isActive = classActive ? "active" : "";

  const { showCart, setShowCart } = useGlobalContext();
  const classShow = showCart ? "active" : "";

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className={`sections ${isActive}`}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/store">SHOP</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/favourites">FAVOURITES</Link>
            </li>
          </ul>
          <ul>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <button onClick={handleCartShow}>
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li>
              <BsFillPersonFill />
            </li>
          </ul>
          <button
            className={`menu ${isActive}`}
            onClick={() => setClassActive(!classActive)}
          >
            <hr className={`right ${isActive}`} />
            <hr className={`left ${isActive}`} />
            <hr className={`none ${isActive}`} />
          </button>
        </div>
      </div>
    </>
  );
}
