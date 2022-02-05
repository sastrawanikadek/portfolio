module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    stroke: (theme) => ({
      'gray-700': theme('colors.gray.700'),
      white: theme('colors.white'),
    }),
    fontFamily: {
      montserrat: ['"Montserrat"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('./plugins/tailwindcss/scrollbar')],
};
