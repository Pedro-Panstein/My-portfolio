/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackNotPure: "#333333",
        whiteNotPure: "#F0F0F0",
        defaultBackground: "#16181D",
        habilitieBg: "#292C34",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "serif"],
        asap: ["Asap", "serif"],
        "maven-pro": ["Maven Pro", "serif"],
      },
    },
  },
  plugins: [],
};
