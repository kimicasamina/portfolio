/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   transparent: "hsl(var(--transparent) / <alpha-value>)",
    //   primary: "hsl(var(--primary) / <alpha-value>)",
    //   gray: {
    //     20: "hsl(var(--gray-20) / <alpha-value>)",
    //     5: "hsl(var(--gray-5) / <alpha-value>)",
    //   },
    //   neutral: {
    //     20: "hsl(var(--neutral-20) / <alpha-value>)",
    //     5: "hsl(var(--neutral-5) / <alpha-value>)",
    //   },
    //   black: "hsl(var(--black) / <alpha-value>)",
    //   white: "hsl(var(--white) / <alpha-value>)",
    // },
    // screens: {
    //   mobile: "365px",
    //   desktop: "1280px",
    // },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      reddit: ["Reddit mono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
