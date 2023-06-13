/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { blue: "#0496ff", purple: "#6369d1", green: "#61e786" },
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        secondary: "10px 10px 20px rgba(2, 2, 2, 0.25)",
      },
    },
  },
  plugins: [],
};
