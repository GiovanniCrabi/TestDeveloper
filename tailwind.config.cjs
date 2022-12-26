/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'x-sm': '300px',

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 61%, 84% 100%, 0 100%, 0% 50%)",
      mypolygonImage: 'polygon(25% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 40%)',
      menuHamburguer: 'polygon(0 0, 100% 0%, 100% 100%, 8% 100%)',
      circleRight: 'circle(0% at 50%);',
      circleLeft: 'circle(50% at 0%);'
    },
    letterSpacing: {
      widest: '.2em',
    },
    fontFamily: {
      fontFamily: ['Sora', 'sans-serif']
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'image4': "url('/assets/image-4.png')"
      },
      colors: {
        "white": "#ffffff",

        'yellow.100': '#e8b222',
        'yellow.500': '#d38325',

        'yellow.gradient1': '#dfc11e',
        'yellow.gradient2': '#7D6119',

        'orange': '#D38325',

        'blue': '#3c76b6',
        'light.blue': '#22A0E8',
        'blue.background': '#132237',

        'green': '#1ebc7a',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
    
}
