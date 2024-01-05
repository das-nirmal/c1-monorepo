export default {        
  "_app" : {
      //Redirect to Https.
      //REDIRECT_TO_HTTPS environment variable (if set) will take precedence
      "redirectToHttps" : process.env.REDIRECT_TO_HTTPS ?  ((process.env.REDIRECT_TO_HTTPS == "ENABLE") ? true : false) : true,

      //Enable cache headers for browsers
      "enableBrowserCache" : true,

      // Max age of static assets cache - 1 Year. Applicable if enableBrowserCache is true
      "browserCacheMaxAge": 31536000000,  

      context: 'base'

  }
  
}