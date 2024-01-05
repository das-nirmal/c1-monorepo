import defu from 'defu';

import baseConfig from './base';
import localConfig from "./local";
import thorConfig from "./thor";
import qaConfig from "./qa";
import prod1Config from "./prod1";

import basePublicConfig from './public/base';
import localPublicConfig from './public/local';
import thorPublicConfig from './public/thor';
import qaPublicConfig from './public/qa';
import prodPublicConfig from './public/prod1';

const getEnvironmentConfig = () => {
    const environment = process.env.APP_ENVIRONMENT || 'local';

    let publicEnvConfig;
    const publicConfigMap = {
      prod1: prodPublicConfig,
      qa: qaPublicConfig,
      thor: thorPublicConfig,
      local: localPublicConfig
    };
    publicEnvConfig = defu(publicConfigMap[environment], basePublicConfig);
    
    let envConfig;
    const configMap = {
      prod1: prod1Config,
      qa: qaConfig,
      thor: thorConfig,
      local: localConfig
    };
    envConfig = configMap[environment];
    envConfig.public = publicEnvConfig;
    
    return defu(envConfig, baseConfig);
}

export default getEnvironmentConfig();
