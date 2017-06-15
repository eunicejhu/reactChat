import { 
  ACTION_REGISTER_SOCKET, 
  SOCKET_INITIAL_STATE } from '../utils/constants';

const socket  = (initialState = SOCKET_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_REGISTER_SOCKET: 
      return action.socket;
    default:
      return initialState;
  }
};

export default socket;