const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

const dashUiLib = plugin(({ addComponents, theme }) => {
  addComponents({
    '*': {
      transition: 'all 0.2s ease-in-out',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6ff',
          100: '#e4dcfd',
          200: '#ccbdfb',
          300: '#af97f9',
          400: '#9e81f8',
          500: '#8665ed',
          600: '#7155c8',
          700: '#5b44a1',
          800: '#4d3a88',
          900: '#382a62',
        },
      },
    },
  },
  plugins: [],
  plugins: [dashUiLib],
};
