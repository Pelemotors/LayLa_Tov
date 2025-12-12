import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          sky: "#7BC4D8",
          'sky-light': "#A8D8EA",
          'sky-dark': "#5BA8C0",
          lavender: "#B895D4",
          'lavender-light': "#CDB4DB",
          'lavender-dark': "#9A7AB8",
          pink: "#F0A5B0",
          'pink-light': "#F7CAD0",
          'pink-dark': "#E87A8A",
        },
        background: {
          cream: "#F9F7F3",
          'cream-light': "#FDFCFA",
        },
        text: {
          dark: "#2D2D2D",
          'dark-medium': "#4A4A4A",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["Heebo", "Assistant", "sans-serif"],
        body: ["Rubik", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

