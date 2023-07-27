/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // midnightGreen: "#014E56",
        // lightCoral: "#F67E7E",
        // ruptureBlue: "#79C8C7",
        // policeBlue: '#2C6269',
        // deepJungleGreen: "#004047",
        // stateGreen: "#012F34",
        // customDarkGreen: "#002529",
        // customOrange: "#E7816B",
        // customBlack: "#333136",
        // customBlackBg: '#1D1C1E',
        // customLightOrange: '#FDF3F0',
        customBlack: '#181717',
        customWhite: '#fdfdfd',
        customGray: '#868686',
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
