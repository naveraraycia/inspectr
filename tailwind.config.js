/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        banana: '#F1D14A',
        teal: '#74B5A5',
        darkTeal: '#376262',
        maroon: '#9E5548',
        leaf: '#627E55',
        darkSand: '#EADDBB',
        sand: '#F2EFE5'
      }
    },
    fontFamily: {
      sans: ['Martel Sans', 'sans-serif'],
      serif: ['Signika', 'sans-serif']
    }
  },
  plugins: [],
}
