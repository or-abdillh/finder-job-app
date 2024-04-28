/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#6272F9',
        'sky-blue': '#6D81FC',
        'pastel-green': '#6ECA97',
        'seafoam-green': '#80CE9F',
        'dark-gray': '#29292B',
        'misty-gray': '#F7F6FC'
      },
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    }
  },
  plugins: []
}
