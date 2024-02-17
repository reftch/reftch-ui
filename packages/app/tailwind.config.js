import { join, dirname } from "path"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    join(dirname(require.resolve('@reftch-ui/ui')), '**/*.{html,ts,js}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
