const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ "babel-loader" ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ "css-loader" ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
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
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename:"index.html"
    }),
  ]
};
