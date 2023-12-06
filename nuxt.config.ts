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
          name: "viewport",
          content: "width=device-width, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no",
        },
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
