
console.log('NEWRELIC in nuxt.config.ts');

import newrelic from 'newrelic';
console.log(newrelic.agent.config.app_name);

// https://nuxt.com/docs/api/configuration/nuxt-config
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
    }],
    //'./modules/newrelic',
  ]
});
