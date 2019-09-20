const config = require('config');
const deepcopy = require('deepcopy');
const express = require('express');
const helmet = require('helmet');

const app = express();
const port = 6000;

app.use(helmet.contentSecurityPolicy(deepcopy(config.get('CSP'))));

app.get('/', (req, res) => {
  config.CSP.directives.defaultSrc = null;

  res.send('ok');
});

app.get('/config', (req, res) => res.json(config.get('CSP')));

app.listen(port, () => console.log(`App listening on port ${port}!`));
