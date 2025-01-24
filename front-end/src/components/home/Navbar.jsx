import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [language, setLanguage] = useState("FR");

  const hoverSound = new Audio("../../../assets/90s-game-ui-6-185099.mp3");
  const clickSound = new Audio("../../../assets/click-click-2-38215.mp3");

  // Fonctions pour jouer le son
  const playHoverSound = () => {
    hoverSound.currentTime = 0; // Remet le son au début
    hoverSound.play();
  };

  const playClickSound = () => {
    clickSound.currentTime = 0; // Remet le son au début
    clickSound.play();
  };


  // Contenu multilingue
  const content = {
    FR: {
      accueil: "ACCUEIL",
      apropos: "À PROPOS",
      competences: "COMPÉTENCES",
      travail: "MON TRAVAIL",
      contact: "CONTACT",
      cv: "MON CV",
      menu: "MENU",
    },
    EN: {
      accueil: "HOME",
      apropos: "ABOUT",
      competences: "SKILLS",
      travail: "MY WORK",
      contact: "CONTACT",
      cv: "MY CV",
      menu: "MENU",
    },
  };

  return (
    <>
      {/* Navbar pour Desktop */}
      <nav
      onMouseEnter={() => {
        setIsOpen(true);
        playHoverSound();
      }}
      onMouseLeave={() => setIsOpen(false)}
      onClick={playClickSound}
      className={`hidden md:flex fixed left-0 top-0 h-[100vh] w-16 flex-col justify-between py-8 transition-all duration-500 ease-in-out ${
        isOpen ? "w-64 bg-beigeMarron" : "bg-transparent"
      }`}
    >
        {/* Picto MENU */}
        <div
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform duration-500 ${
            isOpen ? "rotate-180 text-white" : "text-beigeMarron"
          }`}
        >
          <FontAwesomeIcon icon={faShareAlt} className="w-8 h-8" />
          <span
            className={`mt-2 text-xs font-pfTempesta transition-all duration-500 ${
              isOpen ? "text-white" : "text-beigeMarron"
            }`}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)"  }}
          >
            {content[language].menu}
          </span>
        </div>

        <a href="/" className="ml-2">
            <img
              src="../../../public/pixelpanda.png"
              alt="Logo Sounyatje Patatje"
              className="w-20 h-20 object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
            /> </a>

        {/* Boutons de langue */}
        {isOpen && (
        <div className="absolute top-6 right-4 flex space-x-2">
          <button
            onMouseEnter={playHoverSound} // Son au hover
            onClick={() => {
              playClickSound(); // Son au clic
              setLanguage("FR"); // Change la langue
            }}
            className={`px-2 py-1 text-xs rounded font-pfTempesta ${
              language === "FR"
                ? "bg-beigeInter text-white"
                : "bg-white text-beigeMarron hover:bg-beigeMarron hover:text-white"
            }`}
          >
            FR
          </button>
          <button
            onMouseEnter={playHoverSound} // Son au hover
            onClick={() => {
              playClickSound(); // Son au clic
              setLanguage("EN"); // Change la langue
            }}
            className={`px-2 py-1 text-xs rounded font-pfTempesta ${
              language === "EN"
                ? "bg-beigeInter text-white"
                : "bg-white text-beigeMarron hover:bg-beigeMarron hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      )}

        {/* Liens de Navigation */}
        {isOpen && (
          <div className="flex flex-col space-y-6 absolute top-20 left-6 mt-14">
            <a
              href="#accueil"
              className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair transition duration-300"  onMouseEnter={playHoverSound} // Son au hover
              onClick={playClickSound} // Son au click
            >
              {content[language].accueil}
            </a>
            <a
              href="#apropos"
              className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair transition duration-300"  onMouseEnter={playHoverSound} // Son au hover
              onClick={playClickSound} // Son au click
            >
              {content[language].apropos}
            </a>
            <ScrollLink
              to="competences"
              smooth={true}
              duration={500}
              offset={-50} // Ajustez en fonction de la hauteur de votre Navbar
              className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair transition duration-300 cursor-pointer"
              onClick={() => {
                setIsOpen(false); // Fermer le menu après clic
              }}
            >
              {content[language].competences}
            </ScrollLink>
            <a
              href="#travail"
              className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair transition duration-300"  onMouseEnter={playHoverSound} // Son au hover
              onClick={playClickSound} // Son au click
            >
              {content[language].travail}
            </a>
            <a
              href="#contact"
              className="text-lg font-pfTempesta font-medium text-white hover:text-beigeClair transition duration-300"  onMouseEnter={playHoverSound} // Son au hover
              onClick={playClickSound} // Son au click
            >
              {content[language].contact}
            </a>
          </div>
        )}
      </nav>

    
      <div className="md:hidden fixed top-4 w-full z-50 flex items-center justify-between px-2">
  {/* Logo Panda (aligné complètement à gauche) */}
  <img
    src="../../../public/pixelpanda.png"
    alt="Logo Panda"
    className="w-20 h-20 object-contain"
  />

  {/* Bouton Menu avec animation */}
  <div
    onClick={() => setIsMobileOpen(!isMobileOpen)}
    className={`absolute top-4 right-4 transform flex flex-col items-center cursor-pointer transition-transform duration-500 ${
      isMobileOpen ? "rotate-180" : ""
    }`}
  >
    <FontAwesomeIcon
      icon={faShareAlt}
      className={`w-8 h-8 ${
        isMobileOpen ? "text-white" : "text-beigeMarron"
      } transition-colors duration-300`}
    />
    <span
      className={`mt-2 text-xs font-pfTempesta transition-all duration-500 ${
        isMobileOpen ? "text-white" : "text-beigeMarron"
      }`}
      style={{
        writingMode: "vertical-rl",
        transform: isMobileOpen ? "rotate(180deg)" : "rotate(0)",
      }}
    >
      MENU
    </span>
  </div>
</div>

{isMobileOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-40" // Arrière-plan semi-transparent pour l'effet overlay
    onClick={() => setIsMobileOpen(false)} // Ferme le menu lorsqu'on clique en dehors
  >
    <div
      className="fixed top-0 right-0 w-64 h-screen bg-beigeMarron text-white flex flex-col items-start p-8 space-y-6 shadow-lg z-50 transform transition-transform duration-300"
      onClick={(e) => e.stopPropagation()} // Empêche la propagation du clic pour ne pas fermer le menu
    >
      {/* Boutons de langue */}
      <div className="flex space-x-4 mb-4 self-center">
        <button
          onMouseEnter={playHoverSound} // Son au hover
          onClick={() => {
            setLanguage("FR"); // Change la langue
            playClickSound(); // Son au clic
          }}
          className={`px-3 py-1 text-sm rounded font-pfTempesta ${
            language === "FR"
              ? "bg-beigeInter text-white"
              : "bg-white text-beigeMarron hover:bg-beigeMarron hover:text-white"
          }`}
        >
          FR
        </button>
        <button
          onMouseEnter={playHoverSound} // Son au hover
          onClick={() => {
            setLanguage("EN"); // Change la langue
            playClickSound(); // Son au clic
          }}
          className={`px-3 py-1 text-sm rounded font-pfTempesta ${
            language === "EN"
              ? "bg-beigeInter text-white"
              : "bg-white text-beigeMarron hover:bg-beigeMarron hover:text-white"
          }`}
        >
          EN
        </button>
      </div>

      {/* Liens de navigation */}
      <a
        href="#accueil"
        className="text-lg font-pfTempesta font-medium hover:text-beigeClair transition duration-300"
        onMouseEnter={playHoverSound} // Son au hover
        onClick={playClickSound} // Son au click
      >
        {content[language].accueil}
      </a>
      <a
        href="#apropos"
        className="text-lg font-pfTempesta font-medium hover:text-beigeClair transition duration-300"
        onMouseEnter={playHoverSound} // Son au hover
        onClick={playClickSound} // Son au click
      >
        {content[language].apropos}
      </a>
      <a
        href="#competences"
        className="text-lg font-pfTempesta font-medium hover:text-beigeClair transition duration-300"
        onMouseEnter={playHoverSound} // Son au hover
        onClick={playClickSound} // Son au click
      >
        {content[language].competences}
      </a>
      <a
        href="#travail"
        className="text-lg font-pfTempesta font-medium hover:text-beigeClair transition duration-300"
        onMouseEnter={playHoverSound} // Son au hover
        onClick={playClickSound} // Son au click
      >
        {content[language].travail}
      </a>
      <a
        href="#contact"
        className="text-lg font-pfTempesta font-medium hover:text-beigeClair transition duration-300"
        onMouseEnter={playHoverSound} // Son au hover
        onClick={playClickSound} // Son au click
      >
        {content[language].contact}
      </a>
    </div>
  </div>
)}



    </>
  );
};

export default Navbar;
