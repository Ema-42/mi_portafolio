import React from "react";
//code
import js from "../../assets/js.png";
import php from "../../assets/php.png";
import typescript from "../../assets/typescript.png";
import python from "../../assets/python.png";
import css from "../../assets/css.png";
import csharp from "../../assets/csharp.png";
import html from "../../assets/html.png";
//bd
import mysql from "../../assets/mysql.png";
import mongo from "../../assets/mongo.png";
//frameworks
import vuejs from "../../assets/vue.png";
import reactjs from "../../assets/react.png";
import laravel from "../../assets/laravel.png";
import nestjs from "../../assets/nest.png";
//oters
import git from "../../assets/git.png";
import trello from "../../assets/trello.png";
import jira from "../../assets/jira.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";

const Skills = () => {
  const techs = [
    // Code
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: php,
      title: "PHP",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: csharp,
      title: "C#",
      style: "shadow-purple-600",
    },

    // Databases
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },

    // Frameworks
    {
      id: 10,
      src: vuejs,
      title: "Vue.js",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: reactjs,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: nestjs,
      title: "NestJS",
      style: "shadow-red-600",
    },

    // Others
    {
      id: 14,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      src: trello,
      title: "Trello",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: jira,
      title: "Jira",
      style: "shadow-blue-600",
    },
    {
      id: 17,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 18,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div
      name="habilidades"
      className="bg-gradient-to-b from-gray-800 to-black w-full overflow-y-auto pt-10"
    >
      <div className="max-w-screen-lg h-full flex flex-col justify-center w-full p-4 mx-auto text-white">
    
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Habilidades
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
