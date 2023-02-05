/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "myTeal": "#024059",
        "myCamel": "#BFAEA8",
      },
      backgroundImage: {
        'myGallery1': "url('/gallery/gallery1.png')",
        'error': "url('/error.jpg')"
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
