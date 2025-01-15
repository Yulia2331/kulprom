/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'beige': '#EAE0C5',
        'orange': '#E67950',
        dark:{
          400: '#97AAA8',
          800: '#212F2F',
        }
      },
      fontFamily: {
        vox: ['VoxRound'], 
        rod: ['RodchenkoC'],
      },
      container: {
        center: true,
        padding: '20px',
      }
    },
  },
  plugins: [],

};
