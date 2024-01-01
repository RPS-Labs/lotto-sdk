/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const FONT_FAMILY = 'Quicksand';
const BODY_FONT_FAMILY = 'Inter';
const MONO_FONT_FAMILY = 'ui-monospace';
module.exports = {
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-mode="dark"]', 'html[class~="dark"]'],
  theme: {
    fontFamily: {
      sans: [`"${BODY_FONT_FAMILY}"`, ...defaultTheme.fontFamily.sans],
      headings: [`"${FONT_FAMILY}"`, ...defaultTheme.fontFamily.sans],
      mono: [`"${MONO_FONT_FAMILY}"`, ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
