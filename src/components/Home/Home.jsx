import React from "react";
import perfil from "../../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const Home = () => {
  const handleDownload = () => {
    const userConfirmed = window.confirm(
      "¿Deseas descargar el archivo CV_EMANUEL_CHUSGO.pdf?"
    );

    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/CV_EMANUEL__CHUSGO.pdf`;
      link.download = "CV_EMANUEL__CHUSGO.pdf";
      link.click();
    } else {
      console.log("Descarga cancelada");
    }
  };

  return (
    <div
      name="home"
      className="pt-40 pb-20 w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl  md:mt-0 md:text-5xl font-bold text-white pb-5">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {`Hola!! `}
            </span>
            Soy Desarrollador de Software
          </h2>
          <p className="text-gray-500 py-10 max-w-md">
            Mi nombre es{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Emanuel Mario Chusgo Santos</span>, un
            desarrollador de software apasionado por crear soluciones
            eficientes. Me inclino por el desarrollo del lado del servidor, pero
            tengo una fuerte afinidad por el lado del cliente, siempre buscando
            el mejor rendimiento posible, garantizando siempre la seguridad.
          </p>
          <div>
            <button
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer"
              onClick={handleDownload}
            >
              <SiGoogledocs /> <span className="ml-2">Descargar CV</span>
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight
                  size={25}
                  className="ml-1"
                ></MdOutlineKeyboardArrowRight>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={perfil} alt="me" className="mx-auto  w-2/3 md:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
