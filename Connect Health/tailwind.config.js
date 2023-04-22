/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "cor-primaria": "#2B2A2A",
      "nutri": "#94E127",
      "white": "#FFFFFF",
      "gradi": "#646464",
      "gradi2": "#2B2A2A"

    },
    extend: {
      backgroundImage: {
        "nutriImg": "url('assets/nutricao.png')",
      }
    },
  },
  plugins: [],
}

