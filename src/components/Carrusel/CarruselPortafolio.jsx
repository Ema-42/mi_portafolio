"use client";

import { Carousel } from "flowbite-react";

const CarruselPortafolio = ({ images = [] }) => {
  return (
    <div className="h-60 relative">
      <Carousel slide={false}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="..."
            />
 
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent absolute bottom-0 left-0" />
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-transparent absolute left-0 top-0" />
              <div className="w-full h-full bg-gradient-to-l from-black/20 via-transparent to-transparent absolute right-0 top-0" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarruselPortafolio;
