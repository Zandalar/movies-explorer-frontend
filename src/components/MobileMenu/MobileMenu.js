import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({handleMenuClick, isMobileMenuOpened}) {
  return (
    <section className={isMobileMenuOpened ? 'menu menu_opened' : 'menu'}>
      <button className='menu__button-close' onClick={handleMenuClick} />
      <div className='menu__container'>
        <ul className='menu__list'>
          <li className='menu__list-item'>
            <Link to='/' className='menu__link' onClick={handleMenuClick}>Главная</Link>
          </li>
          <li className='menu__list-item'>
            <Link to='/movies' className='menu__link' onClick={handleMenuClick}>Фильмы</Link>
          </li>
          <li className='menu__list-item'>
            <Link to='/saved-movies' className='menu__link' onClick={handleMenuClick}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <div className='menu__profile'>
          <Link to='/profile' className='menu__profile-link' onClick={handleMenuClick}>Аккаунт</Link>
          <Link to='/profile' className='menu__profile-link'>
            <button className='menu__profile-button' type='button' onClick={handleMenuClick} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MobileMenu;
