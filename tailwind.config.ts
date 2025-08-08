import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // Contentstack Brand Colors
        contentstack: {
          stone: "#253142", // Primary dark navy
          cement: "#637392", // Blue-gray for text and icons
          purple: "#7C5EF7", // Brand purple for links
          red: "#E85E40", // Stack red for accents
          graphite: "#BCD4E8", // Light blue-gray for strokes/dividers
        },
        border: "#BCD4E8",
        input: "#BCD4E8",
        ring: "#7C5EF7",
        background: "#FFFFFF",
        foreground: "#253142",
        primary: {
          DEFAULT: "#7C5EF7",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#637392",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#E85E40",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#637392",
        },
        accent: {
          DEFAULT: "#F8F9FA",
          foreground: "#253142",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#253142",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#253142",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
