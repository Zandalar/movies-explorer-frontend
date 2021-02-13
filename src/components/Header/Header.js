import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({}) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__container'>
        <Route exact='/landing'>
          <Navigation />
        </Route>
      </div>
    </header>
  )
}

export default Header;
