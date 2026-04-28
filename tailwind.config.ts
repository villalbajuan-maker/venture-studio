import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#050505",
        bone: "#f3f1eb",
        signal: "#b70f0a",
        ember: "#ff3b30",
      },
      fontFamily: {
        display: [
          "\"Arial Narrow\"",
          "\"Roboto Condensed\"",
          "\"Helvetica Neue\"",
          "Arial",
          "sans-serif",
        ],
        body: [
          "\"Helvetica Neue\"",
          "\"Arial Narrow\"",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighterest: "-0.08em",
      },
      boxShadow: {
        red: "0 0 120px rgba(183, 15, 10, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
