import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      purple: {
        100: '#fcf2ff',
        200: '#f5d8ff',
        300: '#eebdff',
        400: '#e7a3ff',
        500: '#da77fd',
        600: '#cd4bfb',
        700: '#ae42d7',
        800: '#8f38b4',
        900: '#702f90',
      },
      green: {
        100: '#e8fff7',
        200: '#b9ffe8',
        300: '#9affde',
        400: '#00e59b',
        500: '#00c787',
        600: '#009f6c',
        700: '#006646',
        800: '#004c34',
        900: '#002e1f',
      },
      gray: {
        100: '#fff',
        200: '#fafafa',
        250: '#f2f2f2',
        300: '#dcdde0',
        400: '#c9cacf',
        450: '#b6b7be',
        500: '#838592',
        600: '#5d5d6c',
        625: '#434651',
        650: '#363a42',
        700: '#21272b',
        750: '#1e232a',
        800: '#161a1f',
        900: '#06070d',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#4c0d0d'
      },
      black: '#000000', // Black
      white: '#FFFFFF', // White
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config