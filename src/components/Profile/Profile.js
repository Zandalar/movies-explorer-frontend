import React from 'react';

function Profile({name, email}) {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
      <div className='profile__container'>
        <div className='profile__info'>
          <p className='profile__key'>Имя</p>
          <p className='profile__value'>{name}</p>
        </div>
        <div className='profile__info'>
          <p className='profile__key'>Почта</p>
          <p className='profile__value'>{email}</p>
        </div>
      </div>
      <ul className='profile__menu'>
        <li className='profile__menu-item'>
          <button className='profile__edit' type='button'>Редактировать</button>
        </li>
        <li className='profile__menu-item'>
          <button className='profile__logout' type='button'>Выйти из аккаунта</button>
        </li>
      </ul>
    </section>
  )
}

export default Profile;
