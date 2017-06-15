import fetch from 'isomorphic-fetch';

const HOST = 'http://localhost:3001';
const ENTER_ROOM_API = HOST + '/api/enter_room';
const HTTP_POST = 'post';
const CONTENT_TYPE_JSON = 'application/json';

export const enterRoom = (user) => {
  return fetch(ENTER_ROOM_API, {
    method: HTTP_POST,
    headers: { 
      'Accept': CONTENT_TYPE_JSON, 
      'Content-Type': CONTENT_TYPE_JSON,
    },
    body: JSON.stringify(user),
  });
};

