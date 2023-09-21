/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Project/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'cbg': 'rgba(84, 84, 212, 0.10)',
        'cbgr':'rgba(240, 64, 55, 0.10)',
        'cbgy': 'rgba(254, 220, 90, 0.10)',
        'cbgg': 'rgba(30, 30, 32, 0.50)',
      },
      textColor: {
        'custom': 'rgba(255, 255, 255, 0.70)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'graphik': ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

