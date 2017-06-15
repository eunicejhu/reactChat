const _ = require('lodash');
const path = require('path');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;

let registeredMembers = {}; //{socket.id: user};
app.use(express.static(path.join(__dirname, '../src/build/')));
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
  console.log('request coming');
  res.sendFile(path.join(__dirname, '../src/build/index.html'));
});
const server = app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('****** listening on ' + port + ' ******');
  }
});

const io = require('socket.io').listen(server, {path: '/api/chat'});

// TODO: 
// 1. when user close the tab or window, socket is disconnected, server should remove this user from members


// Events 
// enter room
// update members
// const io = SocketIo(server, {path: '/api/chat'});
io.on('connection', (socket) => {
  socket.on('enter room', (user) => {
    registeredMembers[socket.id] = user;
    const members = _.values(registeredMembers);
    // broadcast targets others but sender, but we need the sender get the existing members
    socket.emit('update members', members);
    socket.broadcast.emit('update members', members);
  });
  socket.on('send message', (message) => {
    socket.broadcast.emit('receive message', message);
  });
  // in case of click a button. etc
  socket.on('end', () => {
    delete registeredMembers[socket.id];
    socket.broadcast.emit('update members', _.values(registeredMembers));
    socket.disconnect();
  });
  // in case of close window
  socket.on('disconnect', () => {
    delete registeredMembers[socket.id];
    socket.broadcast.emit('update members', _.values(registeredMembers));
    socket.disconnect();
  });
});

