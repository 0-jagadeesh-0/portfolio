import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8C52FF',
          dark: '#7039FF',
          light: '#A375FF'
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A0A0A'
        },
        text: {
          light: '#1A1A1A',
          dark: '#F5F5F5'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
