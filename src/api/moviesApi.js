import { MOVIES_URL, checkResponse, baseHeaders } from '../utils';

export function getMovies() {
  return fetch(`${MOVIES_URL}/beatfilm-movies`, {
    headers: baseHeaders,
  })
    .then(checkResponse);
}
