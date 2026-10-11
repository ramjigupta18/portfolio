/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        neon: "#b8ff00",
        dark: "#050505",
      },
      boxShadow: {
        neon: "0 0 30px rgba(184,255,0,0.18)",
        card: "0 20px 80px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};