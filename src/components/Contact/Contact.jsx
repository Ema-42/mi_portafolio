import React from "react";
import messageImg from "../../assets/message.png";
const Contact = () => {
  return (
    <div
      name="contactarme"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-10"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contactarme
          </p>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src={messageImg}
              className="mx-auto h-24 w-auto"
              alt="mensaje"
            />
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Dejame un mensaje
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="https://getform.io/f/blljekmb"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Nombre
                </label>
                <div className="mt-2 ">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 focus:outline-none focus:outline-4 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Correo
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 focus:outline-none sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Mensaje
                </label>
                <div className="mt-2 ">
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    rows="3"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 focus:outline-none focus:outline-4 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer"
                >
                  Enviar
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Me contactare pronto.{" "}
              <span className="font-semibold leading-6 text-fuchsia-500">
                Gracias!!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
