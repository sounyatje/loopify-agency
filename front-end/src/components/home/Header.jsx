import React, { useState, useEffect } from 'react';
import './bubbleright.scss';

export default function HeroContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hoverSound = new Audio("../../../assets/90s-game-ui-6-185099.mp3");
  const clickSound = new Audio("../../../assets/click-click-2-38215.mp3");

  const playHoverSound = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="bg-beigeClair flex items-center justify-center" style={{ height: "100vh" }}>
      <div className="flex flex-col lg:flex-row w-4/5 h-full gap-8 p-[20px] lg:ml-auto">
        <div className="relative lg:w-full h-full flex items-center justify-center">
          {isMobile ? (
            /* Contenu Mobile */
            <div className="bubble-speech-mobile">
              <h1 className="title-mobile">Design. Code. Smile. 😊</h1>
              <p className="text-mobile">"I'm a web developer who loves to learn and grow."</p>
              <button className="button-mobile" onClick={playClickSound}>Contact Me</button>
            </div>
          ) : (
            /* Contenu Desktop */
            <div className="bubble-right">
              <h1 className="font-pfTempesta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left text-shadow-beigeMarron">
                Design. Code. Smile. 😊
              </h1>
              <p className="text-sm sm:text-lg text-white mb-6 leading-relaxed text-center lg:text-left italic text-shadow-beigeMarron">
                "I'm a web developer who loves to learn and grow through every project. I enjoy creating interactive,
                modern websites and applications, always focusing on clean and efficient code. Each project is an opportunity
                to improve my skills and turn ideas into something meaningful."
              </p>
              <div className="mt-2 mb-6 text-white text-center font-bold text-shadow-beigeMarron">
                Let's create something amazing together! 🚀
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#"
                  className="bg-beigeMarron hover:bg-beigeInter font-pfTempesta text-white font-semibold px-5 py-2 rounded-md w-full sm:w-auto text-center transition text-shadow-beigeMarron"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  Contact me
                </a>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline text-center w-full sm:w-auto font-pfTempesta text-shadow-beigeMarron"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  Learn more about me →
                </a>
              </div>
            </div>
          )}
    <div className="relative-container">
  <img
    className="animated-gif"
    src="../../../public/RECOVER_portfolio-min.gif"
    alt="Animated GIF"
  />
</div>



        </div>
      </div>
    </div>
  );
}
