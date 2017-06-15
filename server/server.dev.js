// const webpack = require('webpack');
const path = require('path');
const bodyparser = require('body-parser');
// const cors = require('cors');
const SocketIo = require('socket.io');


const express = require('express');
const app = new express();
var server = require('http').Server(app);
const port = 3001;

let registeredMembers = [];
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  res.header('Access-Control-Allow-Credentials', false);
});
app.use(bodyparser.json());
// app.use(cors());

// user routes
app.post('/api/enter_room', function(req, res) {
  const user = req.body;
  registeredMembers.push(user);
  res.status(200).json({members: registeredMembers});
});
app.post('/api/leave_room', function(req, res) {
  const user = req.body;
  registeredMembers.filter(member => member.id !== user.id);
  // console.log('');
  res.status(200).json({members: registeredMembers});
});
// message routes

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('****** listening on ' + port + ' ******');
  }
});
// Events 
// enter room
// update members
const io = SocketIo(server, {path: '/api/chat'});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('enter room', (user) => {
    console.log('enterd user: ', user);
    console.log(user + ' enters the room');
    registeredMembers.push(user);
    socket.broadcast.emit('update members', registeredMembers);
  });
});
