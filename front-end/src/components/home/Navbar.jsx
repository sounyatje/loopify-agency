import React, { useState } from "react";
import AboutDropdown from "./AboutDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-orange">
            <img
              src="../../../public/pandalogo.png"
              alt="Logo Sounyatje Patatje"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#home"
              className="text-lg font-medium hover:text-orange transition duration-300 ease-in-out"
            >
              Home
            </a>
            {/* Intégration du menu déroulant About */}
            <AboutDropdown />
            <a
              href="#project"
              className="text-lg font-medium hover:text-orange transition duration-300 ease-in-out"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-orange transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#home"
            className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 hover:text-orange transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 hover:text-orange transition"
          >
            About
          </a>
          <a
            href="#project"
            className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 hover:text-orange transition"
          >
            Project
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 hover:text-orange transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
