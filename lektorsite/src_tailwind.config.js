/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: [
  //   require('@tailwindcss/typography')
  // ],
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        white: "#f5f7e9;",
        black: "#27181f;",
        dragonfruit: "#ec5999ff;",
        fire: "#ff595eff;",
        mandarin: "#f7802bff;",
        gold: "#ffca3aff;",
        leaf: "#8ac926ff;",
        aqua: {
          light: "#ADE9F4;",
          DEFAULT: "#1AA5C4ff;",
          dark: "#1E566C;",
        },
        sky: "#21A9F5",
        plum: "#7f5fadff;",
        flint: "#aaa;",
        cinder: "#555;",
      },
    },
  },
};
