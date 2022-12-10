/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins",
      },
      maxWidth: {
        tablet: "768px",
      },
      screens: {
        tablet: "768px",
      },
      colors: {
        dark: {
          primary: "#15202B",
          secondary: "#192734",
          accent: "#22303C",
          "primary-text": "#F9FAFB",
          "secondary-text": "#8899A6",
        },
        light: {
          primary: "#F9FAFB",
          secondary: "#475569",
          accent: "#D4D4D4",
          card: "#E2E8F0",
          "primary-text": "#111827",
          "secondary-text": "#64748B",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
