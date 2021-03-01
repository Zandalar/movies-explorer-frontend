import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
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
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

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

  React.useEffect(() => {
    moviesApi.getMovies()
      .then((data) => {
        setStatus(true)
        setErrorText('TEST test')
        console.log(data)
      })
      .catch((err) => console.log(`Что-то пошло не так :( ${err}`))
      .finally(setIsInfoTooltipPopupOpen(true));
  }, [])

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    }
  })

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Main loggedIn={loggedIn} />
        </Route>
        <Route exact path='/movies'>
          <Movies loggedIn={loggedIn} />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies loggedIn={loggedIn} />
        </Route>
        <Route exact path='/profile'>
          <Profile
            idName='profile'
            name='Виталий'
            email='test@test.com'
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/signup'>
          <Register />
        </Route>
        <Route exact path='/signin'>
          <Login />
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
        errorText={errorText}
      />
    </div>
  );
}

export default App;
