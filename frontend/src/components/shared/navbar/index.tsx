import { useState } from "react";
import { ConnectionPortfolio } from "../../structure";
import logo_navBar from "../../../assets/logo_navbar.png";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black shadow-lg w-full z-10 mb-200">
      <div className="w-full mx-auto px-10 sm:px-7 lg:px-44">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 flex">
              <img src={logo_navBar} className="w-[70px] mt-4" />
              <p className="text-white mt-8 ">DataSphare</p>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-center">
                <div className="md:w-2/3">
                  {/* <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    value="Jane Doe"
                  /> */}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="text-white text-base hover:text-slate-400 m-2 transition-colors">
                  Inicio
                </button>
                <button className="text-white text-base hover:text-slate-400 m-2 transition-colors">
                  Catalago
                </button>
                <ConnectionPortfolio />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2  pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <div className="w-full">
              <div className="flex flex-col ">
                <button className="text-white text-base hover:text-slate-400 m-2 transition-colors">
                  Inicio
                </button>
                <button className="text-white text-base hover:text-slate-400 m-2 transition-colors">
                  Catalago
                </button>
                <div className="w-full flex justify-center">
                  <ConnectionPortfolio />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
