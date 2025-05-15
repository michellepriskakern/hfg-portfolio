// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            manrope: ['Manrope', 'sans-serif'], // Manrope als eigene Font-Klasse
          },
        },
      },
    },
  },
});


