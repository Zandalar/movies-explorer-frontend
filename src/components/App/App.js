import React from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [status, setStatus] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState('');
  const [token, setToken] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isMoviesNotFound, setIsMoviesNotFound] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [initialSavedMovies, setInitialSavedMovies] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const location = useLocation().pathname;
  const history = useHistory();

  function handleRegister(name, email, password) {
    setIsLoading(true);
    api.register(name, email, password)
      .then(() => {
        setInfoMessage('Вы успешно зарегистрировались!');
        setStatus(true);
        setIsLoading(false);
        history.push('/signin');
      })
      .catch((err) => {
        setStatus(false);
        if (err.status === 400) {
          setInfoMessage('Некорректно заполнено одно из полей');
        } else if (err.status === 409) {
          setInfoMessage('Такой пользователь уже зарегистрирован');
        } else {
          setInfoMessage(`Ошибка: ${err.status}`);
        }
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      })
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    api.authorize(email, password)
      .then(data => {
        setInfoMessage('Вы успешно авторизовались!');
        localStorage.setItem('jwt', data.token);
        setToken(data.token);
        setLoggedIn(true);
        setStatus(true);
        setIsLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setStatus(false);
        setIsInfoTooltipPopupOpen(true)
        if (err.status === 400) {
          setInfoMessage('Не передано одно из полей');
        } else if (err.status === 401) {
          setInfoMessage('Пользователь не найден, либо неверно указаны данные.');
        } else if (err.status === 429) {
          setInfoMessage(`Ошибка: ${err.status}. Слишком много запросов. Попробуйте позже`);
        } else {
          setInfoMessage(`Ошибка: ${err.status}`);
        }
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      })
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/signin');
    setLoggedIn(false);
  }

  function getToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      setToken(jwt);
      api.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          history.push('/');
        })
        .catch((err) => {
          if (err.status === 401) {
            console.log('Токен не передан или передан не в том формате')
          }
          console.log(new Error(err.status))
        })
    }
  }

  function handleUpdateUser(user) {
    setIsLoading(true);
    api.setUserInfo(user, token)
      .then((res) => {
        setCurrentUser(res);
        setStatus(true);
        setIsLoading(false);
        setInfoMessage('Вы успешно изменили данные')
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      })
  }

  function getSavedMovies() {
      api.getSavedMovies()
        .then((movies) => {
          setInitialSavedMovies(movies);
        })
        .catch((err) => {
          setIsMoviesNotFound(true);
          setInitialSavedMovies([]);
          console.log(`Нет сохраненных фильмов ${err}`)
        })
  }

  function handleEscClick(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function isolatePopup(evt) {
    evt.stopPropagation();
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }

  function updateWidth() {
    setWindowWidth(window.innerWidth);
  }

  function handleSearch(checked) {
    setIsLoading(true);
    let sortedMovies;
    const word = localStorage.getItem('keyword') || '';
    const filteredMovies = location === '/movies' ? initialMovies : initialSavedMovies;

    if (word.length > 0) {
      sortedMovies = filteredMovies.filter(movie => JSON.stringify(movie).toLowerCase().includes(word.toLowerCase()));
      if (checked) {
        location === '/movies'
        ? setMovies(sortedMovies.filter(movie => movie.duration <= 40))
        : setSavedMovies(sortedMovies.filter(movie => movie.duration <= 40))
      } else {
        location === '/movies'
        ? setMovies(sortedMovies)
        : setSavedMovies(sortedMovies)
      }
    }
    setIsLoading(false);
  }

  function handleSaveMovie(movie) {
    api.saveMovie(movie)
      .then(() => {
        getSavedMovies();
        const newSavedMovie = initialMovies.find(item => item.id === movie.id);
        newSavedMovie.saved = true;
        setInitialMovies(initialMovies.map(item => item.id === newSavedMovie.id ? newSavedMovie : item));
        localStorage.setItem('movies', JSON.stringify(initialMovies));
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleDeleteMovie(movie) {
    const deletedMovie = initialSavedMovies.find((item) => item.movieId === movie.id);
    api.deleteMovie(deletedMovie._id)
      .then(() => {
        getSavedMovies();
        const deletedFilm = initialMovies.find(item => item === movie);
        delete deletedFilm.saved;
        setInitialMovies(initialMovies.map(item => item.id === deletedFilm.id ? deletedFilm : item));
        localStorage.setItem('movies', JSON.stringify(initialMovies));
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  function handleDeleteSavedMovie(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        getSavedMovies();
        const newMovies = savedMovies.filter(item => item !== movie);
        const deletedMovie = initialMovies.find(item => item.id === movie.movieId);
        delete deletedMovie.saved;
        setSavedMovies(newMovies);
        setInitialMovies(initialMovies.map(item => item.id === deletedMovie.id ? deletedMovie : item));
        localStorage.setItem('movies', JSON.stringify(initialMovies));
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
  }

  React.useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Что-то пошло не так :( ${err}`));
    }
  }, [loggedIn])

  React.useEffect(() => {
    getToken();
    getSavedMovies();
    if (localStorage.getItem('movies') === null) {
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          setInitialMovies(res);
        })
    } else {
      setInitialMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('keydown', handleEscClick);
    }
  })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
              windowWidth={windowWidth}
            />
          </Route>
          <Route exact path='/movies'>
            <Movies
              movies={movies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              handleSearch={handleSearch}
              windowWidth={windowWidth}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isMoviesNotFound={isMoviesNotFound}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              savedMovies={savedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              handleSearch={handleSearch}
              windowWidth={windowWidth}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteSavedMovie}
              isMoviesNotFound={isMoviesNotFound}
            />
          </Route>
          <Route exact path='/profile'>
            <Profile
              loggedIn={loggedIn}
              onLogout={handleLogout}
              onUpdateUser={handleUpdateUser}
            />
          </Route>
          <Route exact path='/signup'>
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path='/signin'>
            <Login
              onLogin={handleLogin}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          isolatePopup={isolatePopup}
          status={status}
          infoMessage={infoMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
