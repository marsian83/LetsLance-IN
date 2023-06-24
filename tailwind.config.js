/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#07507b",
        secondary: "#3e8fad",
        background: "#ffffff",
        foreground: "#ffb08f",
        front: "#1a1a1a",
        back: "#006c93",
      },
      borderRadius: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      transitionDuration: {
        inherit: "inherit",
      },
      zIndex: {
        1: 1,
      },
      content: {
        visible: '" "',
      },
    },
  },
  plugins: [],
};
