/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ["./templates/*.html"],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        'white': '#f5f7e9;',
        'black': '#27181f;',
        'pink': '#ec5999ff;',
        'red': '#ff595eff;',
        'orange': '#f7802bff;',
        'yellow': '#ffca3aff;',
        'green': '#8ac926ff;',
        'blue': '#1AA5C4ff;',
        'purple': '#7f5fadff;',
        'gray': '#aaa;',
        'gray-dark': '#555;',
      },
    },
  },
}
