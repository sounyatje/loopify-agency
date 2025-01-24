import React, { useEffect, useState } from "react";
import "./panda.scss";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Appelle la fonction pour passer au site
          return 100;
        }
        return prev + 2; // Incrémente la progression
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="pandas">
          {/* Animation des pandas */}
          <div className="panda-animation" />
        </div>
        <div className="loading-bar-wrapper">
          {/* Jauge pixelisée */}
          <div className="loading-bar">
            <div className="progress" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <p className="loading-text">Chargement... {progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
