import { BASE_URL, checkResponse } from './utils';

export function getUserInfo(token) {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(checkResponse);
}
