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
        // Core Brand Palette
        black: {
          DEFAULT: "#0A0A0A",
          rich: "#111111",
          soft: "#1A1A1A",
          muted: "#222222",
        },
        white: {
          DEFAULT: "#FFFFFF",
          off: "#F9F7F4",
          warm: "#F5F0E8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CC6A",
          dark: "#B8941F",
          muted: "#D4AF3740",
          pale: "#F5EDCC",
        },
        // Supporting Palette
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#3D3D3D",
          dark: "#1C1C1C",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE0",
        },
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "display-xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(212, 175, 55, 0.15)",
        "gold-md": "0 4px 20px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.35)",
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.4)",
        "dark-sm": "0 2px 8px rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 20px rgba(0, 0, 0, 0.5)",
        "dark-lg": "0 8px 40px rgba(0, 0, 0, 0.7)",
        "card": "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #E8CC6A 50%, #B8941F 100%)",
        "gradient-dark": "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)",
        "gradient-hero": "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 60%, #111111 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212, 175, 55, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      transitionTimingFunction: {
        "bounce-sm": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
