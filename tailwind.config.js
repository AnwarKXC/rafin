/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prim": "#146aff",
      },
},
    fontFamily: {
      arabic: [ 'IBM Plex Sans Arabic', 'sans-serif' ]
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}