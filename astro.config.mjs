import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://metricmind.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
