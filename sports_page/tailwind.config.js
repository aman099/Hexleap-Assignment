/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // xl: { max: "1279px" },
        // // => @media (max-width: 1279px) { ... }

        lg: { max: "1000px" },
        // => @media (max-width: 1000px) { ... }

        // md: { max: "767px" },
        // // => @media (max-width: 767px) { ... }

        // sm: { max: "639px" },
        // // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
