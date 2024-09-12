import React, { useState } from "react";
import perfil from "../../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
//redes
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import TextEffect from "../TextEffect";

const Home = () => {
  const email = "emanuel.mario.chusgo.santos@gmail.com";
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 700);
  };
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
      className="pt-24 pb-5 sm:pb-20 w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-start justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full flex-grow md:basis-3/5">
          <h2 className="text-4xl text-center  sm:text-7xl sm:text-left  md:mt-4 md:text-5xl font-bold text-white pb-5">
            {/*    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {`Hola!! Mi nombre es Emanuel, `}
            </span> */}
            <TextEffect text="Hola!! Mi nombre es Emanuel," speed={80} />
            Soy Desarrollador de Software
          </h2>

          <div className="inline-flex mx-auto sm:mx-0 justify-center items-center bg-green-900 rounded-full px-4 text-green-200 py-0.5 w-60">
            <FaCheckCircle />
            <span className="text-green-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:text-green-300 ">
              Disponible para trabajar
            </span>
          </div>

          <p className="text-gray-400 pt-5 pb-6 max-w-md md:text-lg">
            Mi nombre completo es{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Emanuel Mario Chusgo Santos
            </span>
            , un desarrollador de software apasionado por crear soluciones
            eficientes, garantizando siempre la seguridad. Me inclino por el
            desarrollo del lado del servidor, pero tambien afinidad por el lado
            del cliente.
          </p>

          <div className="flex items-center space-x-2   h-6">
            <span className="text-sm md:text-lg  font-medium px-2 py-0.5 rounded bg-gray-800 text-slate-400 border border-slate-400 h-full flex items-center">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <button
              onClick={copyToClipboard}
              className="bg-gray-800 text-slate-400 font-medium px-2 py-0.5 rounded hover:bg-gray-700 border border-slate-400 h-full flex items-center"
            >
              <IoCopyOutline />
            </button>
          </div>
          <div className="flex pt-2 justify-center sm:justify-start">
            {showAlert && <p className="text-sm block">Copiado 👌</p>}
          </div>
          <div>
            <div className="flex space-x-4 my-4 py-1  text-2xl pb-5 pl-3 hover:shadow-sm text-slate-400 ">
              <a
                href="https://wa.link/90qbef"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white "
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/emanuel-mario-chusgo-santos-93189b161"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white "
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/emanuel_162_/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white "
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/emanuel.chusgosantos/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white "
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/Ema-42"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white "
              >
                <FaGithub />
              </a>
            </div>

            <button
              className=" group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer "
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
        <div className=" md:basis-2/5">
          <img
            src={perfil}
            alt="me"
            className="mx-auto  pt-8  w-2/3 md:w-full   duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
