import preline from 'preline/plugin.js'
import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,js,jsx,ts,tsx,vue}',
    './node_modules/preline/dist/*.js',
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
      }
    }
  },
  plugins: [preline, flowbite]
}
