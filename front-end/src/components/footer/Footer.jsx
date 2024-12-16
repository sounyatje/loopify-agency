import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-14 bg-lime-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
<a href="/" className="flex justify-center items-center mb-8">
  <img
    src="../../../public/pandalogo.png"
    alt="Logo Sounyatje Patatje"
    className="w-10 h-10 object-contain"
  />
  <span className="text-2xl font-semibold font-loopify ml-2">
    Sounyatje Patatje
  </span>
</a>


          {/* Réseaux sociaux */}
          <div className="flex space-x-8 justify-center items-center mb-8">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.502 2.502 0 010 3.5C0 2.12 1.12 1 2.5 1S5 2.12 5 3.5zM0 24V7h5v17H0zm7-17h5v2.53c.69-1.22 2.4-2.53 4.49-2.53C21.77 7 24 9.29 24 13.57V24h-5V14.11c0-2.33-1.26-3.61-3.14-3.61-1.88 0-2.86 1.34-2.86 3.61V24H7V7z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.234c-3.338.724-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.493.996.107-.776.42-1.303.762-1.603-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.047.138 3 .405 2.291-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.478 5.922.43.37.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 22.092 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.948 4.948 0 002.165-2.723 9.868 9.868 0 01-3.127 1.184 4.92 4.92 0 00-8.379 4.482A13.94 13.94 0 011.671 3.15a4.822 4.822 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.937 4.937 0 004.604 3.417A9.869 9.869 0 010 19.54a13.955 13.955 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.43 0-.219-.004-.436-.014-.653A10.243 10.243 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* Ligne horizontale */}
          <hr className="border-gray-400 mb-8" />

          {/* Copyright */}
          <span className="text-lg text-gray-200">
            © 2024 <a href="/" className="hover:text-indigo-400">Sounyatje Patatje</a>. Made with ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


