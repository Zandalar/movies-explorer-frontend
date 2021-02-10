import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({}) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__container'>
        <Route exact='/landing'>
          <Link to='/signup' />
          <Link to='/signin' />
        </Route>
      </div>
    </header>
  )
}

export default Header;
