/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackNotPure: "#333333",
        whiteNotPure: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
