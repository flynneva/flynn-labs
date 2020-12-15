const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    contentBase: './dist',
    publicPath: '/public',
    proxy: {
      '/ncaa_api': {
        target: 'https://data.ncaa.com',
        changeOrigin: true,
        pathRewrite: {
          '^/ncaa_api': '',
        }
      }
    },
  },
});
