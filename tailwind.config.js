import colors from './theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      animation: {
        'charging': 'pulse 1s ease-out infinite, ping 2s ease-out infinite',
      }
    }
  },
  plugins: [],
}