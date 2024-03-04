import { join, dirname } from 'path'
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}