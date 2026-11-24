// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/google-fonts"],

  // Schriften werden beim Build heruntergeladen und von der eigenen Domain
  // ausgeliefert – es entsteht keine Verbindung zu Google-Servern (DSGVO).
  googleFonts: {
    download: true,
    inject: true,
    display: "swap",
    families: {
      "Atkinson+Hyperlegible+Next": [300, 400, 500, 600, 700],
      "Atkinson+Hyperlegible": [400, 700],
      "Instrument+Serif": { wght: [400], ital: [400] },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: { lang: "de" },
      title: "Michelle Kern – Interaction Design Portfolio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfolio von Michelle Kern, Interaktionsgestalterin an der HfG Schwäbisch Gmünd. Research, Konzept, UX/UI und Prototyping.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Michelle Kern" },
        { property: "og:image", content: "https://www.michellekern.de/img/cura/prototype.webp" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  routeRules: {
    // Projekt ist vorerst ausgeblendet – alte Links landen auf der Startseite.
    "/projects/thehumanhead": { redirect: "/" },
  },
});
