// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kieranphang.github.io", // your GitHub Pages root
  base: "/Portfolio/",                   // 👈 repo name with slashes
  vite: {
    plugins: [tailwindcss()],
  },
});
