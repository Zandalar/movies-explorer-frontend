import { MOVIES_URL, checkResponse } from './utils';

export function getMovies() {
  return fetch(MOVIES_URL, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(checkResponse);
}