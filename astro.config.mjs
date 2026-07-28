// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hirekieran.com",   // <—
  base: "/",                        // <— NO SUBPATH NEEDED NOW
  integrations: [
    sitemap({
      // Keep redirect stubs and the page template out of the sitemap
      filter: (page) =>
        !page.includes("/projects/amkor-ops-LLM/") &&
        !page.includes("/projects/Master_Template/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
