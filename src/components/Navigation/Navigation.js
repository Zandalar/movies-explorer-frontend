import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import FilmsMenu from './FilmsMenu/FilmsMenu';

function Navigation({loggedIn}) {
  return (
    <nav className={loggedIn ? 'navigation' : 'navigation navigation_logout'}>
      {loggedIn && <FilmsMenu />}
      <UserMenu loggedIn={loggedIn}/>
    </nav>
  )
}

export default Navigation;
