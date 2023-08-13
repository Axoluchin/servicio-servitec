import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0cbccc',
          200: '#2898ee',
          300: '#107acc',
          400: '#15297c',
          500: '#142157',
          600: '#111827',
          700: '#1A2336'
        }
      },
      animation: {
        ['infinite-slider']: 'infiniteSlider 30s linear infinite'
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 5))'
          }
        }
      }
    }
  },
  plugins: [flowbite]
}
