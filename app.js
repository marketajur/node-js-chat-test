const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.use('/socket.io', express.static(path.join(__dirname, '/node_modules/socket.io')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.broadcast.emit('hi to all connected, broadcast');
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('emitted message: ' + msg);
    });

    
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    //   });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});