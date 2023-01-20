/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fundo: '#09090a'
      }
    },
    gridTemplateRows: {
      7: 'repeat(7, minmax(0, 1fr))'
    }
  },
  plugins: [],
}


// "./src/pages/**/*.{js,ts,jsx,tsx}",
// "./src/components/**/*.{js,ts,jsx,tsx}"
