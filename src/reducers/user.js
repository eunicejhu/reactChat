const ENTER_ROOM = 'ENTER_ROOM';
const INITIAL_STATE = {
  id: 0,
  username: 'anonyme',
  socket: '',
};
const user = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_ROOM: 
      const newUser = {
        id: action.id,
        username: action.username,
        socket: action.socket,
      };
      return newUser;     
    default:
      return initialState;
  }
};

export default user;