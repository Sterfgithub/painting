const Encore = require('@symfony/webpack-encore');
const { GenerateSW } = require('workbox-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/build')
  .addEntry('main', './assets/js/main.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .addPlugin(new GenerateSW({
    globDirectory: '_site',
    globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf,json}'],
    swDest: './../service-worker.js',
  }))
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
