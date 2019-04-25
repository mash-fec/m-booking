const express = require('express');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('./public'));

app.get('/totalReviews', (req, res) => {
  apiProxy.web(req, res, { target: 'http://reviews.pfuzgfpajh.us-west-2.elasticbeanstalk.com/' });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
