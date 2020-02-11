const fetch = require('node-fetch');
const generateNcaaURL = require('../../utils').generateNcaaURL;

module.exports = (app) => {
  app.get('/ncaa-scoreboard', (req, res) => {
    const requestBody = req.body;
    const apiUrl = generateNcaaURL( requestBody.source,
                                    requestBody.sport,
                                    requestBody.division,
                                    requestBody.date,
                                    requestBody.type );
    
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
