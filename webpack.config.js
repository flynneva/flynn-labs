const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: ['./src', './dist'],
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
      template: './src/index.html',
      favicon: './public/favicon.ico',
      filename:"index.html"
    })
  ]
};
