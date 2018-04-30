const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method) {
      res.sendStatus(200);
  }
  else {
      next();
  }
});
// define env file to use in application
require('dotenv').config()

require('./server/routes')(app, jwt, express);
require('./server/routes/admin.js')(app, jwt, express);
require('./server/routes/user.js')(app, jwt, express);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to SNACK STORE.',
}));

module.exports = app;
