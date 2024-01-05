// https://nuxt.com/docs/api/configuration/nuxt-config

import baseRuntimeConfig from './configs/runtime/base';
import localRuntimeConfig from './configs/runtime/local';
import thorRuntimeConfig from './configs/runtime/thor';
import qaRuntimeConfig from './configs/runtime/qa';
import prodRuntimeConfig from './configs/runtime/prod1';

console.log(process.env.NODE_ENV)

console.log(process.env.APP_ENVIRONMENT)

export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ["../../layers/base"],
    devServer: {
      port: 3000,
    },

    runtimeConfig: {
      ...baseRuntimeConfig
    },

    envName: process.env.APP_ENVIRONMENT,

    $env: {
      //local: { runtimeConfig: localRuntimeConfig },
      development: { runtimeConfig: qaRuntimeConfig },
      // thor: { runtimeConfig: thorRuntimeConfig },
      qa: { runtimeConfig: qaRuntimeConfig },
      production: { runtimeConfig: prodRuntimeConfig },
    },

    nitro: {
      envName: process.env.APP_ENVIRONMENT,
      c12: {
        envName: process.env.APP_ENVIRONMENT,
      }
    }
    
});
