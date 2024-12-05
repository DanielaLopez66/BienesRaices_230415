/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentcolor',
        
        // Colores base
        negro: '#000000',
        blush: '#EA638C',
        blanco: '#FFFFFF',
        thistle: '#E2CFEA',
        skyBlue: '#8ACDEA',
        rojo: '#960018',

        // Intensidades de SkyBlue
        'skyBlue-50': '#E4F4FB',
        'skyBlue-100': '#B8E0F7',
        'skyBlue-200': '#8ACDEA',
        'skyBlue-300': '#5DB9D6',
        'skyBlue-400': '#3F98B4',
        'skyBlue-500': '#2D7A94',
        'skyBlue-600': '#226479',
        'skyBlue-700': '#1A4F63',
        'skyBlue-800': '#123F4F',
        'skyBlue-900': '#0C2F3C',

        // Intensidades de blush
        'blush-50': '#F1A6C4',
        'blush-100': '#EA638C',
        'blush-200': '#E03D6F',
        'blush-300': '#D72A56',
        'blush-400': '#C91F47',

        // Intensidades de thistle
        'thistle-50': '#F0E9F6',
        'thistle-100': '#E2CFEA',
        'thistle-200': '#D4AEE1',
        'thistle-300': '#C48FDD',
        'thistle-400': '#B070D9',

        // Intensidades de rojo
        'rojo-50': '#F7D1D4',
        'rojo-100': '#960018',
        'rojo-200': '#7A0014',
        'rojo-300': '#620012',
        'rojo-400': '#4B000F',
      },

      backgroundImage: {
        'skyBlue-to-thistle': 'linear-gradient(to right, #8ACDEA, #E2CFEA)',
        'thistle-to-blush': 'linear-gradient(to right, #E2CFEA, #EA638C)',
        'blush-to-rojo': 'linear-gradient(to right, #EA638C, #960018)',
        'skyBlue-to-rojo': 'linear-gradient(to right, #8ACDEA, #960018)',
        'skyBlue-to-blush-to-rojo': 'linear-gradient(to right, #8ACDEA, #EA638C, #960018)',
      }
    },
  },
  plugins: [],
}
