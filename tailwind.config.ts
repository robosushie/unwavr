import type { Config } from "tailwindcss";

import { APP_COLOR_SCHEME } from "./config/color-scheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...APP_COLOR_SCHEME,
    },
  },
  plugins: [],
};
export default config;
