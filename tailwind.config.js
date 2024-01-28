/** @type {import('tailwindcss').Config} */
  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        colors: {
          'bGreen': 'rgb(136, 227, 93)',
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
   