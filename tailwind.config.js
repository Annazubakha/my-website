/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      md: "768px",
      lg: "1440px",
    },
    fontFamily: {
      montserrat: [
        "ui-sans-serif",
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
    },
    extend: {
      colors: {
        "main-bg": "#2A2E33",
        accent: "#9736bb",
        "accent-hover": " #842a9e",
        "burger-menu-bg": "#202226",
        // "main-color": "#c4cfde",
        white: "#FAFAFA",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "32px",
            paddingRight: "32px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "80px",
            paddingRight: "80px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
