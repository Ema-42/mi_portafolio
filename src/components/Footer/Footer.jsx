import React, { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  function getBoliviaTime() {
    const now = new Date();
    const boliviaOffset = -4 * 60; // UTC-4
    const boliviaTime = new Date(
      now.getTime() + (now.getTimezoneOffset() + boliviaOffset) * 60000
    );
    return boliviaTime.toLocaleTimeString("es-BO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Usa formato de 24 horas
    });
  }

  const [time, setTime] = useState(getBoliviaTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getBoliviaTime());
    }, 1000);
  }, []);

  return (
    <footer className="bg-muted md:pb-10 md:pt-10 w-full">
      <div className="container   flex flex-col sm:justify-evenly sm:flex-row">
        <div className="flex flex-col items-center gap-4 pb-8 sm:pb-0 pt-8 sm:pt-0 ">
          <div className="flex flex-col items-center gap-2 bg-primary px-2 py-1 rounded-md text-primary-foreground">
            <p>La hora en mi país</p>
            <div className="flex">
              <GoClock className="h-5 w-5 text-fuchsia-500" />
              <span className="text-sm font-medium ml-2 text-fuchsia-500"> {time}</span>
            </div>
          </div>
          <div className=" flex flex-col ">
            <span
              href="#"
              className="pb-2 text-sm hover:underline"
              prefetch={false}
            >
              Inicio
            </span>
            <span
              href="#"
              className="pb-2 text-sm hover:underline"
              prefetch={false}
            >
              Sobre mí
            </span>
            <span
              href="#"
              className="pb-2 text-sm hover:underline"
              prefetch={false}
            >
              Proyectos
            </span>
            <span
              href="#"
              className="pb-2 text-sm hover:underline"
              prefetch={false}
            >
              Contacto
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pb-8 sm:pb-0">
          <h3 className="text-lg font-semibold">Redes Sociales</h3>
          <div className="flex items-center gap-4">
            <span href="#" target="_blank" prefetch={false}>
              <a
                href="https://www.linkedin.com/in/emanuel-mario-chusgo-santos-93189b161"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedinIn className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </span>
            <span href="#" target="_blank" prefetch={false}>
              <a
                href="https://www.instagram.com/emanuel_162_/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-500 transition duration-300"
              >
                <FaInstagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </span>
            <span href="#" target="_blank" prefetch={false}>
              <a
                href="https://github.com/Ema-42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pb-8 sm:pb-0">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <CiMail className="h-5 w-5 text-muted-foreground" />
              <span href="#" className="text-sm hover:underline">
                emanuel.mario.chusgo.santos@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdCall className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">+591 76821922</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
