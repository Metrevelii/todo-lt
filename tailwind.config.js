/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkRed: "hsl(337, 100%, 23%)",
      brightRedLight: "hsl(12, 88%, 69%)",
    },
  },
  plugins: [],
};
