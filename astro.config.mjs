// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hirekieran.com",   // <—
  base: "/",                        // <— NO SUBPATH NEEDED NOW
  vite: {
    plugins: [tailwindcss()],
  },
});
