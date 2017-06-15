const CHAT_STATE = 'chatState';
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(CHAT_STATE);
    return  serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    loadState.setItem(CHAT_STATE, serializedState);
  } catch (err) {
    console.log('failed to store in localStorage');
  }
  
};