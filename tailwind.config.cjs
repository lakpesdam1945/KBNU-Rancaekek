/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
