/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hca-grey": {
          100: "#F4F4F4",
          200: "#D3D9DE",
          300: "#ADB6BF",
          400: "#56606B",
          500: "#323232",
        },
        "hca-blue": {
          // Primary
          100: "#F3FAFB",
          200: "#D9F0F2",
          300: "#B3FEFC",
          400: "#5CC7C6",
          500: "#00969E",
          600: "#34787F",
          700: "#214B60",
          800: "#183848",
          900: "#02173E",
        },
        "hca-orange": {
          // Secondary
          300: "#EEDED6",
          400: "#C78B72",
          500: "#BE552F",
          600: "#944728",
        },
        "hca-red": "#E00000",
      },
      spacing: {
        // 8px - 0.5rem
        1: ".5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
        9: "4.5rem",
        10: "5rem",
      },
      fontSize: {
        // fontSize: 12px, lineHeight: 16.8px
        xs: [".75rem", "1.05rem"],
        // fontSize: 14px, lineHeight: 19.6px
        sm: ["0.875rem", "1.225rem"],
        // fontSize: 16px, lineHeight: 22.4px
        base: ["1rem", "1.4rem"],
        // fontSize: 18px, lineHeight: 25.2px
        lg: ["1.125rem", "1.575rem"],
        // fontSize: 20px, lineHeight: 28px
        xl: ["1.25rem", "1.75rem"],
        // fontSize: 40px, lineHeight: 44px (Testimonial Text)
        "2xl": ["2.5rem", "2.75rem"],
      },
      fontWeight: {
        normal: 300,
        medium: 400,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
