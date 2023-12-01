/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'heroBg': 'url(./assets/img/elchalten3.avif)',
        'smartBg': 'url(./assets/img/smart.avif)',
        'smartBg2': 'url(./assets/img/smartBg.avif)',
        'aboutBg2': 'url(./assets/img/letras.avif)',
        'wavesBg': 'url(./assets/img/waves.avif)',
        'paintBg': 'url(./assets/img/orange.png)',


      }
    },
    screens:{
      xxxl: { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xxl: { max: "1300px" },
    // => @media (max-width: 1300px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "820px" },
    // => @media (max-width: 767px) { ... }

    mds: { max: "768px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "280px" },
    // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

