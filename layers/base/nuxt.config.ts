// https://nuxt.com/docs/api/configuration/nuxt-config

import runtimeConfig from './configs/runtime/base';
import publicRuntimeConfig from './configs/runtime/public/base';

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
  runtimeConfig: {
    ...runtimeConfig,
    public: publicRuntimeConfig
  }
});
