import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='Логотип сайта' />
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  )
}

export default Header;
