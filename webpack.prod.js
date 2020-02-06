const merge = require('webpack-merge');
const common = require("./webpack.common.js");

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'production',
});
