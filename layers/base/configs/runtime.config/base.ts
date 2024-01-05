export default {        
  "default" : {
      //Redirect to Https.
      //REDIRECT_TO_HTTPS environment variable (if set) will take precedence
      "redirectToHttps" : process.env.REDIRECT_TO_HTTPS ?  ((process.env.REDIRECT_TO_HTTPS == "ENABLE") ? true : false) : true,

      //Enable cache headers for browsers
      "enableBrowserCache" : true,

      // Max age of static assets cache - 1 Year. Applicable if enableBrowserCache is true
      "browserCacheMaxAge": 31536000000,  
      
      // "staticAssets" : {
      //     "serveStaticAssetsExternally" : process.env.STATIC_ASSETS_SERVE_EXTERNALLY ?  ((process.env.STATIC_ASSETS_SERVE_EXTERNALLY == "ENABLE") ? true : false) : true,
      //     // We have hardcoded this for now. Will re-analyse this in future if this is really required.
      //     "isVersioningRequired": true,
      //     //"isVersioningRequired": process.env.STATIC_ASSETS_VERSIONING ?  ((process.env.STATIC_ASSETS_VERSIONING == "ENABLE") ? true : false) : true,
      //     "region": process.env.AWS_REGION,
      //     "bucket": process.env.STATIC_ASSETS_AWS_BUCKET, 
      //     "assetsBasePath": process.env.STATIC_ASSETS_BASEPATH,
      //     "assetsAppFolder" : process.env.STATIC_ASSETS_APP_FOLDER
      // }, 

      // "sentry" : {
      //     "uploadStaticAssets": true, // Upload source maps to sentry via sentry webpack plugin
      // },

      // "session" : {
      //     // Secret for encrypting session cookie
      //     "cookieSecret": "compro123",
      //     "cookieDomain": process.env.COOKIE_DOMAIN,
      //     "cookiePrefix": 'c1_',
      //     "ttl": 259200, //Passport session expiry time in seconds : 3 days
      //     // Redis URLs and Credentials
      //     // This is used to store user sessions on backend
      //     "redis" : {
      //         // Redis URL
      //         "host": process.env.REDIS_HOST,
      //         "port": process.env.REDIS_PORT,
      //         "password": process.env.REDIS_PASSWORD
      //     }
      // },

      // "build" : {
      //     "aot": process.env.BUILD_AOT ?  ((process.env.BUILD_AOT == "ENABLE") ? true : false) : true,
      //     "e2e": process.env.BUILD_E2E ?  ((process.env.BUILD_E2E == "ENABLE") ? true : false) : false
      // },

      // "gigyaKey": process.env.GIGYA_API_KEY,
      // "dlsAccountId" : process.env.DLS_ACCOUNT_ID, 
      // "sentryDSN": process.env.SENTRY_DSN,
      // "hideJSErrors" : process.env.HIDE_JS_ERRORS ? ((process.env.HIDE_JS_ERRORS == "ENABLE") ? true : false) : true,
      // "dlsRealm" : process.env.DLS_REALM,
      // "dlsEnv" : process.env.DLS_ENV,
      // "appEnv": process.env.APP_ENVIRONMENT,
      // "orchestration" : process.env.ORCHESTRATION,
      // "expressPort" : process.env.PORT || 5000,

      // "announcement": {
      //     "msg": process.env.SERVICE_ANNOUNCEMENT_MSG && process.env.SERVICE_ANNOUNCEMENT_MSG != "undefined" ? decodeURI(process.env.SERVICE_ANNOUNCEMENT_MSG) : undefined
      // },

      // "googleAnalytics" : {
      //     "accountId" : process.env.GOOGLE_ANALYTICS_ACCOUNT_ID
      // },

      // "ptas" : {
      //     "wsdlUrl": process.env.PTAS_WSDL_URL,
      //     "basicAuthUsername" : process.env.PTAS_BASICAUTH_USERNAME,
      //     "basicAuthPassword" : process.env.PTAS_BASICAUTH_PASSWORD,
      //     "username": process.env.PTAS_USERNAME,
      //     "password": process.env.PTAS_PASSWORD,
      //     "privateSharedKey": process.env.PTAS_PRIVATE_SHARED_KEY
      // },

      // "peas" : {
      //    "origin_url": "www.cambridgeone.org",
      //    "secret_key": process.env.PEAS_SECRET_KEY,
      //    "domain": process.env.PEAS_DOAMIN || "https://peas-api-stg.cambridgedev.org/v2"
      // },

      // "gigya": {
      //     "accountUrls": {
      //         "baseUrl": "https://accounts.eu1.gigya.com/",
      //         "search": "accounts.search",
      //         "getAccountInfo": "accounts.getAccountInfo",
      //         "getJWTPublicKey": "accounts.getJWTPublicKey",
      //         "notifyLogin" : "accounts.notifyLogin",
      //         "resetPassword" : "accounts.resetPassword",
      //         "setAccountInfo": "accounts.setAccountInfo",
      //         "register": "accounts.register",
      //         "finalizeRegistration": "accounts.finalizeRegistration"
      //     },
      //     "dsUrls":{
      //         "baseUrl": "https://ds.eu1.gigya.com/",
      //         'store': 'ds.store',
      //         'get': 'ds.get',
      //         'search': 'ds.search',
      //         'delete': 'ds.delete'
      //     },
      //     "comments":{
      //         "baseUrl": "https://comments.eu1.gigya.com/",
      //         'getGroups': 'comments.getUserHighlighting',
      //         'setGroup': 'comments.highlightUser',
      //         'teacherGroup' : 'Teacher'
      //     },
      //     "idxUrls":{
      //         "baseUrl": 'https://idx.eu1.gigya.com/',
      //         "schedule": 'idx.createScheduling'
      //     },
      //     "ssoApiKey": '3_8Dql_zFQevMd2WF0V8qthKHWLI4hTuiNdR2YSLvDvb5g9SVQI5Yh9jkzu0GaPFSd',
      //     "childApiKey": '3_LXSDVjHfYkhAHMEKxViRLM7DDMgkzJAG4yTCbtrZSxnIrDAXa2iZIDR3JonV5Li3',
      //     "dataflowId": '26c79a57419343e094f3938c162b09ba',
      //     "appKey": process.env.GIGYA_APP_KEY,
      //     "appSecret": process.env.GIGYA_APP_SECRET,
      // },

      // //List of Endpoints that are to be exempted from the CSRF Check
      // "exemptCSRFendpointList": [],

      // "customReqHeaders" : {
      //     "userRole" : {
      //         "key" : "user-role"
      //     },
      //     "userId" : {
      //         "key" : "user-id"
      //     }
      // },

      // "ielts" : {
      //     "bundleCode" : "ielts_bundle",
      //     "anchorTestBundleCode": "ielts_anchor_bundle"
      // },
      
      // //keys to be removed from logs or responses for PII policy
      // "piiList": ['email', 'firstname', 'lastname', 'age'],

      // "newRelic" : {
      //     "enable" : false,
      //     "appNamePrefix" : "c1-",
      //     "accountID" : "2758876",
      //     "browserLicenseKey" : "NRJS-e7f52006f85c615d08a"
      // },

      // "availabilityService" : {
      //     "cachingTime": 300000,
      //     "s3Folder": "service-availability-flags/"
      // },

      // "appsData" : {
      //     "bucketName": 'dls-asgard-thor-apps-data',
      //     "accessKey": process.env.APPS_DATA_READ_WRITE_ACCESS_KEY_ID,
      //     "secretKey": process.env.APPS_DATA_READ_WRITE_SECRET_ACCESS_KEY,
      //     "region": process.env.AWS_REGION
      // },

      // "externalData" : {
      //     "bucketName": 'dls-asgard-thor-externaldata',
      // },

      // "ltiTool" : {
      //     "regSourceSAPCDC": "lti-registration",
      //     "gatewayToolAPIGateway": {
      //         "awsConfig" : {
      //             "accessKeyId" : process.env.APP_LTI_TOOLGW_API_ACCESS_KEY_ID,
      //             "secretAccessKey" : process.env.APP_LTI_TOOLGW_API_SECRET_ACCESS_KEY,
      //             "region" : process.env.AWS_REGION,
      //         },
      //         "domain" : process.env.APP_LTI_TOOLGW_API_DOMAIN || 'lti-tool-dev.comprodls.com',
      //         "basePath" : 'v1/lti/'
      //     }
      // },
      
      // "konakart" : {
      //     "apiUrl": process.env.KONAKART_API_URL || "https://ecommerce-dev.cambridgedev.org/konakart/konakartjson",
      //     "KKCustomApiUrl": process.env.KONAKART_CUSTOM_API_URL || "https://ecommerce-dev.cambridgedev.org/konakart/konakartjsoncss",
      //     "KKPaymentsEndpoint" : process.env.KONAKART_PAYMENTS_ENDPOINT || "https://ecommerce-dev.cambridgedev.org/wm-ecommerce-payment/redirect",
      //     "password": process.env.KONAKART_GLOBAL_PASSWORD ,
      //     "storeId": process.env.KONAKART_IELTS_STOREID || "store_elt_ieltsi",
      //     "paymentModuleCode": "GlobalGreenzone",
      //     "custRegAddress": {
      //         "postcode": "400706",
      //         "streetAddress": "221B Baker Street",
      //         "city": "London",
      //         "countryId": "2"
      //     },
      //     "contactUsEmail" : "customer_service@cambridge.org",
      //     "contactUsEmail2" : "directcs@cambridge.org",
      //     "contactUsPostSapErrorEmail" : "ptsupport@cambridge.org",
      //     "defaultTimeout" : 10000,
      //     "defaultTimeout2" : 5000,
      //     "forceUseDefaultCurrency" : true,
      //     "logKKpayloads" : true
      // },

      // "serviceAnnouncements":{ 
      //     verb: 'service_announcement',
      //     object: 'service_announcement',
      //     limit: 20,
      //     feedGroup: 'service_announcements',
      //     feedName: 'default',
      // }
  }
  
}