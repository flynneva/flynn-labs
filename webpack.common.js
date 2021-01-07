const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: '/src/index.js',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
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
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
