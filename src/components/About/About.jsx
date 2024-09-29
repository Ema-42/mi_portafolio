import React from "react";

const About = () => {
  return (
    <div
      name="acerca de mi"
      className="w-full  bg-gradient-to-b from-gray-800 to-gray-800 text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Acerca de mi
          </p>
        </div>
        <p className="mt-10">
          Soy Emanuel, un desarrollador apasionado por crear soluciones
          eficientes y escalables. Me enfoco en diseñar y mantener aplicaciones
          robustas con un enfoque en la calidad y el rendimiento. Aquí
          encontrarás algunos de mis proyectos y mi inforación de contacto.
          ¡Explora y conoce más sobre mi!
        </p>
      </div>
    </div>
  );
};

export default About;
