/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff',
          600: '#009ccc',
          700: '#007599',
          800: '#004e66',
          900: '#002733',
          950: '#001319',
        },
        secondary: {
          50: '#fff8f7',
          100: '#fff1ef',
          200: '#ffe4df',
          300: '#ffd6cf',
          400: '#ffc8bf',
          500: '#ff9a8a',
          600: '#ff7c67',
          700: '#ff5e44',
          800: '#ff4022',
          900: '#ff2200',
          950: '#cc1b00',
        },
        accent: {
          50: '#fffde6',
          100: '#fffbcc',
          200: '#fff799',
          300: '#fff366',
          400: '#ffef33',
          500: '#ffeb00',
          600: '#ccbc00',
          700: '#998d00',
          800: '#665e00',
          900: '#332f00',
          950: '#191800',
        },
        dark: {
          DEFAULT: '#003a54',
          100: '#004b6e',
          200: '#005c87',
          300: '#006da1',
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 58, 84, 0.8), rgba(0, 58, 84, 0.8)), url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
