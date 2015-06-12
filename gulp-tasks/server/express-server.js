(function(local_port) {
  'use strict';

  local_port = local_port || 9090;

  // simple express server
  var express = require('express');
  var serveIndex = require('serve-index');
  var app = express();

  var log_server =  function(req, res, next) {
    console.log(req.originalUrl);
    next();
  };

  //Run a static express server
  //app.use(serveIndex('./'), log_server);
  app.use(express.static('./'));
  app.listen(local_port);

  return app;
})(process.argv[2]);
