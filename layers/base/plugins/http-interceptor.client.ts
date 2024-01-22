import { ofetch } from 'ofetch'

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest({ request, options }) {
      options.headers = {
        "cambridgeone-app-version": 'V2',
      }
    }
  })
})