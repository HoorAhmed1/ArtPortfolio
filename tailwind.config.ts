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
        ground: "var(--color-ground)",
        surface: "var(--color-surface)",
        inset: "var(--color-inset)",
        line: "var(--color-line)",
        "line-strong": "var(--color-line-strong)",
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        brand: "var(--color-brand)",
        "brand-tint": "var(--color-brand-tint)",
        navy: "var(--color-navy)",
        link: "var(--color-link)",
      },
      maxWidth: {
        page: "1040px",
      },
      boxShadow: {
        cover: "var(--shadow-cover)",
        page: "var(--shadow-page)",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "var(--font-figtree)", "sans-serif"],
        mono: ["ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
