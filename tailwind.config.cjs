/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        hitam: '#000000',
        biru: '#14213D',
        kuning: '#FCA311',
        abu: '#E5E5E5',
        putih: '#FFFFFF',
      },
      maxwidth: {
        '8xl': '90rem', // 1440px
        '9xl': '100rem', // 1600px
      },
      height: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        '160': '40rem', // 640px
      },
    },
  },
  plugins: [],
});
