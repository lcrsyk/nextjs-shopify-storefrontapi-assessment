import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';


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
      },
      maxWidth: {
        '7xl': '1200px',
      },
      boxShadow: {
        'custom': '3px 3px 9px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    function({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }
      });
    },
  ],
};
export default config;
