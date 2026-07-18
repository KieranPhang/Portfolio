// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hirekieran.com",   // <—
  base: "/",                        // <— NO SUBPATH NEEDED NOW
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
