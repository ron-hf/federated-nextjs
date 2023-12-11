const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'remoteApp',
        library: { type: 'var', name: 'remoteApp' },
        filename: 'remoteEntry.js',
        exposes: {
          './remoteAppComponent': './src/pages/Something',
        },
        //shared: ['react', 'react-dom'],
      })
    );

    return config;
  },
};
