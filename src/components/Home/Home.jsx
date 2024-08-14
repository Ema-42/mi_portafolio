import React from "react";
import perfil from "../../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
//redes
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
              {`Hola!! Mi nombre es Emanuel `}
            </span>
            Soy Desarrollador de Software
          </h2>
          <p className="text-gray-500 pt-10 pb-5 max-w-md">
            Mi nombre completo es{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Emanuel Mario Chusgo Santos
            </span>
            , un desarrollador de software apasionado por crear soluciones
            eficientes, garantizando siempre la seguridad. Me inclino por el
            desarrollo del lado del servidor, pero tambien afinidad por el lado
            del cliente.
          </p>
          <div>
            <div className="flex space-x-4 my-4 py-2  text-2xl pb-5 pl-3 hover:shadow-sm ">
              <a
                href="https://wa.link/90qbef"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/emanuel-mario-chusgo-santos-93189b161"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/emanuel_162_/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/emanuel.chusgosantos/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-700 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/Ema-42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <button
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer "
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
        <div className="">
          <img
            src={perfil}
            alt="me"
            className="mx-auto  w-5/6 md:w-full   duration-300 hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
