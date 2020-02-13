module.exports = {
  baseUrl: {
    protocol: 'https',
    hostname: 'data.ncaa.com',
    path: '/casablanca',
  },

  query: {
    source: 'source',
    type: 't',
    sport: 's',
    division: 'd1',
    date: {
      year: 'yyyy',
      month: 'mm',
      day: 'dd',
    },
  },
};
