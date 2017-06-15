const UPDATE_MEMBERS = 'UPDATE_MEMBER';
const INITIAL_STATE = [
  {id: 1, username: 'eunice'},
   {id: 2, username: 'peter'},
   {id: 3, username: 'isabella'},
    {id: 0, username: 'anonyme'},
];
const members = (initialState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MEMBERS:
      return action.members;
    default:
      return initialState;
  }
};

export default members;