/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}", // Add html here
    "./script.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['Roboto Mono', 'Courier New', 'monospace']
    },
  },
  plugins: [],
}