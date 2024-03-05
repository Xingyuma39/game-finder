/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // cursor: {
      //   'fancy': 'url(hand.cur), pointer',
      // }
    },
  },
  plugins: [],
}

