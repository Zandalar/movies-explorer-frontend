import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
  const [isMoviesNotFound, setIsMoviesNotFound] = React.useState(false);

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

  function handleSearch(keyword, checked) {
    setMovies([]);
    localStorage.removeItem('movies');
    localStorage.removeItem('keyword');
    let moviesList = [];
    moviesApi.getMovies()
      .then((data) => {
        if (checked) {
          data.filter((movie) => {
            if (JSON.stringify(movie).toLowerCase().includes(keyword.toLowerCase()) && movie.duration <= 40) {
              moviesList.push(movie);
            }
          })
        } else {
          data.filter((movie) => {
            if (JSON.stringify(movie).toLowerCase().includes(keyword.toLowerCase())) {
              moviesList.push(movie);
            }
          })
        }
        localStorage.setItem('keyword', keyword);
        localStorage.setItem('movies', JSON.stringify(movies));
        console.log(JSON.parse(localStorage.getItem('movies')));
        moviesList.length === 0 && setIsMoviesNotFound(true);
        setMovies(moviesList);
      })
      .catch((err) => {

      })
  }

  React.useEffect(() => {
    if (loggedIn) {
      Promise.resolve(api.getUserInfo(token))
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
    }
  }, [loggedIn])

  React.useEffect(() => {
    getToken();
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    }
  })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path='/movies'>
            <Movies
              movies={movies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              handleSearch={handleSearch}
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              movies={movies}
              loggedIn={loggedIn}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path='/profile'>
            <Profile
              idName='profile'
              name='Виталий'
              email='test@test.com'
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
