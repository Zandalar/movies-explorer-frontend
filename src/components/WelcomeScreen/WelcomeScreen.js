import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';

function WelcomeScreen({title}) {
  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
  }

  return (
    <section className='welcome-screen'>
      <img
        className='welcome-screen__logo'
        src={logo}
        alt='Логотип сайта'
        onClick={handleLogoClick}
      />
      <h1 className='welcome-screen__title'>{title}</h1>
    </section>
  )
}

export default WelcomeScreen;
