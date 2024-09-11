/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        'move': 'move 10s infinite ease-in-out',
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25%, 25%)' },
          '50%': { transform: 'translate(50%, 50%)' },
          '75%': { transform: 'translate(75%, 75%)' },
        },
      },
      colors:{
        'custom-purple': '#0a182e',
        'custom-cyan': '#5eebd5'
      },
      fontFamily:{
        sans: ['Poppins, sans-serif'],
        monocraft: ['Monocraft, monospace'],
      }
    },
  },
  plugins: [],
}

