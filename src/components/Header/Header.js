import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn, windowWidth}) {
  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='Логотип сайта' onClick={handleLogoClick} />
        <Navigation
          loggedIn={loggedIn}
          windowWidth={windowWidth}
        />
      </div>
    </header>
  )
}

export default Header;
