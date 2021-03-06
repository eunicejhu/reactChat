import { ACTION_UPDATE_MEMBERS, MEMBERS_INITIAL_STATE } from '../utils/constants';
const members = (initialState = MEMBERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_UPDATE_MEMBERS:
      return action.members;
    default:
      return initialState;
  }
};

export default members;