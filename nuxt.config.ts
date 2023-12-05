export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "manifest",
          href: "/manifest.webmanifest",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
