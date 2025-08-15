/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9eeff",
          200: "#bce1ff",
          300: "#91cfff",
          400: "#5fb6ff",
          500: "#399aff",
          600: "#1f7af5",
          700: "#175fd8",
          800: "#174dac",
          900: "#163f89"
        }
      }
    }
  },
  plugins: []
};

