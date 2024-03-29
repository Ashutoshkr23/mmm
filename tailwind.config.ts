import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-blue': '#ADD8E6',
        'Dark-blue' : '#59B8CE',
        'White' : '#FAFAFA',
        'Black' : '#333',
        'Yellow' : '#EBCB21',
        'orange' : '#ED7623',
        'orange-light' : '#F2A976',
        'Yellow-light' : '#E0D774',

      },
    },
  },
  plugins: [],
};
export default config;
