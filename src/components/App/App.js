import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { errors } from '../../utils/utils';
import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [infoMessage, setInfoMessage] = React.useState('');
  const [token, setToken] = React.useState('');
  const [moviesMessage, setMoviesMessage] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
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
        handleLogin(email, password)
        history.push('/movies');
      })
      .catch((err) => {
        setInfoMessage(errors(err));
        setStatus(false);
      })
      .finally(() => {
        setIsLoading(false);
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
        history.push('/movies');
      })
      .catch((err) => {
        setInfoMessage(errors(err));
        setStatus(false);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInfoTooltipPopupOpen(true);
      })
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    history.push('/');
    setLoggedIn(false);
    localStorage.clear();
  }

  function getToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      setToken(jwt);
      api.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          history.push('/movies');
        })
        .catch(err => setInfoMessage(errors(err)))
    }
  }

  function handleUpdateUser(user) {
    api.setUserInfo(user, token)
      .then((res) => {
        setCurrentUser(res);
        setStatus(true);
        setInfoMessage('Вы успешно изменили данные')
      })
      .catch(err => setInfoMessage(errors(err)))
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
          setInfoMessage(errors(err));
          setInitialSavedMovies([]);
        })
  }

  function handleSearch(checked) {
    setTimeout(() => {
      setIsLoading(true);
    }, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    let sortedMovies;
    const word = localStorage.getItem('keyword') || '';
    const filteredMovies = location === '/movies' ? initialMovies : initialSavedMovies;

    if (word.length > 0) {
      sortedMovies = filteredMovies.filter(movie => JSON.stringify(movie).toLowerCase().includes(word.toLowerCase()));
      sortedMovies.length === 0 && setMoviesMessage('Ничего не найдено');
      if (checked) {
        location === '/movies'
        ? setMovies(sortedMovies.filter(movie => movie.duration <= 40))
        : setSavedMovies(sortedMovies.filter(movie => movie.duration <= 40))
      } else {
        location === '/movies'
        ? setMovies(sortedMovies)
        : setSavedMovies(sortedMovies)
      }
    } else {
      setMovies([]);
      setSavedMovies([]);
      setMoviesMessage('Нужно ввести ключевое слово');
    }
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
      .catch(err => setInfoMessage(errors(err)))
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
      .catch(err => setInfoMessage(errors(err)))
  }

  function handleDeleteSavedMovie(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        const newMovies = savedMovies.filter(item => item !== movie);
        const deletedMovie = initialMovies.find(item => item.id === movie.movieId);
        delete deletedMovie.saved;
        setSavedMovies(newMovies);
        setInitialMovies(initialMovies.map(item => item.id === deletedMovie.id ? deletedMovie : item));
        localStorage.setItem('movies', JSON.stringify(initialMovies));
      })
      .catch(err => setInfoMessage(errors(err)))
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

  React.useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(err => setInfoMessage(errors(err)))
    }
  }, [loggedIn])

  React.useEffect(() => {
    getToken();

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
    getSavedMovies();
  }, [savedMovies])

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
          <ProtectedRoute
            exact path='/movies'
            component={Movies}
            movies={movies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            handleSearch={handleSearch}
            windowWidth={windowWidth}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            moviesMessage={moviesMessage}
          >
          </ProtectedRoute>
          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMovies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            handleSearch={handleSearch}
            windowWidth={windowWidth}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteSavedMovie}
            moviesMessage={moviesMessage}
          >
          </ProtectedRoute>
          <ProtectedRoute
            exact path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
          >
          </ProtectedRoute>
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
