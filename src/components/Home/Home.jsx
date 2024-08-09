import React from "react";
import perfil from "../../assets/photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="  h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl  md:mt-0 md:text-5xl font-bold text-white">
            I'm a Backend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Emanuel, a backend developer passionate about creating
            efficient and scalable solutions. I specialize in server-side
            development but have a strong affinity for the client side, always
            striving for optimal and secure performance.
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer">
              Portfolio
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
          <img src={perfil} alt="me" className="mx-auto w-2/3 md:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
