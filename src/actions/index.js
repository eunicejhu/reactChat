import { v4 } from 'uuid';
import { 
  ACTION_ENTER_ROOM,
  ACTION_LEAVE_ROOM, 
  ACTION_UPDATE_MEMBERS,  
  ACTION_SEND_MESSAGE, 
  ACTION_RECEIVE_MESSAGE, 
  ACTION_REGISTER_SOCKET } from '../utils/constants';

export const enterRoom = (username) => ({
  type: ACTION_ENTER_ROOM,
  id: v4(),
  username,
});

export const leaveRoom = (user) => {
  return ({
    type: ACTION_LEAVE_ROOM,
    user,
  });
};

export const updateMembers = (members) => {
  return ({
    type: ACTION_UPDATE_MEMBERS,
    members,
  });
};

export const sendMessage = (message) => ({
  type: ACTION_SEND_MESSAGE,
  ...message,
});

export const receiveMessage = (message) => ({
  type: ACTION_RECEIVE_MESSAGE,
  ...message,
});

export const registerSocket = (socket) => {
  console.log('socket: ', socket);
  return {
    type: ACTION_REGISTER_SOCKET,
    socket,
  };
};
// ({
//   type: ACTION_REGISTER_SOCKET,
//   socket,
// });