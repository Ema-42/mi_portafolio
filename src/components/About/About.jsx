import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
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
