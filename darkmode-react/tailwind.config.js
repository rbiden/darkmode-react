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
    screens: {
      'mobile': '640px',
    },
    extend: {},
  },
  plugins: [],
}