import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';

const WelcomeScreen = memo(({title}) => {
  const history = useHistory();

  const handleLogoClick = useCallback(() => history.push('/'), [])

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
})

export default WelcomeScreen;
