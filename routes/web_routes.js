var express = require('express');
var handleError = require(__dirname + '/../lib/handle_error');
var path = require('path');

var webRouter = module.exports = exports = express.Router();

webRouter.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../html/index.html'), function(err) {
    if (err) return handleError(err, res);
  });
});

webRouter.get('/app', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../html/app.html'), function(err) {
    if (err) return handleError(err, res);
  });
});
