import { v4 } from 'uuid';

export const enterRoom = (username, socket) => ({
  type: 'ENTER_ROOM',
  id: v4(),
  username,
  socket,
});

export const leaveRoom = (user) => {
  return ({
    type: 'LEAVE_ROOM',
    user,
  });
};

export const updateMembers = (members) => {
  return ({
    type: 'UPDATE_MEMBERS',
    members,
  });
};

export const sendMessage = (message) => ({
  type: 'SEND_MESSAGE',
  ...message,
});

export const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  message,
});