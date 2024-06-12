/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'grey': '#e5e5e5',
      'orange': '#fca311',
      'old-blue': '#14213d',

    },
    extend: {},
  },
  plugins: [],
});
