const express = require('express');

const port = 3002;
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
