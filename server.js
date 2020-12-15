const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const path = require('path');

const app = express();
const BUILD_DIR = path.resolve(path.join(__dirname, 'dist'));
const PUBLIC_DIR = path.resolve(path.join(__dirname, 'public'));
const HTML_FILE = path.join(PUBLIC_DIR, 'index.html');

const targetUrl = 'https://data.ncaa.com/';

app.set('trust proxy', true);

app.use(express.static(BUILD_DIR));
app.use( '/ncaa_api',
         createProxyMiddleware({
           target: targetUrl,
           changeOrigin: true,
           pathRewrite: {
             '^/ncaa_api/': '/'
           }
         })
);

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) { console.log(err); };
  console.log(`App listening on port ${PORT}`);
});
