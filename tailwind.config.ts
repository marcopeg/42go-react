import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // This is how we tell Tailwind who's boss
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers all your files
    "./src/components/**/*.{js,ts,jsx,tsx}", // Added components explicitly
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
