/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      reddit: ["Reddit mono", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          100: "#0A4109",
          200: "#169118",
          300: "#27FB47",
        },
        black: "#150A10",
        yellow: "#CA9209",
      },
      // Adding custom utilities for mix-blend-mode
      mixBlendMode: {
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
        // Add other blend modes as needed
      },
    },
  },
};
