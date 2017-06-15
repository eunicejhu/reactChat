import { combineReducers } from 'redux';
import members from './members';
import user from './user';
import message from './message';
import socket from './socket';

const chatApp = combineReducers({
  members,
  user,
  message,
  socket,
});


export default chatApp;