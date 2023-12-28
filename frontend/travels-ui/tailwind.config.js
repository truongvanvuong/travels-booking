/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff7e01",
        secondaryColor: "#faa935",
        headingColor: "#0b2727",
        textColor: "#6e7074",
      },
      fontFamily: {
        fontBody: ["Montserrat", "sans-serif"],
        subtitleFontName: ["Island Moments", "cursive"],
      },
      boxShadow: {
        "3xl": "0 3px 6px rgba(0,0,0,.16)",
      },
    },
  },
  plugins: [],
};
