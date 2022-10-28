/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor:{
          base: 'var(--text-color)',
          muted: 'var(--text-color-2)',
          light: 'var(--text-color-3)',
        },
        objBackground:{
          base: 'var(--object-background)'
        },
        objBackground2:{
          base: 'var(--object-background2)'
        },
        headings:{
          base: 'var(--object-background)'
        },
        stroke:{
          base:'var(--object-background)'
        }
      }
    },
  },
  plugins: [Myclass],
}
