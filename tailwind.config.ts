import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        muted: "#7a7a7a",
        parchment: "#f5f5f7",
        hairline: "#e0e0e0",
        dark1: "#272729",
        dark2: "#2a2a2c",
        brand: {
          DEFAULT: "#0066cc",
          dark: "#2997ff",
        },
      },
      fontFamily: {
        display: ['"Lora"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.2px",
        tight3: "-0.3px",
        tight4: "-0.374px",
      },
    },
  },
  plugins: [],
};

export default config;
