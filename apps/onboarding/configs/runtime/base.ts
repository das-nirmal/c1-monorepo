
export default {

  // app overrides
  _app: {
    staticAssets: {
      assetsAppFolder: 'onboarding',
    },

    context: 'onboarding base'
  },

  //onboarding config
  onboarding: {
    "exemptCSRFendpointList" : ["/apigateway/spot-test/mock/"]
  }
}
