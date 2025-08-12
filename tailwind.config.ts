import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Logo-aligned brand colors
        brand: {
          gold: {
            50: "#fefbf7",
            100: "#fdf6ee",
            200: "#faebd4",
            300: "#f5dab5",
            400: "#efc48f",
            500: "#b48d55", // Primary gold from logo
            600: "#a67d4a",
            700: "#8b6a3e",
            800: "#735836",
            900: "#5e482d",
            950: "#342818",
          },
          navy: {
            50: "#f4f6f9",
            100: "#e8ecf2",
            200: "#d6dde8",
            300: "#bac6d7",
            400: "#98a9c2",
            500: "#7e8fb0",
            600: "#6b7a9e",
            700: "#5f6b8e",
            800: "#515a76",
            900: "#23345b", // Primary navy from logo
            950: "#1a2642",
          },
          // Navigation button color
          nav: {
            DEFAULT: "#9f8269", // Custom navigation button color
            50: "#f7f5f3",
            100: "#ede8e4",
            200: "#ddd4cc",
            300: "#c7b8ab",
            400: "#b09a87",
            500: "#9f8269", // Main navigation color
            600: "#8a6f5a",
            700: "#725c4b",
            800: "#5e4d40",
            900: "#4d4037",
          },
          // Page background color
          "page-bg": "#bfac9b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
export default config
