/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default {
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dfedff',
          200: '#b9dbfe',
          300: '#7bbffe',
          400: '#349efc',
          500: '#0a83ed',
          600: '#0065cb',
          700: '#0050a4',
          800: '#054a91',
          900: '#0a3a70',
          950: '#07244a',
        },
      },
    },
  },
}
