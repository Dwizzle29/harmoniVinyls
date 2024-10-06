// Carousel.js
import React, { useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 2;
    const newIndex = isFirstSlide ? images.length - 2 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 2 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img
                className="carousel-item-img"
                src={image}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <span
        className="material-symbols-light--keyboard-arrow-left carousel-button prev"
        onClick={goToPrevious}
      ></span>

      <span
        className="material-symbols-light--keyboard-arrow-right carousel-button next"
        onClick={goToNext}
      ></span>
    </div>
  );
};

export default Carousel;
