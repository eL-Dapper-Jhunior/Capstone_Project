/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1e3a8a", // Custom blue from your design
        secondaryBlue: "#2563eb",
        lightBlue: "#93c5fd",
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(-90deg,rgb(5, 32, 105),rgb(58, 91, 164))",
      },
    },
  },
  plugins: [],
}