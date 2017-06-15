import { enterRoom, leaveRoom  } from '../api';

const ENTER_ROOM = 'ENTER_ROOM';
const LEAVE_ROOM = 'LEAVE_ROOM';
const INITIAL_STATE = {
  id: 0,
  username: 'anonyme',
};
const user = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_ROOM: 
      // TODO: 
      // 1. Post a user to  server, tell it a user enter room
      const newUser = {
        id: action.id,
        username: action.username,
      };
      // enterRoom(newUser)
      //   .then(res => {res.json();})
      //   .then(members => {
      //     browserHistory.push('/chat');
      //     console.log("members: ", members);
      //   });
      return newUser;     
      // 2. await res from server, {members, user}
    case LEAVE_ROOM:
      // TODO:
      // 1. Client post the user to server, tell it this user is gonna leave, 
      // 2. server will remove it from members
      // 3. emit a leave event to all other members with the DATA[members]
      // 4. Client get triggered by the leave event, update its stores with updated members.
      try {
        leaveRoom(user)
          .then(res => {
            if (res.ok) {
              // return 
              return INITIAL_STATE;
            }
            return initialState;
          })
          .catch(err => {
            console.log(err);
            return initialState;
          });
      } catch (err) {
        console.log(err);
        return initialState;
      }
      return initialState;
    default:
      return initialState;
  }
};

export default user;