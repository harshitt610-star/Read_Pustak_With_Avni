import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#35105F",
          container: "#1C003C",
          hover: "#4A1B82",
        },
        gold: {
          DEFAULT: "#D9A441",
          light: "#FFE5A3",
          dark: "#B88328",
        },
        lavender: {
          DEFAULT: "#F4E4F4",
          light: "#FAF0FF",
          border: "#EAD0EA",
        },
        ivory: {
          DEFAULT: "#FFF9F1",
          warm: "#FFF5E9",
          card: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "#30283A",
          muted: "#5F5568",
          subtle: "#7C7481",
        },
        border: {
          DEFAULT: "#E4D8CE",
          light: "rgba(228, 216, 206, 0.6)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 2px 12px rgba(53, 16, 95, 0.05)",
        "editorial-hover": "0 12px 32px rgba(53, 16, 95, 0.12)",
        paper: "0 1px 3px rgba(53, 16, 95, 0.04), 0 8px 24px rgba(53, 16, 95, 0.06)",
      },
      borderRadius: {
        editorial: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

