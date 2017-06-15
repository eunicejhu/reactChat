import { ACTION_ENTER_ROOM, USER_INITIAL_STATE } from '../utils/constants';
const INITIAL_STATE = USER_INITIAL_STATE;
const user = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_ENTER_ROOM: 
      const newUser = {
        id: action.id,
        username: action.username,
      };
      return newUser;     
    default:
      return initialState;
  }
};

export default user;