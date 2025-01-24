/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Inclut les fichiers de ton projet
  theme: {
    extend: {
      fontFamily: {
        happyDance: ['"Happy Dance"', "cursive"], // Police Happy Dance
        pfTempesta: ['"PF Tempesta Five"', "sans-serif"], // Police PF Tempesta Five
      },
      keyframes: {
        darkGlow: {
          "0%, 100%": {
            textShadow: "0 0 5px #c8814c, 0 0 10px #d8a884, 0 0 15px #e8cfbc, 0 0 20px #c8814c",
          },
          "50%": {
            textShadow: "0 0 10px #c8814c, 0 0 20px #d8a884, 0 0 30px #e8cfbc, 0 0 40px #c8814c",
          },
        },
      },
      animation: {
        darkGlow: "darkGlow 1.5s infinite alternate", // Animation text glowing
      },
      colors: {
        beigeMarron: "#c8814c", // Beige marron
        beigeClair: "#e8cfbc", // Beige clair
        beigeInter: "#d8a884", // Couleur intermédiaire
        gris: "#c7c7c7",       // Gris personnalisé
        blanc: "#ffffff",       
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-beigeMarron": {
          "-webkit-text-stroke": "2px #c8814c", // Beige Marron
          color: "transparent",
        },
        ".text-shadow-beigeMarron": {
          textShadow: "0 0 2px #c8814c, 0 0 4px #c8814c", // Effet text-shadow
        },
      });
    }),
  ],
};
