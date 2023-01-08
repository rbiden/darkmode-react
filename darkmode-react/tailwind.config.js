/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light': '#d9d9d9',
      'dark': '#30343f',
      'selected': '#00000'
    },
    screens: {
      'mobile': '400px',
      'tablet': '920px',
      'desktop': '1280px'
    },
    extend: {},
  },
  plugins: [],
}