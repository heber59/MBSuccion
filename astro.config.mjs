import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // SUSTITUYE por tu dominio .com cuando lo tengas
  site: "https://heber59.github.io",
  base: "/", // Si es el repositorio principal, usa '/'.
  output: "static",
  integrations: [sitemap()],
});
