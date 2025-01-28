import React, { useState } from "react";
import './AboutMe.css';

const CustomLayout = () => {
  const [confettiState, setConfettiState] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
    div6: false,
  });

  // Fonction pour déclencher l'animation confetti sur un div spécifique
  const handleAnimation = (divKey) => {
    setConfettiState(prevState => ({
      ...prevState,
      [divKey]: true,
    }));

    // Reset de l'animation après 2 secondes
    setTimeout(() => {
      setConfettiState(prevState => ({
        ...prevState,
        [divKey]: false,
      }));
    }, 2000);
  };

  return (
    <div id="apropos" className="h-[110vh] bg-[#e8cfbc] p-20 grid grid-rows-3 grid-cols-4 gap-6">
      {/* Div 1 (menu vertical à gauche) */}
      <div 
        className="row-span-3 col-span-1 relative rounded-lg shadow-lg flex flex-col justify-between overflow-hidden" 
        onClick={() => handleAnimation("div1")}
      >
        <div className="absolute inset-0 bg-[#e8cfbc] opacity-70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('../../public/manga.jpg')",
          }}
        ></div>
        <div className="relative z-20 p-4 flex items-center justify-center h-full">
          <div className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${confettiState.div1 ? "confetti-effect" : ""}`}>
            <p className="text-[#c8814c] font-bold text-center text-xl leading-relaxed">
              One of my hobbies is watching anime. I prefer shonen like Attack on Titan, Death Note, Monster, Tokyo Ghoul and many others, but I also enjoy shojo like Nana and Paradise Kiss.
            </p>
          </div>
        </div>
      </div>
{/* Div 2 (large header en haut) */}
<div 
  className="row-span-1 col-span-2 bg-[#ffeff7] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden" 
  onClick={() => handleAnimation("div2")}
>
  <div className="absolute inset-0 bg-[url('../../public/bouffe.jpg')] bg-cover bg-center opacity-70"></div>
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>
  <div className="relative z-20 p-4 flex items-center justify-center h-full">
    <div className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${confettiState.div2 ? "confetti-effect" : ""}`}>
      <p className="text-[#c8814c] font-bold text-center text-sm leading-relaxed max-w-xs mx-auto">
        My favorite dishes are Lebanese and Greek cuisine. I also enjoy Asian food, but a little less. The foods I always have in my fridge are salmon, avocado, goat cheese, and hummus.
      </p>
    </div>
  </div>
</div>

{/* Div 3 (petit en haut à droite) */}
<div 
  className="row-span-1 col-span-1 bg-[#d6e6ff] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden" 
  onClick={() => handleAnimation("div3")}
>
  <div className="absolute inset-0 bg-[url('../../public/livres.jpg')] bg-cover bg-center opacity-70"></div>
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>
  <div className="relative z-20 p-4 flex items-center justify-center h-full">
    <div className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${confettiState.div3 ? "confetti-effect" : ""}`}>
      <p className="text-[#c8814c] font-bold text-center text-sm leading-relaxed max-w-xs mx-auto">
        I enjoy reading books on personal development and social psychology. I also have a passion for journaling, which helps me reflect and grow.
      </p>
    </div>
  </div>
</div>

{/* Div 4 (large central en bas à gauche) */}
<div 
  className="row-span-2 col-span-2 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between" 
  onClick={() => handleAnimation("div4")}
>
  <div>
    <p className="text-[#c8814c] font-bold text-xs">animation </p>
    <p className="text-xs text-gray-600">animate </p>
  </div>
</div>

{/* Div 5 */}
<div 
  className="row-span-1 col-span-1 bg-[#d6e6ff] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden" 
  onClick={() => handleAnimation("div5")}
>
  <div className="absolute inset-0 bg-[url('../../public/sport.png')] bg-cover bg-center opacity-70"></div>
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>
  <div className="relative z-20 p-4 flex items-center justify-center h-full">
    <div className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${confettiState.div5 ? "confetti-effect" : ""}`}>
      <p className="text-[#c8814c] font-bold text-center text-sm leading-relaxed max-w-xs mx-auto">
        I practice sports regularly, going to the gym and attending group fitness classes. I also enjoy flexibility exercises, and my challenge is to achieve the full split. Wish me luck!
      </p>
    </div>
  </div>
</div>

{/* Div 6 (petit en bas à droite) */}
<div 
  className="row-span-1 col-span-1 bg-[#fff7e6] rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden" 
  onClick={() => handleAnimation("div6")}
>
  <div className="absolute inset-0 bg-[url('../../public/pandacats.png')] bg-cover bg-center opacity-70"></div>
  <div className="absolute inset-0 bg-[#ffefd5] opacity-60"></div>
  <div className="relative z-20 p-4 flex items-center justify-center h-full">
    <div className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${confettiState.div6 ? "confetti-effect" : ""}`}>
      <p className="text-[#c8814c] font-bold text-center text-sm leading-relaxed max-w-xs mx-auto">
        My favorite animals are cats and pandas. One day, I hope to have my own cat. I can watch videos of cats and pandas for hours and never get tired of them!
      </p>
    </div>
  </div>
</div>

</div>
  );
};

export default CustomLayout;

