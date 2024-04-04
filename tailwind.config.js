/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1110px',
        '2xl': '1110px',
      }
    },
    extend: {
      colors : {
        theme1: '#DC211D',
        theme2: '#000',
        theme3: '#8492a6',
        theme4: '#2b3b60',
        theme5: '#3a589d',
        theme6: '#185EC7'

      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
],
}