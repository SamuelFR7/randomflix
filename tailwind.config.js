/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif'
    },
    colors: {
      white: '#fff',
      transparent: 'transparent',
      button: '#e9e6e3',
      title: '#fffcf9',
      subtitle: '#b3b3b3',
      black: '#000'
    },
    backgroundImage: {
      background: 'linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);'
    }
  },
  plugins: [],
}
