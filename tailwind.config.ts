import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050607",
          900: "#0B0E10",
          800: "#12161A",
          700: "#1C272C",
        },
        cyan: {
          600: "#0891A6",
          500: "#00B8CC",
          400: "#00EEFB",
          300: "#6FF6FF",
          200: "#C7FBFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Barlow Condensed'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
