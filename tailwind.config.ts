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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)"
      },
      fontSize: {
        xs: '0.6875rem',
        sm: '0.8125rem',
        base: '1rem',
        xl: '2.125rem',
        '2xl': '3.75rem',
        '3xl': '4rem',
        '4xl': '4rem',
        '5xl': '6rem',
      }
    },
  },
  plugins: [],
};
export default config;
