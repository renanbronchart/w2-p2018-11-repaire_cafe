var webpack = require('webpack');

env = process.env.NODE_ENV;

if (env == 'dev') {
  function buildConfig(env) {
    return require('./dev.js')({ env: env })
  }

  module.exports = buildConfig;
} else {
  function buildConfig(env) {
    return require('./prod.js')({ env: env })
  }

  module.exports = buildConfig;
}


