/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Essential for manual dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primaryBlue: "#1e3a8a",
        secondaryBlue: "#2563eb", 
        lightBlue: "#93c5fd",
        
        // Dark theme counterparts
        darkPrimary: "#0f172a",
        darkSecondary: "#1e40af",
        darkAccent: "#60a5fa",
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(-90deg, rgb(5, 32, 105), rgb(58, 91, 164))",
        'dark-gradient-bg': "linear-gradient(-90deg, rgb(15, 23, 42), rgb(30, 64, 175))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form element styling
  ],
}