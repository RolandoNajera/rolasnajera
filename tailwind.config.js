/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette aligned with Rolas Najera branding
        // Provided colors: #264653 (dark), #2a9d8f (teal), #f4a261 (accent), #333333 (ink), #f6f5f3 (paper)
        brand: {
          DEFAULT: "#2a9d8f", // teal
          dark: "#264653",
          teal: "#2a9d8f",
          accent: "#f4a261",
          ink: "#333333",
          paper: "#f6f5f3",
          // Numeric aliases to keep existing utility usage working (e.g., bg-brand-600)
          400: "#2a9d8f",
          500: "#2a9d8f",
          600: "#264653",
          700: "#264653"
        }
      }
    }
  },
  plugins: []
};

