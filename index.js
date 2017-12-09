var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 4000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', function (socket) {
  console.log("user connected")
  // when client emits NEW_MESSAGE
  socket.on('NEW_MESSAGE', function (data) {
    // we tell client to execute new message
    socket.broadcast.emit('NEW_MESSAGE', {
      username: socket.username,
      message: data
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // if (addedUser) {
    //   --numUsers;

    //   // echo globally that this client has left
    //   socket.broadcast.emit('user left', {
    //     // username: socket.username,
    //     // numUsers: numUsers
    //   });
    // }
    console.log('user disconnected');
  });
});

