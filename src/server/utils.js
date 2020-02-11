const url = require('url');
const config = require('./config');

module.exports = {
  generateNcaaURL: function(source, sport, division, date, type) {
    const baseUrlConfig = config.baseUrl;
    const queryConfig = config.query;

    let requestQuery = {};

    if (source === 'scoreboard') {
      requestQuery[queryConfig['source']] = source;
    } else if (sport === 'basketball-mens') {
      requestQuery[queryConfig['sport']] = sport;
    } else if (division === 'd1') {
      requestQuery[queryConfig['division']] = division;
    };

    requestQuery[queryConfig['date']] = date;
    requestQuery[queryConfig['type']] = type;
    
    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery,
    });
  },
};
