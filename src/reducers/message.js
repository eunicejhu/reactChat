import { 
  ACTION_SEND_MESSAGE, 
  ACTION_RECEIVE_MESSAGE, 
  MESSAGE_INITIAL_STATE } from '../utils/constants';

const message  = (initialState = MESSAGE_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_SEND_MESSAGE: 
      return { 
        sender: action.sender, 
        content: action.content,
      };
    case ACTION_RECEIVE_MESSAGE:
      return  { 
        sender: action.sender, 
        content: action.content,
      };
    default:
      return initialState;
  }
};

export default message;