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
      'selected': '#00000',
      'border': '#717b92'
    },
    screens: {
      'mobile': '600px',
      'tablet': '930px',
      'desktop': '1280px'
    },
    extend: {},
  },
  plugins: [],
}