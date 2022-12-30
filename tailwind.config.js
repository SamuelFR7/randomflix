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
    fontSize: {
      xsm: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2rem',
      xlg: '4rem'
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
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
