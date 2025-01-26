/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: 'Roboto'
      },
      backgroundColor:{
        background: "rgb(15,15,15 )"
      }
    },
  },
  plugins: [],
}

