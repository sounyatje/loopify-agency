/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF8C00', // your custom orange color
      },
      fontFamily: {
        'custom': ['MyFont', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};
