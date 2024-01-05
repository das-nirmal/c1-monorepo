export default defineEventHandler(() => {

  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig);

  return runtimeConfig._app.context;
})