/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    colors: {
      "azulsite": "#0575E6",
      "cor-primaria": "#2B2A2A",
      "nutri": "#94E127",
      "white": "#FFFFFF",
      "black": "#000",
      "gradi": "#646464",
      "psi": "#9A54E1",

    },
    extend: {
      backgroundImage: {
        "bgregister": "url('assets/bg-reg.png')",
        "nutriImg": "url('assets/nutricao.png')",
        "bloco1": "url('bloco_1.png')",
        "bloco2": "url('assets/bloco_2.png')",
        "bloco3": "url('assets/bloco_3.png')",
        "sobre": "url('assets/bgsobre.svg')",
        "bglogin": "url('assets/bglogin.png')",
        "bgestrela": "url('assets/estrelas2.jpg')",
      },
      boxShadow: {
        'nutrici': '0 10px 10px 0 rgba(148, 255, 39, 0.7)',
        'psico': '0 10px 10px 0 rgba(168, 159, 213, 1)',

      }
    },
  },
  plugins: [],
}

