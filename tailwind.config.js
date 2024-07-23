/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'snow-pattern': "url('blue-snow.png')",
      }
    },
  },
  plugins: [],
}

