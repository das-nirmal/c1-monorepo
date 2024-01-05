export default {
  _app: {
    redirectToHttps: false,
    enableBrowserCache: false,
    build: {
      aot: false,
    },
    staticAssets: {
      serveStaticAssetsExternally: false,
    },
    sentry: {
      uploadStaticAssets: false,
    },
    ltiTool: {
      gatewayToolAPIGateway: {
        awsConfig: {
          accessKeyId : process.env.APP_LTI_TOOLGW_API_ACCESS_KEY_ID || '',
          secretAccessKey : process.env.APP_LTI_TOOLGW_API_SECRET_ACCESS_KEY || '',
          region : process.env.AWS_REGION || 'us-west-2'
        }
      }
    },

    context: 'onboarding local'
  },

  onboarding: {
    gigyaSitesKeys: {
      children: '3_LXSDVjHfYkhAHMEKxViRLM7DDMgkzJAG4yTCbtrZSxnIrDAXa2iZIDR3JonV5Li3',
    },
    contactSupport: {
      emailAddress: ''
    }
  }
}
