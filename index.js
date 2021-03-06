const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Importing Models
const User = require('./models/User');
const Group = require('./models/Group');
const Meeting = require('./models/Meeting');
User.belongsTo(Group)
Group.hasMany(User)
Group.hasMany(Meeting)
Meeting.belongsTo(Group)

// For cors
const cors = require('cors');
app.use(cors())

// For logging
const logger = require('morgan');
app.use(logger('dev'))

app.get('/', function(req, res) {
    res.render('index.ejs');
});

// For testing User database
app.get('/users', User.readAll);
app.get('/users/:fb_id', User.findByFb)
// For testing Group database
app.get('/groups', Group.readAll);
// For testing Group database
app.get('/meetings', Meeting.readAll);

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' joined the chat.</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat.</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});
