import React, { useState } from "react";

const Carrusel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="controls-carousel" className="relative w-full overflow-hidden ">
      <div className="relative h-60 sm:h-56">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div>
              <img
                src={image}
                className="absolute w-full h-full object-cover top-0 left-0"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/65 via-black/30 via-10% to-transparent to-70% pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black/65 via-black/30 via-10% to-transparent to-70% pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 flex items-center justify-center h-10 w-10 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
        data-carousel-prev
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 flex items-center justify-center h-10 w-10 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
        data-carousel-next
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
