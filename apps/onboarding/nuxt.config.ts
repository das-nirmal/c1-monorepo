// https://nuxt.com/docs/api/configuration/nuxt-config

import runtimeConfig from './configs/runtime/';

console.log(process.env.APP_ENVIRONMENT)

export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ["../../layers/base"],
    devServer: {
      port: 3000,
    },

    runtimeConfig: {
      ...runtimeConfig
    },
    
});
