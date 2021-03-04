import { MAIN_URL, MOVIES_URL, checkResponse } from './utils';

export function register(name, email, password) {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse);
}

export function authorize(email, password) {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
}

export function checkToken(jwt) {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  })
    .then(checkResponse);
}

export function getUserInfo(token) {
  return fetch(`${MAIN_URL}/users/me`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

export function setUserInfo(data, token) {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
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
  } = movie;
  return fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      nameRU,
      nameEN,
      movieId: movie.id,
    })
  })
    .then(checkResponse);
}

export function deleteMovie(id) {
  return fetch(`${MAIN_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

export function getSavedMovies() {
  return fetch(`${MAIN_URL}/movies`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(checkResponse);
}

