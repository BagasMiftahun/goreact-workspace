const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '40px' }],
        h2: ['32px', { lineHeight: '32px' }],
        h3: ['30px', { lineHeight: '32px' }],
        h4: ['26px', { lineHeight: '24px' }],
        h5: ['22px', { lineHeight: '24px' }],
        h6: ['20px', { lineHeight: '24px' }],
        body: ['17px', { lineHeight: '16px' }],
        paragraph: ['15px', { lineHeight: '16px' }],
        subtitle: ['13px', { lineHeight: '16px' }],
        caption: ['12px', { lineHeight: '8px' }],
        label: ['12px', { lineHeight: '8px', textTransform: 'uppercase' }],
      },
      colors: {
        basic: {
          100: '#FFFFFF',
          200: '#F9FBFD',
          300: '#EFF4FA',
          400: '#E4E9F2',
          500: '#C5CEE0',
          600: '#8F9BB3',
          700: '#2E3A59',
          800: '#222B45',
          900: '#1A2138',
          1000: '#151A30',
          1100: '#101426',
        },
        primary: {
          100: '#FFCFD8',
          200: '#FF8BA1',
          300: '#FF6F8A',
          400: '#FF5072',
          500: '#FF2D55',
          600: '#E0274A',
          700: '#C1213F',
          800: '#9E1B33',
          900: '#781427',
        },
      },
    },
  },
  plugins: [],
};
