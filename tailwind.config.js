/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    "./pages/**/*.tsx",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        100: "#EEDED6",
        200: "#C78B72",
        300: "#BE552F",
        400: "#944728",
      },
      "hca-red": "#E00000",
    },
    fontSize: {
      // fontSize: 12px, lineHeight: 16.8px
      xs: ["0.75rem", "1.05rem"],
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
  variants: {
    extend: {},
  },
  plugins: [],
};
