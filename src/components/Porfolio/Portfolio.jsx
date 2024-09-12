import React from "react";
import appApi from "../../assets/portafolio/api_app.jpg";
import appProducccion from "../../assets/portafolio/sistema_produccion.jpg";

import appCompras from "../../assets/portafolio/appCompras.jpg";
import appPropina from "../../assets/portafolio/appPropina.jpg";
import appVentas from "../../assets/portafolio/appVentasC.jpg";
import appTareas from "../../assets/portafolio/appTareas.jpg";
import appTablero from "../../assets/portafolio/appTabero.jpg";
import appImage from "../../assets/portafolio/image.jpg";
import appPortafolio from "../../assets/portafolio/appPortafolio.png";
import appPortafolio2 from "../../assets/portafolio/appPortafolio2.png";
import appAuthUser from "../../assets/portafolio/app_auth-user.jpg";

import CarruselPortafolio from "../Carrusel/CarruselPortafolio";

const Portfolio = () => {
  const my_projects = [
    {
      id: 1,
      src: appApi,
      images: [appApi, appImage, appApi],
      web: "https://react-app-emanuel.netlify.app/",
      repositorio: "https://github.com/Ema-42/app-clima-peliculas-api",
      name: "Aplicación de clima y peliculas (API)",
      tools: ["Javascript", "React", "CSS"],
      resume: "Consulta el clima y películas usando APIs.",
    },
    {
      id: 2,
      src: appProducccion,
      images: [appProducccion, appImage, appProducccion],
      repositorio: "https://github.com/Ema-42/sis_produccion_de_ropa",
      name: "App de producción de ropa",
      tools: ["PHP", "Laravel", "Bootstrap"],
      resume: "Gestiona la producción de prendas de vestir.",
    },
    {
      id: 3,
      src: appCompras,
      images: [appCompras, appImage, appCompras],
      web: "https://emanuel-carrito.netlify.app/",
      repositorio: "https://github.com/Ema-42/carrito_compras_app",
      name: "Aplicación de compras (API)",
      tools: ["Javascript", "React", "CSS"],
      resume: "Carrito de compras con integración API.",
    },
    {
      id: 4,
      src: appVentas,
      images: [appVentas, appImage, appVentas],
      repositorio: "https://github.com/Ema-42/SisRestaurante",
      name: "Aplicación de ventas de un local comercial",
      tools: ["C#"],
      resume: "Sistema de ventas para locales comerciales.",
    },
    {
      id: 5,
      src: appPropina,
      images: [appPropina, appImage, appPropina],
      web: "https://app-propina.netlify.app/",
      repositorio: "https://github.com/Ema-42/split-bill",
      name: "Aplicación para gestionar el pago de propina",
      tools: ["Javascript", "Vue", "CSS"],
      resume: "Calcula y divide la propina fácilmente.",
    },
    {
      id: 6,
      src: appTareas,
      web: "https://app-mis-gestion-tareas.netlify.app/",
      images: [appTareas, appImage, appTareas],
      repositorio: "https://github.com/Ema-42/app-todo",
      name: "Aplicación de tareas",
      tools: ["Javascript", "Vue", "CSS"],
      resume: "Gestiona y organiza tus tareas diarias.",
    },
    {
      id: 7,
      src: appTablero,
      images: [appTablero, appImage, appTablero],
      web: "https://app-tablero-kanban.netlify.app/",
      repositorio: "https://github.com/Ema-42/app-tablero-kanban",
      name: "Aplicación tablero kanban",
      tools: ["Javascript", "Vue", "CSS"],
      resume: "Organiza tareas con un tablero Kanban.",
    },
    {
      id: 8,
      src: appAuthUser,
      web: "https://node-js-user-auth-production.up.railway.app/",
      images: [appAuthUser, appImage, appAuthUser],
      repositorio: "https://github.com/Ema-42/node-js-user-auth",
      name: "Aplicación de autenticacion de usuarios",
      tools: ["Javascript", "JWT", "CSS"],
      resume:
        "Crear usuario y loguerse con un sistema de autenticación de JWT.",
    },
    {
      id: 9,
      src: appAuthUser,
      images: [appPortafolio, appImage, appPortafolio2],
      repositorio: "https://github.com/Ema-42/mi_portafolio",
      web: "https://emanuel-chusgo.netlify.app/",
      name: "Mi portafolio",
      tools: ["Javascript", "React", "TailWInd"],
      resume:
        "Página Web donde se encuentra plasmado mis conocimientos y proyectos.",
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

        <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 sm:px-0  ">
          {my_projects.map(
            ({ id, src, repositorio, name, tools, resume, images, web }) => (
              <div
                key={id}
                className="  shadow-md shadow-gray-700 rounded-lg bg-[#151C25]  flex flex-col justify-between h-full   "
              >
                <div>
                  {/*                 <img
                  src={src}
                  alt=""
                  className="w-full h-40 object-cover rounded-ss-md rounded-se-md duration-200 hover:scale-105"
                /> */}
                  {/*  MI CARRUSEL PROPIO  <Carrusel images={images} /> */}
                  <CarruselPortafolio images={images} />
                </div>

                <div className="  h-10 flex  justify-center items-center  py-6 text-sm ">
                  <div className="flex space-x-2  ">
                    {tools.map((item) => (
                      <p className="text-gray-300  bg-gray-800 px-2  rounded-full flex">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="px-4 pb-6 pt-4 flex-grow">
                  <p className="flex space-x-2 text-violet-500 font-bold text-xl">
                    {name}
                  </p>
                  <p className="text-gray-500 text-sm pt-3">{resume}</p>
                </div>

                <div className="flex items-center justify-center  ">
                  <a
                    href={web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2  px-3 py-1.5 m-4 text-center duration-200  border-2 rounded-md border-violet-500
                 hover:rounded-md hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-400 cursor-pointer"
                  >
                    Web
                  </a>
                  <a
                    href={repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-3 py-1.5 m-4 duration-200
                border-2
                rounded-md border-slate-500 
                hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-500 cursor-pointer text-center"
                  >
                    Código
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
