import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rolasnajera.com",
  integrations: [tailwind({
    applyBaseStyles: true
  })],
  output: "static"
});

