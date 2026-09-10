import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D9232E",
          dark: "#A81323",
          navy: "#0B1F3F",
        },
        surface: "#F6F6F7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "var(--font-inter)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
