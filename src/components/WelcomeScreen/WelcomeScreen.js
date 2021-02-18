import React from 'react';
import logo from '../../images/logo.svg';

function WelcomeScreen({title}) {
  return (
    <header className='welcome-screen'>
      <img className='welcome-screen__logo' src={logo} alt='Логотип сайта'/>
      <h1 className='welcome-screen__title'>{title}</h1>
    </header>
  )
}

export default WelcomeScreen;
