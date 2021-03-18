import { MAIN_URL, MOVIES_URL, checkResponse, baseHeaders } from '../utils';

export const register = async (name, email, password) => {
  const res = await fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(res);
}

export function authorize(email, password) {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
}

export function checkToken(jwt) {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${jwt}`,
    },
  })
    .then(checkResponse);
}

export function getUserInfo() {
  return fetch(`${MAIN_URL}/users/me`, {
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

export function setUserInfo({name, email}) {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then(checkResponse);
}

export function saveMovie(movie) {
  const {
    country,
    director,
    duration,
    year,
    description,
    nameRU,
    nameEN,
    image,
    trailerLink,
    id
  } = movie;
  return fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${MOVIES_URL}${image.url}`,
      trailer: trailerLink,
      thumbnail: `${MOVIES_URL}${image.formats.thumbnail.url}`,
      nameRU,
      nameEN,
      movieId: id,
    })
  })
    .then(checkResponse);
}

export function deleteMovie(id) {
  return fetch(`${MAIN_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

export function getSavedMovies() {
  return fetch(`${MAIN_URL}/movies`, {
    headers: {
      ...baseHeaders,
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

