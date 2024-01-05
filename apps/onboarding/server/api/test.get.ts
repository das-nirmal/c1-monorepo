export default defineEventHandler(() => {
  // const appConfig = useAppConfig();
  // return appConfig.name;

  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig)
  //console.log(JSON.stringify(runtimeConfig, null, 4))
  //return runtimeConfig.onboarding.contactSupport.emailAddress;

  return runtimeConfig._app.context;
})