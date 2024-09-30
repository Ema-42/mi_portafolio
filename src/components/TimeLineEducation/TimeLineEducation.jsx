import React from "react";
import './timeline.css'
const datosEducativos = [
  {
    año: "2012-2017",
    título: "Escuela Secundaria",
    escudo: "/assets/lion.png",
    institución: "Unidad Educativa Club de Leones II",
    descripción: "Complete y adquiri conocimientos educativos de nivel secundario.",
    logros: ["Mejor promedio Bachiller"],
  },
  {
    año: "2018-2024",
    título: "Estudios Universitarios",
    escudo: "/assets/usfx.png",
    institución:
      "Universidad Mayor real y Potificia de San Francisco Xavier de Chuquisaca",
    descripción: "Licenciatura en Ingenieria de Sistemas.",
    logros: [
      "Beca de Auxiliar de Docencia en multiples ocaciones",
      "3er lugar Competencia Huawei ICT",
    ],
    habilidades: [
      "Programación en varios lenguajes",
      "Análisis de datos",
      "Diseño y Analisis de sistemas",
      "Bases de Datos",
      "Gestion de Redes",
    ],
  },
  {
    año: "2023-2024",
    título: "Programa de Diplomado",
    escudo: "/assets/cepi.png",
    institución: "Centro de Estudios de Posgrado e Investigación",
    descripción: "Diplomado en DevOps v1.",
    logros: [
      "Proyecto final Aprobado",
      "Defensa de Proyecto con nota sobresaliente",
    ],
    habilidades: [
      "CI/CD (Integración continua y entrega continua)",
      "Monitorización y logging",
      "Gestión de contenedores con Docker",
    ]
  },
];

export default function TimeLineEducation() {
  return (
    <div className=" mx-auto px-4 py-4  bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Formación Académica
      </h1>
      <div className="relative">
        {/* Línea conectora */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 md:translate-x-0"></div>

        {datosEducativos.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-center md:justify-between"
          >
            {/* Número en la línea */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-0">
              <span className="text-white font-bold">{index + 1}</span>
            </div>

            {/* Tarjeta */}
            <div
              className={ `tarjeta-timeline w-[85%] md:w-5/12 ml-12 md:ml-0 p-4 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-xl ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.escudo}
                  alt={`Escudo de ${item.institución}`}
                  width={80}
                  height={80}
                  className="rounded-full mr-4 hover:scale-125 duration-100"
                />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-xl mb-1 md:mb-0">
                    {item.título}
                  </h3>
                  <h4 className="font-bold text-violet-500 dark:text-violet-400 text-sm">
                    {item.año}
                  </h4>
                  <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 unde">
                    {item.institución}
                  </p>
                </div>
              </div>

              <p className="mb-3 text-md text-gray-600 dark:text-gray-400 underline font-bold">
                {item.descripción}
              </p>
              <div className="grid grid-cols-1  gap-4">
                {item.logros && (
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300">
                      Logros:
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {item.logros.map((logro, i) => (
                        <li key={i}>{logro}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.habilidades && (
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300">
                      Habilidades adquiridas:
                    </h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {item.habilidades?.map((habilidad, i) => (
                        <li key={i}>{habilidad}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {item.actividades && (
                <div className="mt-2">
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300">
                    Actividades destacadas:
                  </h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {item.actividades.map((actividad, i) => (
                      <li key={i}>{actividad}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
