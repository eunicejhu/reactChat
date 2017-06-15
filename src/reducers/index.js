import { combineReducers } from 'redux';
import members from './members';
import user from './user';
import message from './message';

const chatApp = combineReducers({
  members,
  user,
  message,
});


export default chatApp;