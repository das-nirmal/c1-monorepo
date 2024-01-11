export default defineEventHandler(async () => {

  const msg = 'uyoyo';
  
  // Does not work https://github.com/nuxt/nuxt/discussions/24251
  // const nuxtApp = useNuxtApp();
  // nuxtApp.$logger(msg);

  console.log(msg);

  return msg;
});
