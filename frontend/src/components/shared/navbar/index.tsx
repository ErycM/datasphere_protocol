import { useState } from "react";
import { ConnectionPortfolio } from "../../structure";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkNavBarResponsive = `${"text-black"} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold cursor-pointer`;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <button className="text-black text-lg font-bold m-2">Home</button>
              <button className="text-black text-lg font-bold  m-2">
                Catalog
              </button>
            </div>
            <div className="hidden md:block">
              <button className="text-black text-lg font-bold m-2">Home</button>
              <button className="text-black text-lg font-bold  m-2">
                Catalog
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className={linkNavBarResponsive}>Home</button>
            <button className={linkNavBarResponsive}>Catalog</button>
            <ConnectionPortfolio />
          </div>
        </div>
      )}
    </nav>
  );
}
