import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";
import astroIcon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rolasnajera.com",
  integrations: [
    tailwind({ applyBaseStyles: true }),
    solid(),
    astroIcon()
  ],
  output: "static"
});

