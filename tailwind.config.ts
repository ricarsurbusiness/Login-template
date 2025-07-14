import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "576px",
      tablet: "768px",
      laptop: "992px",
      desktop: "1200px",
    },
  },
  plugins: [],
} satisfies Config;
