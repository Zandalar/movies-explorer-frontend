import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

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
      </Switch>
    </div>
  );
}

export default App;
