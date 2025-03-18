import type { Config } from "tailwindcss";

const config: Config = {
  
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)", // Aplica a nova fonte
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
