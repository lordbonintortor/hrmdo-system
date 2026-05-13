import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        civic: {
          ink: "#172026",
          forest: "#1f6f5f",
          gold: "#d7a63f",
          mist: "#edf4f1",
          coral: "#c95d4b",
          sky: "#4b82b8"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 38, 0.12)"
      }
    },
  },
  plugins: [],
};

export default config;
