import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#080706",
          100: "#0E0D0B",
          200: "#141210",
          300: "#1C1A16",
          400: "#242018",
          500: "#2E2920",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C87A",
          pale: "#F0DFA0",
          dark: "#9E7E30",
          muted: "rgba(201,168,76,0.4)",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          muted: "#B8B0A0",
          faint: "#6B6459",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(64px,9vw,140px)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(48px,7vw,96px)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(36px,5vw,64px)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(28px,3.5vw,44px)", { lineHeight: "1.1" }],
        "label": ["11px", { lineHeight: "1", letterSpacing: "0.25em" }],
        "label-sm": ["10px", { lineHeight: "1", letterSpacing: "0.3em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "line-draw": "lineDraw 1.5s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(16px)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
