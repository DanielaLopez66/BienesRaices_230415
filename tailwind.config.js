/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors:{
        negro:'#000000',
        rosa:'#FB9BEB',
        verde:'#BCFFF0',
        morado:'#D0B0FF',
        amarillo:'#FFFFC9',
        rojo:'#960018',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeOut:'fadeOut 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' }
        },
        fadeOut:{
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }

        }
      }
    },
  },
  plugins: [],
}