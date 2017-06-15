import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import chatApp from './reducers/';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.log('inner');
    console.group(action.type);
    console.log('%c pre state', 'color: gray',  store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    return returnValue;
  };
};
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(chatApp, persistedState);
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
    saveState({
      user: store.getState().user,
      members: store.getState().members,
    });
  }, 1000));
  return store;
};

export default configureStore;
