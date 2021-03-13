import React from 'react';
import Header from '../Header/Header';
import Submit from '../Submit/Submit';
import useValidator from '../../hooks/useValidator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({loggedIn, onLogout, onUpdateUser}) {
  const [isEditActive, setIsEditActive] = React.useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = React.useState(false);
  const { values, errors, isValid, handleChange } = useValidator();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
        name: values.name,
        email: values.email,
      });
    setIsEditActive(false);
  }

  function editProfile() {
    setIsEditActive(true);
  }

  function checkNameInput(evt) {
    handleChange(evt);
    if (evt.target.value !== currentUser.name) {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }

  function checkEmailInput(evt) {
    handleChange(evt);
    if (evt.target.value !== currentUser.email) {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }

  React.useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__container' id='profile' onSubmit={handleSubmit} noValidate>
          <div className={`profile__info ${isEditActive && 'profile__info_active'}`}>
            <label
              className='profile__key'
              htmlFor='user__name'
            >
              Имя
            </label>
            {isEditActive
              ? <input
                  className={`profile__value ${isEditActive && 'profile__value_active'}`}
                  type='text'
                  id='user__name'
                  name='name'
                  disabled={!isEditActive && true}
                  minLength='2'
                  maxLength='40'
                  onChange={checkNameInput}
                  value={values.name || ''}
                  required
                />
              : <p className='profile__placeholder'>{currentUser.name}</p>
            }

          </div>
          <span
            className='profile__error'
            id='user__name-error'>
              {errors.name || ''}
          </span>
          <div className='profile__info'>
            <label
              className='profile__key'
              htmlFor='user__email'
            >
              Email
            </label>
            {isEditActive
              ? <input
                  className={`profile__value ${isEditActive && 'profile__value_active'}`}
                  type='email'
                  id='user__email'
                  name='email'
                  disabled={!isEditActive && true}
                  onChange={checkEmailInput}
                  value={values.email || ''}
                  required
                />
              : <p className='profile__placeholder'>{currentUser.email}</p>
            }

          </div>
          <span
            className='profile__error'
            id='user__email-error'>
              {errors.email || ''}
          </span>
        </form>
        {isEditActive
          ? <Submit
              buttonText='Сохранить'
              formId='profile'
              isValid={isValid}
              isActive={isSubmitButtonActive}
            />
          : <ul className='profile__menu'>
            <li className='profile__menu-item'>
              <button
                className='profile__button'
                type='button'
                onClick={editProfile}
              >
                Редактировать
              </button>
            </li>
            <li className='profile__menu-item'>
              <button
                className='profile__button profile__button_logout'
                type='button'
                onClick={onLogout}
              >
                Выйти из аккаунта
              </button>
            </li>
          </ul>
        }
      </main>
    </>
  )
}

export default Profile;
