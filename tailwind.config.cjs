/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const castomColors = {
  brown:'#E0BEA2',
  black:'#222222',
  white:'#fff',
  ohr:'#808080'
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: colors.transparent,
     ...castomColors
    },
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem'
      }
    }
  },
  plugins: [],
}