export default defineNuxtPlugin((nuxtApp) => {

  console.log('PLUGIN ------------------ nitro:config')

  nuxtApp.hook('nitro:config', () => {
    /* your code goes here */
    console.log('------------------ nitro:config')
  })
})