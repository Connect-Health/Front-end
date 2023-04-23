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
      "black": "#000",
      "gradi": "#646464",
      "gradi2": "#2B2A2A",
      "psi": "#9A54E1",

    },
    extend: {
      backgroundImage: {
        "nutriImg": "url('assets/nutricao.png')",
      },
      boxShadow: {
        'nutrici': '0 10px 10px 0 rgba(148, 255, 39, 0.7)',
        'psico': '0 10px 10px 0 rgba(168, 159, 213, 1)',

      }
    },
  },
  plugins: [],
}

