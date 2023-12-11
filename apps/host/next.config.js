/** @type {import('next').NextConfig} */
 // host/next.config.js
  // host/next.config.js
  const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
  const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
  const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

  const pkg = require('./package.json');

  const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
      // specify remotes
      app2: `app2@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    };
  }

  const federatedConfig = {
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      remotes: remotes(false),
      exposes: {
        // Host app also can expose modules
      },
      shared: {
        /*react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },*/
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-dom'],
        },
          // specify shared dependencies 
          // read more in Shared Dependencies section
      }
  }
 
  const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    webpack(config, { isServer }) {
      //const test = federatedConfig(isServer)
      //console.log(test)
      config.resolve.plugins = [new TsconfigPathsPlugin()];
      config.plugins.push(
        new NextFederationPlugin(federatedConfig),
        //new FederatedTypesPlugin({federatedConfig}),
        new ModuleFederationPlugin(federatedConfig)
      );
 
      return config;
    }
  }
 


module.exports = nextConfig
