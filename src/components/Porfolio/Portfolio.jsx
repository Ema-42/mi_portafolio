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
import appTodo1 from "../../assets/portafolio/appTodo1.png";
import appTodo2 from "../../assets/portafolio/appTodo2.png";
import appTodo3 from "../../assets/portafolio/appTodo3.png";
import appTodo4 from "../../assets/portafolio/appTodo4.png";
import appTodo5 from "../../assets/portafolio/appTodo5.png";
import appPOS1 from "../../assets/portafolio/1.png";
import appPOS2 from "../../assets/portafolio/2.png";
import appPOS3 from "../../assets/portafolio/3.png";
import appPOS4 from "../../assets/portafolio/4.png";
import appPOS5 from "../../assets/portafolio/5.png";
import appPOS6 from "../../assets/portafolio/6.png";
import appPOS7 from "../../assets/portafolio/7.png";
import appPOS8 from "../../assets/portafolio/8.png";
import appQR from "../../assets/portafolio/appQR.png";
import appQR2 from "../../assets/portafolio/appQR2.png";
import appQR3 from "../../assets/portafolio/appQR3.png";
import appQR4 from "../../assets/portafolio/appQR4.png";
import appQR5 from "../../assets/portafolio/appQR5.png";
import appQR6 from "../../assets/portafolio/appQR6.png";
import appQR7 from "../../assets/portafolio/appQR7.png";
import appCuaderno from "../../assets/portafolio/appMiCuaderno.png";
import appCuaderno2 from "../../assets/portafolio/appMiCuaderno2.png";
import appCuaderno3 from "../../assets/portafolio/appMiCuaderno3.png";
import appCuaderno4 from "../../assets/portafolio/appMiCuaderno4.png";
import appCuaderno5 from "../../assets/portafolio/appMiCuaderno5.png";
import appCuaderno6 from "../../assets/portafolio/appMiCuaderno6.png";
import appCuaderno7 from "../../assets/portafolio/appMiCuaderno7.png";
import appCuaderno8 from "../../assets/portafolio/appMiCuaderno8.png";
import appCuaderno9 from "../../assets/portafolio/appMiCuaderno9.png";

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
      src: appPortafolio,
      images: [appPortafolio, appImage, appPortafolio2],
      repositorio: "https://github.com/Ema-42/mi_portafolio",
      web: "https://emanuel-chusgo.netlify.app/",
      name: "Mi portafolio",
      tools: ["Javascript", "React", "TailWInd"],
      resume:
        "Página Web donde se encuentra plasmado mis conocimientos y proyectos.",
    },
    {
      id: 10,
      src: appTodo1,
      images: [appTodo1, appTodo2, appTodo3, appTodo4, appTodo5],
      repositorio: "https://github.com/Ema-42/todo-app-back-nest",
      web: "https://todo-app-auth-emanuel.netlify.app/",
      name: "Todo App",
      tools: ["TypeScript", "React", "TailWInd", "NextJs"],
      resume:
        "Aplicacion de tareas, gestiona todas tus tareas. Autenticacion de usuario y roles (crea y gestiona usuarios)",
    },
    {
      id: 11,
      src: appPOS1,
      images: [
        appPOS1,
        appPOS2,
        appPOS3,
        appPOS4,
        appPOS5,
        appPOS6,
        appPOS7,
        appPOS8,
      ],
      repositorio: "https://github.com/Ema-42/punto_de_ventas_app_electron",
      web: null,
      name: "Sistema POS - Local de Comida",
      tools: ["TypeScript", "Electron", "TailWInd", "Vue", "SQLite"],
      resume:
        "Sistema POS para gestionar ventas (con impresion de tickets), inventarios y pedidos en locales de comida.",
    },
    {
      id: 12,
      src: appCuaderno,
      images: [
        appCuaderno,
        appCuaderno2,
        appCuaderno3,
        appCuaderno4,
        appCuaderno5,
        appCuaderno6,
        appCuaderno7,
        appCuaderno8,
        appCuaderno9,
      ],
      repositorio: "https://github.com/Ema-42/teamboard-client",
      web: "https://teamboard-client.vercel.app/login",
      name: "App tablero de actividades de equipo",
      tools: [
        "TypeScript",
        "React",
        "TailWInd",
        "Nestjs",
        "Postgresql",
        "OAuth",
        "WebSockets",
      ],
      resume:
        "Aplicación de tableros colaborativos con OAuth Google, gestion de tableros y miembros integrantes.",
    },
    {
      id: 13,
      src: appQR,
      images: [appQR, appQR2, appQR3, appQR4, appQR5, appQR6, appQR7],
      repositorio: "https://github.com/Ema-42/generador-qr-front",
      web: "https://generador-qr-front.vercel.app",
      name: "App generador de QR con seguimiento",
      tools: ["React", "TailWInd", "Nestjs", "Postgresql", "Vite"],
      resume:
        "Aplicación de generación de códigos QR con seguimiento de escaneos y estadísticas.",
    },
  ];

  return (
    <div
      name="portafolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">Aquí hay algunos de mis proyectos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 sm:px-0">
          {my_projects.map(
            ({ id, src, repositorio, name, tools, resume, images, web }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-700 rounded-lg bg-[#151C25] flex flex-col justify-between h-full"
              >
                <div>
                  <CarruselPortafolio images={images} />
                </div>

                <div className=" flex justify-center items-center pt-4 text-sm">
                  <div className="flex flex-wrap justify-center gap-2">
                    {tools.map((item, index) => (
                      <p
                        key={index}
                        className="text-gray-300 bg-gray-700 px-2 rounded-full flex cursor-pointer hover:bg-gray-200 hover:text-gray-800"
                      >
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

                <div className="flex items-center justify-center">
                  <a
                    href={web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-3 py-1.5 m-4 text-center duration-200 border-2 rounded-md border-violet-500 hover:rounded-md hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-400 cursor-pointer"
                  >
                    Web
                  </a>
                  <a
                    href={repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-3 py-1.5 m-4 duration-200 border-2 rounded-md border-slate-500 hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-500 cursor-pointer text-center"
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
