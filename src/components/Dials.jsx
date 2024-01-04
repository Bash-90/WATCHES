import { useState, useEffect, useRef } from "react";
import icon1 from "../img/icon1.avif";
import icon2 from "../img/icon2.webp";
import icon3 from "../img/icon3.webp";
import icon4 from "../img/icon4.webp";
import icon5 from "../img/icon05.webp";
import icon6 from "../img/icon06.webp";
export default function Dials() {
  const [isDown, setIsDown] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [x, setX] = useState(0);
  const sliderContainer = useRef();
  const [move, setMove] = useState(0);

  function handleMouseDown(e) {
    setIsDown(true);
    setX((prev) => (prev = e.pageX - sliderContainer.current.offsetLeft));
    setScrollLeft(sliderContainer.current.scrollLeft);
    console.log(x);
  }
  function handleMouseUp() {
    setIsDown(false);
  }
  function handleLeave() {
    setIsDown(false);
  }
  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    setCurrentX(e.pageX - sliderContainer.current.offsetLeft);
    setMove((currentX - x) * 3);
    sliderContainer.current.scrollLeft = scrollLeft - move;
  }
  return (
    <>
      <div className="dials">
        <div className="container">
          <h1 className="title">CLASSY DIALS</h1>
          <div
            className="slider"
            ref={sliderContainer}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
          >
            <div className="slide">
              <img src={icon1} alt="" />
            </div>
            <div className="slide">
              <img src={icon1} alt="" />
            </div>
            <div className="slide">
              <img src={icon2} alt="" />
            </div>
            <div className="slide">
              <img src={icon3} alt="" />
            </div>
            <div className="slide">
              <img src={icon4} alt="" />
            </div>
            <div className="slide">
              <img src={icon2} alt="" />
            </div>
            <div className="slide">
              <img src={icon3} alt="" />
            </div>
            <div className="slide">
              <img src={icon4} alt="" />
            </div>
            <div className="slide">
              <img src={icon2} alt="" />
            </div>
            <div className="slide">
              <img src={icon3} alt="" />
            </div>
            <div className="slide">
              <img src={icon4} alt="" />
            </div>
            <div className="slide">
              <img src={icon2} alt="" />
            </div>
            <div className="slide">
              <img src={icon3} alt="" />
            </div>
            <div className="slide">
              <img src={icon4} alt="" />
            </div>
            <div className="slide">
              <img src={icon5} alt="" />
            </div>
            <div className="slide">
              <img src={icon6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
