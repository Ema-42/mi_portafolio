import React from "react";
import appApi from "../../assets/portafolio/api_app.jpg";
import appProducccion from "../../assets/portafolio/sistema_produccion.jpg";

import appCompras from "../../assets/portafolio/appCompras.jpg";
import appPropina from "../../assets/portafolio/appPropina.jpg";
import appVentas from "../../assets/portafolio/appVentasC.jpg";

const Portfolio = () => {
  const my_projects = [
    {
      id: 1,
      src: appApi,
    },
    {
      id: 2,
      src: appProducccion,
    },
    {
      id: 3,
      src: appCompras,
    },
    {
      id: 4,
      src: appVentas,
    },
    {
      id: 5,
      src: appPropina,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {my_projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 
                hover:scale-105 hover:rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 cursor-pointer">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200
                border-2
                rounded-md border-violet-500 hover:scale-105
                hover:rounded-md hover:border-none
                hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
