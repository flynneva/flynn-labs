const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    publicPath: '/',
    port: port,
    historyApiFallback: true,
    open: true,
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Development',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      hash: true,
      inject: 'body',
    }),
  ],
});
