import data from "../data";
import { useState, useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Landing() {
  const [landingSlide, setLandingSlide] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentSlide(currentSlide + 1);
      goToPrevSlide();
      goToNextSlide();
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  });
  const goToPrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? landingSlide.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === landingSlide.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <>
      <div className="landing">
        {data.map((slide, index) => (
          <div
            className={`landing-slide ${
              index === currentSlide ? "active" : ""
            }`}
            key={index}
            style={{ backgroundImage: `url("${slide.img}")` }}
          >
            <div className="container">
              <div
                className={`text ${index === currentSlide ? "active" : ""} ${
                  slide.cls
                }`}
              >
                <span className={slide.cls}>{slide.sapn}</span>
                <h1 className={slide.cls}>{slide.title}</h1>
                <Link to="/store" className={slide.cls}>
                  {slide.link}
                </Link>
              </div>
              <button className="right" onClick={goToNextSlide}>
                <BsArrowRight />
              </button>
              <button className="left" onClick={goToPrevSlide}>
                <BsArrowLeft />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
