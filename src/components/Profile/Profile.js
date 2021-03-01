import React from 'react';
import Header from '../Header/Header';
import Submit from '../Submit/Submit';

function Profile({name, email, loggedIn, onLogout}) {
  const [isEditActive, setIsEditActive] = React.useState(false)

  function editProfile() {
    setIsEditActive(true);
  }

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
      <form className='profile__container' id='profile'>
        <div className={`profile__info ${isEditActive && 'profile__info_active'}`}>
          <label className='profile__key' htmlFor='name'>Имя</label>
          <input className={`profile__value ${isEditActive && 'profile__value_active'}`} type='text' id='name' value={name || ''} disabled={!isEditActive && true} />
        </div>
        <div className='profile__info'>
          <label className='profile__key' htmlFor='name'>Почта</label>
          <input className={`profile__value ${isEditActive && 'profile__value_active'}`} type='email' id='email' value={email || ''} disabled={!isEditActive && true} />
        </div>
      </form>
      {isEditActive
        ? <Submit
          buttonText='Сохранить'
          formId='profile'
          />
        : <ul className='profile__menu'>
          <li className='profile__menu-item'>
            <button className='profile__button' type='button' onClick={editProfile}>Редактировать</button>
          </li>
          <li className='profile__menu-item'>
            <button className='profile__button profile__button_logout' type='button' onClick={onLogout}>Выйти из аккаунта</button>
          </li>
        </ul>
      }
      </main>
    </>
  )
}

export default Profile;
