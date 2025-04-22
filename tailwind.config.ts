
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // light palette
        background: "#FFFFFF",
        foreground: "#00171F",
        card: "#FFFFFF",
        "card-foreground": "#00171F",
        popover: "#FFFFFF",
        "popover-foreground": "#00171F",
        primary: {
          DEFAULT: "#003459",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#007EA7",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00A8E8",
          foreground: "#00171F",
        },
        border: "#003459",
        input: "#003459",
        ring: "#00A8E8",
        muted: "#e8e8e8",
        "deep-blue": "#003459",
        teal: "#007EA7",
        "vibrant-orange": "#00A8E8",
        "dark-slate": "#00171F",
        "off-white": "#FFFFFF",
        // dark palette
        "dm-background": "#121212",
        "dm-00171f": "#000D12",
        "dm-003459": "#002A43",
        "dm-007EA7": "#00607D",
        "dm-00A8E8": "#0088C5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "blinker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blinker: "blinker 1s steps(1, end) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
