// https://nuxt.com/docs/api/configuration/nuxt-config

import runtimeConfig from './configs/runtime/';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Mulish' : {
          wght: [200, 300, 400, 600, 700, 800],
          ital: [300, 600]
        }
      }
    }]
  ],
  runtimeConfig,
});
