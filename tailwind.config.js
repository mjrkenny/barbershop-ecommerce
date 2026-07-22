/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        luxury: {
          black: '#1a1a1a',
          blue: '#0066cc',
          white: '#ffffff',
          grey: '#4a4a4a',
          lightgrey: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
};