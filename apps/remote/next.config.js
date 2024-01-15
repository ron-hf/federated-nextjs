/** @type {import('next').NextConfig} */

 // remote/next.config.js
 const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

 const pkg = require('./package.json');

 const federationConfig = {
  name: 'app2',
  filename: 'static/chunks/remoteEntry.js',
  //library: { "type": "var", "name": "app2"},
  exposes: {
    // specify exposed pages and components
    './App2Component': './components/App2Component',
    './Dashboard': './components/Dashboard/Dashboard'
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
   //basePath: '/Remote',
   //assetPrefix: '/Remote/',
   webpack(config, { isServer }) {
     config.plugins.push(
      new NextFederationPlugin(federationConfig)
     )

     return config;
   },
 }



module.exports = nextConfig
