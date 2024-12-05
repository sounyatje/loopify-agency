/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['MyFont', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};
