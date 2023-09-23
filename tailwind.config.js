/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Project/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        // => @media (min-width: 576px) { ... }
        
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1200px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateColumns: {
        '3s': 'repeat( auto-fill, minmax(368px, 1fr))',
      },
      backgroundColor: {
        'cbg': 'rgba(84, 84, 212, 0.10)',
        'cbgr':'rgba(240, 64, 55, 0.10)',
        'cbgy': 'rgba(254, 220, 90, 0.10)',
        'cbgg': 'rgba(30, 30, 32, 0.50)',
        'rbg': 'rgba(255, 255, 255, 0.20)',
      },
      textColor: {
        'custom': 'rgba(255, 255, 255, 0.70)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'graphik-bold': ['GraphikBold', 'sans-serif'],
        'primary': ['Poppins'],
      },
    },
  },
  plugins: [],
}

