const getConfig = require('../next.config');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const chalk = require('chalk');
// const auth = require('basic-auth');

const { publicRuntimeConfig } = getConfig();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || publicRuntimeConfig.PORT;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // server.use((req, res, next) => {
  //   const credentials = auth(req);
  //   if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'gyftr') {
  //     res.status(401);
  //     res.header('WWW-Authenticate', 'Basic realm="example"');
  //     res.send('Access denied');
  //   } else {
  //     next();
  //   }
  // });

  server.get(`${publicRuntimeConfig.basePath}/robots.txt`, (req, res) => {
    const host = req.protocol + '://' + req.headers.host;
    if (req.hostname === 'localhost' || req.hostname === 'gvhelpdesk') {
      res.type('text/plain');
      res.send(`User-agent: * \nDisallow: / \n\nSitemap: ${host + publicRuntimeConfig.basePath}/sitemap.xml \nHost: ${host}`);
    } else {
      res.type('text/plain');
      res.send(`User-agent: * \n\nSitemap: ${host + publicRuntimeConfig.basePath}/sitemap.xml \nHost: ${host}`);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(chalk.hex('#073FCF').bold.underline(`${publicRuntimeConfig.basePath.replace(/\//g, '')} server is up and running on port: ${port}`));
  });
});
