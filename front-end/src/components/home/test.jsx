import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons"; // Import du picto MENU

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`fixed left-0 top-0 h-screen w-16 flex flex-col justify-between py-8 transition-all duration-500 ease-in-out ${
        isOpen ? "w-64 bg-beigeInter" : "bg-white"
      }`}
    >
      {/* Bouton Langues FR/EN */}
      <div
        className={`absolute top-6 right-4 flex space-x-1 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <button className="bg-beigeMarron text-white px-2 py-1 text-xs rounded font-pfTempesta  hover:bg-beigeInter">
          FR
        </button>
        <button className="bg-beigeInter text-white px-2 py-1 text-xs rounded font-pfTempesta  hover:bg-beigeMarron hover:text-white">
          EN
        </button>
      </div>

      {/* Picto MENU */}
      <div
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform duration-500 font-pfTempesta  ${
          isOpen ? "rotate-180 text-beigeMarron" : "text-beigeMarron"
        }`}
      >
        <FontAwesomeIcon icon={faShareAlt} className="w-8 h-8" />
        <span
          className={`mt-2 text-xs font-bold transition-colors duration-500 ${
            isOpen ? "text-white" : "text-beigeMarron"
          }`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          MENU
        </span>
      </div>

      {/* Liens de Navigation alignés à gauche */}
      <div
        className={`flex flex-col space-y-6 absolute top-20 left-6 transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a href="#accueil" className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow">
          ACCUEIL
        </a>
        <a href="#apropos" className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow">
          À PROPOS
        </a>
        <a href="#competences" className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow">
          COMPÉTENCES
        </a>
        <a href="#travail" className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow">
          MON TRAVAIL
        </a>
        <a href="#contact" className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow">
          CONTACT
        </a>
        <a
          href="#cv"
          className="flex items-center text-lg font-pfTempesta font-medium text-white hover:text-beigeClair hover:animate-darkGlow"
        >
          MON CV <span className="ml-2">⬇️</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;