// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../../layers/base'
  ],
  devServer: {
    port: 3000
  }
})
