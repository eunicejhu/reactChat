const SEND_MESSAGE = 'SEND_MESSAGE';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const INITIAL_STATE = { 
  sender: {id: 'infinite', username: 'ZUOQIN'},
  content: 'Welcome to chat!',
};
const message  = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      console.log('action in message reducer:', action);
      return { 
        sender: action.sender, 
        content: action.content,
      };
    case RECEIVE_MESSAGE:
      return  { message: action.message };
    default:
      return initialState;
  }
};

export default message;