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
        outlineGray: 'rgb(43,43,43)',
        customOffWhite: '#c9c9c9',
        customEmerald: '#009B77',
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'sm': '700px', // Custom media query for min-width: 700px
        'customMd': '900px', // custom media query for 900px
        'customXL': '1364px', // custom xl mq for vertical line
        'customXXL': '1600px',
        'customXS': '541px',
      },
    },
  },
  plugins: [],
};
