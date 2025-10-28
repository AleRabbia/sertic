/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta SerTIC
        'sertic-black': '#000000',
        'sertic-dark': '#4D4D4D',
        'sertic-gray': '#686C6C',
        'sertic-blue': '#14739F',
        'sertic-cyan': '#05ADEE',
        'sertic-light': '#EDEEF0',
        'sertic-white': '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}