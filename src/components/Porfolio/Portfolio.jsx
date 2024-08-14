import React from "react";
import appApi from "../../assets/portafolio/api_app.jpg";
import appProducccion from "../../assets/portafolio/sistema_produccion.jpg";

import appCompras from "../../assets/portafolio/appCompras.jpg";
import appPropina from "../../assets/portafolio/appPropina.jpg";
import appVentas from "../../assets/portafolio/appVentasC.jpg";
import appTareas from "../../assets/portafolio/appTareas.jpg";
import appTablero from "../../assets/portafolio/appTabero.jpg";

//lenguajes

import { FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Portfolio = () => {
  const my_projects = [
    {
      id: 1,
      src: appApi,
      url: "https://github.com/Ema-42/react_practica",
      name: "Aplicación de clima y peliculas (API) ",
    },
    {
      id: 2,
      src: appProducccion,
      url: "https://github.com/Ema-42/sis_produccion_de_ropa",
      name: "App de producción de ropa",
    },
    {
      id: 3,
      src: appCompras,
      ulr: "https://github.com/Ema-42/carrito_compras_app",
      name: "Aplicación de compras (API)",
    },
    {
      id: 4,
      src: appVentas,
      url: "https://github.com/Ema-42/SisRestaurante",
      name: "Aplicación de ventas de un local comercial",
    },
    {
      id: 5,
      src: appPropina,
      url: "https://github.com/Ema-42/split-bill",
      name: "Aplicación para gestionar el pago de propina",
    },
    {
      id: 6,
      src: appTareas,
      url: "https://github.com/Ema-42/app-todo",
      name: "Aplicación de tareas",
    },
    {
      id: 6,
      src: appTablero,
      url: "https://github.com/Ema-42/app-tablero-kanban",
      name: "Aplicación tablero kanban",
    },
  ];
  return (
    <div
      name="portafolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  pt-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">Aquí hay algunos de mis proyectos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {my_projects.map(({ id, src, url, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-80 h-40 object-cover rounded-ss-md rounded-se-md duration-200 hover:scale-105"
              />

              <div className="bg-gray-800 h-10 flex justify-center items-center  space-x-2 py-6">
                <p className="text-3xl flex text-yellow-300">
                  <IoLogoJavascript />
                </p>
                <p className="text-3xl flex  text-emerald-500">
                  <FaVuejs />
                </p>
                <p className="text-3xl flex  text-blue-400">
                  <SiTypescript />
                </p>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="w-1/2  px-3 py-1.5 m-4 duration-200 rounded-md
                 hover:rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 cursor-pointer"
                >
                  Web
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-3 py-1.5 m-4 duration-200
                border-2
                rounded-md border-violet-500 
                hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 cursor-pointer text-center"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
