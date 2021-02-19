import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/art-002-mcr.png'

function NotFound() {
  return(
    <section className='error__container'>
      <div className='error'>
        <p className='error__text'>E<span>r</span>ror</p>
        <p className='error__number'>4<span>0</span><span>4</span></p>
        <img className='error__logo' src={logo} alt='лого' />
      </div>
      <p className='error__message'>Страница не найдена</p>
      <Link className='error__link' to='/'>&#8920; Назад</Link>

    </section>
  )
}

export default NotFound;
