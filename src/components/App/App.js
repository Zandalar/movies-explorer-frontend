import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header
            loggedIn={loggedIn}
          />
          <Main />
          <Footer />
        </Route>
        <Route exact path='/movies'>
          <Header
            loggedIn={loggedIn}
          />
          <Movies />
          <Footer />
        </Route>
        <Route exact path='/saved-movies'>
          <Header
            loggedIn={loggedIn}
          />
          <SavedMovies />
          <Footer />
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
      </Switch>
    </div>
  );
}

export default App;
