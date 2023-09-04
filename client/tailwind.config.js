/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Send Flowers', 'sans'], // 'custom' is the class name you'll use
      },
    },
  },
  plugins: [],
}