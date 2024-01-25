const scrollbarHide = require('tailwind-scrollbar-hide');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#141414', 
        'dark-text': '#FFFF00',  
      },
    },
  },
  
  plugins: [scrollbarHide,"prettier-plugin-tailwindcss"],
};
