import React from 'react';
import { useLocation } from 'react-router-dom';
import Submit from '../Submit/Submit';
import useValidator from '../../hooks/useValidator';

function Form({buttonText, descriptionMessage, formId, linkMessage, onRegister, onLogin}) {
  const { values, errors, isValid, handleChange, resetForm } = useValidator();
  const location = useLocation().pathname;
  const focus = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    location === '/signup'
    ? onRegister(
        values.name,
        values.email,
        values.password
      )
    : onLogin(
        values.email,
        values.password
      )
  }

  React.useEffect(() => {
    resetForm();
    setTimeout(() => {focus.current.focus()}, 0)
  }, []);

  return (
    <section className='form__section'>
      <form className='form' id={formId} onSubmit={handleSubmit} noValidate>
        {location === '/signup' &&
        <label className='form__label' htmlFor='profile__name'>Имя</label>
        }
        {location === '/signup' &&
        <input
          ref={focus}
          className='form__input'
          id='profile__name'
          name='name'
          type='text'
          minLength='2'
          maxLength='40'
          onChange={handleChange}
          value={values.name || ''}
          required
        />
        }
        {location === '/signup' &&
        <span
          className='form__error'
          id='profile__description-error'>
          {errors.name || ''}
        </span>
        }
        <label className='form__label' htmlFor='profile__email'>E-mail</label>
        <input
          ref={focus}
          className='form__input'
          id='profile__email'
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email || ''}
          required
        />
        <span
          className='form__error'
          id='profile__description-error'>
          {errors.email || ''}
        </span>
        <label className='form__label' htmlFor='profile__password'>Пароль</label>
        <input
          className='form__input'
          id='profile__password'
          name='password'
          type='password'
          minLength='5'
          maxLength='30'
          onChange={handleChange}
          value={values.password || ''}
          required
        />
        <span
          className='form__error'
          id='profile__description-error'>
          {errors.password || ''}
        </span>
      </form>
      <Submit
        buttonText={buttonText}
        descriptionMessage={descriptionMessage}
        formId={formId}
        linkMessage={linkMessage}
        isValid={isValid}
      />
    </section>
  )
}

export default Form;
