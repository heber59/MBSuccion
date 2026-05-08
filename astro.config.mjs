import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "",

  output: "static",
  integrations: [sitemap()],
});
