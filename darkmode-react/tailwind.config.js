/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#d9d9d9',
      'semi-primary': '#495057',
      'secondary': '#ffc300',
      'black': '#30343f',
    },
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}