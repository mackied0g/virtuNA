const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.sockets.on('connection', function(socket) {
  socket.on('username', function(username) {
      socket.username = username;
      io.emit('is_online', '<p>' + socket.username + ' joined the chat.</p>');
  });

  socket.on('disconnect', function(username) {
      io.emit('is_online', '<p>' + socket.username + ' left the chat.</p>');
  })

  socket.on('chat_message', function(message) {
      io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`))