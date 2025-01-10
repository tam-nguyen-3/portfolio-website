/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "theme-purple": "#D29AFF",
      "light-theme-purple": "#F7EDFF",
      "med-theme-purple": "#EFD8FF",
      "slate-950": "#030712",
      "slate-900": "#0f172a",
      "slate-800": "#1e293b",
      "slate-600": "#475569",
      "black": "#000000",
      "background": "#FAFAFA",
      "white": "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ['"Source Code Pro"', "sans-serif"], // Set as the default sans font
      },
    },
  },
  plugins: [],
};
