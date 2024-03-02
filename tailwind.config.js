const typographyStyles = require('./typography')
const typographyPlugin = require('@tailwindcss/typography')
const headlessuiPlugin = require('@headlessui/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      '2xs': ['0.8125rem', { lineHeight: '1.5rem' }],
      xs: ['0.875rem', { lineHeight: '1.5rem' }],
      sm: ['1rem', { lineHeight: '1.75rem' }],
      base: ['1.125rem', { lineHeight: '1.75rem' }],
      lg: ['1.25rem', { lineHeight: '1.75rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '4xl': ['3rem', { lineHeight: '1' }],
      '5xl': ['3.75rem', { lineHeight: '1' }],
      '6xl': ['4.5rem', { lineHeight: '1' }],
      '7xl': ['6rem', { lineHeight: '1' }],
      '8xl': ['8rem', { lineHeight: '1' }],
      '9xl': ['9rem', { lineHeight: '1' }]
    },
    typography: typographyStyles,
    extend: {
      fontFamily: {
        robotoFlex: ['Roboto Flex'],
        helvetica: ['Helvetica'],
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
  plugins: [typographyPlugin, headlessuiPlugin],
}
