/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#0F172A",     // Navy Dark
    secondary: "#1E293B",   // Slate
    accent: "#F97316",      // Orange
    light: "#F8FAFC",       // Soft white
  },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};