module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const webConfig = config;
    webConfig.module.rules.push({
      test: require.resolve('jquery'),
      use: [
        {
          loader: 'expose-loader',
          options: 'jQuery'
        },
        {
          loader: 'expose-loader',
          options: '$'
        },
        {
          loader: 'expose-loader',
          options: 'jquery'
        }
      ]
    });
    webConfig.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );
    return webConfig;
  }
};
