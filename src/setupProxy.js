const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/sports', { target: 'https://data.ncaa.com' }));
}
