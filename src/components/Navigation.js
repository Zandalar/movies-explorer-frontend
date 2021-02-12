import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Header';

function Navigation({}) {
  return (
    <nav className='navigation'>
      <ul className='navigation__menu'>
        <li className='navigation__menu-item'>
          <Link to='sign-up'>
            <p className='navigation__button-signup'>Регистрация</p>
          </Link>
        </li>
        <li className='navigation__menu-item'>
          <Link to='sign-in'>
            <button className='navigation__button-signin'>Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
