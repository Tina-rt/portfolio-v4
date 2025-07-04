import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Tina Ratolojanahary Portfolio",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  compatibilityDate: "2025-05-15",
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/fonts"],
});
