/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
    colors: {
      'discount': '#f32227',
      'grey': '#e5e5e5',
      'orange': '#fca311',
      'old-blue': '#14213d',
    },
    container: {
      padding: {
        
        lg: '2rem',
        xl: '4rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
});
