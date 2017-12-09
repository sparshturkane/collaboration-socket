var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 4000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Static files
app.use(express.static('public'));