/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "576px",
      // => @media (min-width: 576px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('src/assets/images/hero.png')",
      },
      colors: {
        primary: "#dd2476",
        secondary: "#fa5252",
      },
    },
    fontFamily: {
      roboto: "'Roboto', sans-serif;",
      open_sans: "'Open Sans', sans-serif",
    },
  },
  plugins: [],
};
