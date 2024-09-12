"use client";

import { Carousel } from "flowbite-react";

const CarruselPortafolio = ({ images = [] }) => {
  return (
    <div className=" h-60 ">
      <Carousel slide={false}>
        {images.map((image, index) => (
          <img className="w-full h-full object-cover" key={index} src={image} alt="..." />
        ))}
      </Carousel>
    </div>
  );
};

export default CarruselPortafolio;
