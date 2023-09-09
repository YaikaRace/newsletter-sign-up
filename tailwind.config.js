/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      "l-tomato": "hsl(6, 100%, 72%)",
      "t-tomato": "hsla(4, 100%, 67%, 25%)",
      "d-s-gray": "hsl(234, 29%, 20%)",
      "charcoal-gray": "hsl(235, 18%, 26%)",
      gray: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      body: "'Roboto', sans-serif",
    },
  },
  plugins: [],
};
