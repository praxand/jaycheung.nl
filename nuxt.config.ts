export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Jay Cheung",
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
          hid: "description",
          name: "description",
          content: "Jay Cheung's personal website",
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
