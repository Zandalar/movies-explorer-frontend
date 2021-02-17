import React from 'react';
import Form from '../Form/Form';

function Profile({name, idName}) {
  return (
    <section className='profile'>
      <h1 className='profile__title'>`Привет, ${name}!`</h1>
      <Form idName={idName} />
      <ul className='profile__menu'>
        <li className='profile__menu-item'>
          <button className='profile__edit' type='submit' form={idName}>Редактировать</button>
        </li>
        <li className='profile__menu-item'>
          <button className='profile__logout' type='submit'>Выйти из аккаунта</button>
        </li>
      </ul>
    </section>
  )
}

export default Profile;
