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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Bouton principal About */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg font-medium hover:text-orange transition duration-300 ease-in-out"
      >
        About
      </button>

      {/* Menu déroulant responsive */}
      {isOpen && (
        <div
          className="absolute mt-2 w-40 bg-gray-800 text-white border border-gray-700 
          rounded-lg shadow-lg z-50 right-0 md:right-auto md:left-0"
        >
          {/* My Resume */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-orange transition"
          >
            <span className="mr-2">📄</span> My Resume
          </a>

          {/* Who Am I */}
          <a
            href="#whoami"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-orange transition"
          >
            <span className="mr-2">🐼</span> Who Am I?
          </a>

          {/* My GitHub */}
          <a
            href="https://github.com/sounyatje"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-orange transition"
          >
            <span className="mr-2">💻</span> My GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutDropdown;
