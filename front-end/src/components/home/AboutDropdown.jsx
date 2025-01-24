import React, { useState, useRef, useEffect } from "react";

const AboutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Détecter le clic à l'extérieur du menu
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-center" ref={dropdownRef}>
      {/* Bouton principal About */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg font-medium text-beigeClair hover:text-nuanceIntermediaire transition duration-300 ease-in-out"
      >
        About
      </button>
{/* Menu déroulant avec bordure, ombre et largeur élargie */}
{isOpen && (
  <div
    className="absolute mt-2 w-52 bg-beigeMarron text-white rounded-lg shadow-md border border-gray-300 
    right-1/2 transform translate-x-1/2 z-50"
    style={{
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)", // Ombre légèrement renforcée
    }}
  >
    {/* My Resume */}
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center px-4 py-3 hover:bg-nuanceIntermediaire hover:text-beigeClair transition rounded-t-lg text-center"
    >
      <span className="mr-2">📄</span> My Resume
    </a>

    {/* Who Am I */}
    <a
      href="#whoami"
      className="flex justify-center items-center px-4 py-3 hover:bg-nuanceIntermediaire hover:text-beigeClair transition text-center"
    >
      <span className="mr-2">🐼</span> Who Am I?
    </a>

    {/* My GitHub */}
    <a
      href="https://github.com/sounyatje"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center px-4 py-3 hover:bg-nuanceIntermediaire hover:text-beigeClair transition rounded-b-lg text-center"
    >
      <span className="mr-2">💻</span> My GitHub
    </a>
  </div>
)}

    </div>
  );
};

export default AboutDropdown;
