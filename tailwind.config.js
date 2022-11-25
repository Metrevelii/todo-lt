/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkRed: "hsl(337, 100%, 23%)",
        secondDarkRed: "#a50e48",
        brightRedLight: "hsl(12, 88%, 69%)",
        textColorPink: "hsl(337, 92%, 85%)",
        primaryWhite: "#fff",
        textPurple: "hsl(320, 4%, 17%)",
        lightRed: "#ffe2ed",
        lightWhite: "#ccc",
      },
    },
  },
  plugins: [],
};
