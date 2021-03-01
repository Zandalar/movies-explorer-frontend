import React from 'react';
import { Link } from 'react-router-dom';

function UserMenu({loggedIn}) {
  return (
    <ul className='user__menu'>
      <li className='user__menu-item'>
        <Link to={loggedIn ? '/profile' : 'signup'} className='user__button-signup'>{loggedIn ? 'Аккаунт' : 'Регистрация'}</Link>
      </li>
      <li className={loggedIn ? 'user__menu-item user__menu-item_login' : 'user__menu-item'}>
        <Link to={loggedIn ? '/profile' : 'signin'} className={loggedIn ? 'user__link' : 'user__link user__link_login'}>
          {loggedIn
            ? <button className='user__button-signin user__button-signin_login' />
            : <button className='user__button-signin'>Войти</button>
          }
        </Link>
      </li>
    </ul>
  )
}

export default UserMenu;
