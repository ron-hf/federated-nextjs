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
      app2: `app2@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
      hfDemo: `hfDemo@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
      //'provider_app': 'provider_app'
    };
  }

  const federatedConfig = (isServer) => {
    return {
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      remotes: remotes(isServer),
      exposes: {
        // Host app also can expose modules
      },
      shared: {
        '@mui/material': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@mui/material'],
        },
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-dom'],
        },
        '@mui/styled-engine-sc': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@mui/styled-engine-sc'],
        },
        'styled-components': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['styled-components']
        },
        '@emotion/styled': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@emotion/styled']
        },
        '@emotion/react': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@emotion/react']
        },
        '@mui/icons-material': {
          singleton: true,
          eager: true,
          requiredVersion: pkg.dependencies['@mui/icons-material']
        }

          // specify shared dependencies 
          // read more in Shared Dependencies section
      }
    }
  }
 
  const nextConfig = {
    reactStrictMode: true,
    export: true,
    //basePath: '/Host',
    //assetPrefix: '/Host/',
    webpack(config, { isServer }) {
      //const test = federatedConfig(isServer)
      //console.log(test)
      //config.resolve.plugins = [new TsconfigPathsPlugin()];
      config.plugins.push(
        new NextFederationPlugin({
          ...federatedConfig(isServer),
          extraOptions: {
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
            exposePages: false,
        
          }
        }),
        //new FederatedTypesPlugin({federatedConfig}),
        //new ModuleFederationPlugin(federatedConfig)
      );
 
      return config;
    }
  }
 


module.exports = nextConfig
