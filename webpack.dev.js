var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    port: port,
    proxy: {
      context: () => true,
      '**': {
        target: 'https://data.ncaa.com/',
        changeOrigin: true,
      }
    },
  },
});
