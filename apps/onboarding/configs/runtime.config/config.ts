import baseConfig from './base';
import localConfig from './local';
import thorConfig from './thor';

export default {
  ...baseConfig,

  $env: {
    local: localConfig,
    thor: thorConfig,
  }
}
