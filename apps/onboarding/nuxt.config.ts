// https://nuxt.com/docs/api/configuration/nuxt-config

import { loadConfig } from 'c12';
import { join } from "node:path";

// const rtConfig = await loadConfig({
//   cwd: join(process.cwd(), '/configs/runtime.config'),
//   envName: process.env.APP_ENVIRONMENT
// });

export default defineNuxtConfig(async()=> {
  return {
    devtools: { enabled: true },
    extends: ["../../layers/base"],
    devServer: {
      port: 3000,
    },

    runtimeConfig: {
      ...(await loadConfig({
          cwd: join(process.cwd(), '/configs/runtime.config'),
          envName: process.env.APP_ENVIRONMENT
        }))
    },
  };
});
