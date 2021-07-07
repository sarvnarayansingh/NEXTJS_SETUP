const getWebpackConfig = require('./webpackConfig');
const runtimeConfigDev = require('./.env.dev.json');
// const runtimeConfigProd = require('./.env.prod.json');

module.exports = () => {
  const env = process.env.NODE_ENV;
  const runtimeConfig = {
    development: runtimeConfigDev
  };

  let config = {
    webpack: getWebpackConfig,
    publicRuntimeConfig: runtimeConfig[env]
  };
  config = {
    ...config,
    assetPrefix: runtimeConfig[env].assetPrefix,
    basePath: runtimeConfig[env].basePath,
    trailingSlash: runtimeConfig[env].trailingSlash
  };

  return config;
};
