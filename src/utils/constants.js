export const SOCKET_HOST = 'http://localhost:3001';

export const SOCKET_PATH = '/api/chat';

export const MEMBERS_INITIAL_STATE = [];
export const USER_INITIAL_STATE = {
  id: 0,
  username: 'anonyme',
};
export const MESSAGE_INITIAL_STATE = { 
  sender: {id: 'infinite', username: 'ZUOQIN'},
  content: 'Welcome to chat!',
};
export const SOCKET_INITIAL_STATE = '';

// actions
export const ACTION_ENTER_ROOM = 'ENTER_ROOM';
export const ACTION_LEAVE_ROOM = 'LEAVE_ROOM';
export const ACTION_UPDATE_MEMBERS = 'UPDATE_MEMBERS';
export const ACTION_SEND_MESSAGE = 'SEND_MESSAGE';
export const ACTION_RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const ACTION_REGISTER_SOCKET = 'REGISTER_SOCKET';

