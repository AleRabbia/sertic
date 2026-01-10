/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sertic-black': '#000000',
        'sertic-dark': '#575756',
        'sertic-gray': '#686c6c',
        'sertic-celeste' : '#93c3d6',
        'sertic-azul-claro' : '#1474a1',
        'sertic-blue': '#253784',
        'sertic-cyan': '#05ADEE',
        'sertic-light': '#EDEEF0',
        'sertic-orange': '#EC6629',
        'sertic-white': '#FFFFFF',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        marquee: "marquee linear infinite",

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

      }
    },
  },
  plugins: [],
}
