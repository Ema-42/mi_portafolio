import React from "react";

const Contact = () => {
  return (
    <div
      name="contactarme"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-10"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contactarme
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/blljekmb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Enter your message"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
