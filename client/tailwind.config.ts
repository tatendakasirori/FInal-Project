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
          DEFAULT: "#0066cc",
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#3385ff",
          500: "#0066cc",
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
          950: "#000a14",
        },
        secondary: {
          DEFAULT: "#475569",
        },
        background: "#f9fafb",
        foreground: "#111827",
      },
    },
  },
  plugins: [],
};

export default config;
