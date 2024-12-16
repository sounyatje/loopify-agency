import React from 'react';

export default function HeroContent() {
  return (
    <div className="bg-white flex items-center justify-center" style={{ height: '95vh' }}>
      {/* Conteneur principal avec padding de 20px partout */}
      <div className="flex flex-col lg:flex-row w-full h-full gap-8 p-[20px]">
        
        {/* Section gauche - 1/3 de la largeur */}
        <div className="lg:w-1/3 bg-red-700 flex flex-col justify-center items-center p-6 sm:p-8 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left">
            Data to enrich your online business
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 mb-6 leading-relaxed text-center lg:text-left">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
            Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-md w-full sm:w-auto text-center transition"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:underline text-center w-full sm:w-auto"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Section droite - 2/3 de la largeur */}
        <div className="lg:w-2/3 bg-red-700 h-full flex items-center justify-center rounded-lg shadow-md">
          <img src="../../../public/RECOVER_portfolio-min.gif"></img>
        </div>
      </div>
    </div>
  );
}
