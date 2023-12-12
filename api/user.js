/** @format */

import { ROOT, USER_URL } from './constant';
export const createHeader = function (method, body) {
  const header = {
    method: method ?? 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  };
  return header;
};
const getUser = () => {
  return fetch(ROOT + USER_URL).then((response) => response.json());
};
const createUser = (data) => {
  return fetch(ROOT + USER_URL, createHeader('POST', data)).then((response) =>
    response.json()
  );
};
export const users = {
  getUser,
  createUser,
};
