export default {

  // app overrides
  _app: {
    staticAssets: {
      assetsAppFolder: 'onboarding',
    },
    customReqHeaders: {
      appVersion: {
        "key" : 'cambridgeone-app-version',
        "value" : 'v2'
      }
    },
    externalData: {
      bucketName: 'dls-asgard-thor-externaldata'
    },
    exemptCSRFendpointList: ['/apigateway/beacon/external-data']
  },

  //onboarding config
  onboarding: {        
    "microapps" : {
        "baseUrl": process.env.MICROAPP_BASE_URL || '/'
    },
    "contactSupport" : {
        "sesIAM" : {
            "awsConfig" : {
                "region" : process.env.AWS_REGION,
            }
        },
        "from" : {
            "emailAddress" : process.env.EMAIL_ADDRESS_GENERAL //"noreply@comprodls.com",
        }
    },
    "gigyaSitesKeys": {
        "children": "3_LXSDVjHfYkhAHMEKxViRLM7DDMgkzJAG4yTCbtrZSxnIrDAXa2iZIDR3JonV5Li3",
        "ieltsi": "3_AdLgIkENp6OqGg-pGA9_ePa3vOBKg_1GrsNaaoLz5s2DML7zSyVGhi5yUys6Uhyh",
        "voila": "3_Vuei_j5PV_Tcjxtfu_34nXOX4HEwAjLAML7h0TtNmZ51pp3CDQJdO0lQzrTu9W30"
    },
    "permCachedAssets": { //permanent cached Assets - Assets which are not changed after every deployment
        "version" : "v1",
        "basePath" : "pc"
    },
    "exemptCSRFendpointList" : ["/apigateway/spot-test/mock/"]
}
}
