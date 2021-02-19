import React from 'react';
import { useLocation } from 'react-router-dom';
import Submit from '../Submit/Submit';

function Form({buttonText, descriptionMessage, formId, linkMessage}) {
  const location = useLocation().pathname;

  return (
    <section className='form__section'>
      <form className='form' id={formId}>
        {location === '/signup' &&
        <label className='form__label' htmlFor='profile__name'>Имя</label>
        }
        {location === '/signup' &&
        <input
          className='form__input'
          id='profile__name'
          name='name'
          type='text'
          minLength='2'
          maxLength='40'
          required
        />
        }
        {location === '/signup' &&
        <span
          className='form__error'
          id='profile__description-error'>

        </span>
        }
        <label className='form__label' htmlFor='profile__email'>E-mail</label>
        <input
          className='form__input'
          id='profile__email'
          name='email'
          type='email'
          required
        />
        <span
          className='form__error'
          id='profile__description-error'>

      </span>
        <label className='form__label' htmlFor='profile__password'>Пароль</label>
        <input
          className='form__input'
          id='profile__password'
          name='password'
          type='password'
          minLength='5'
          maxLength='30'
          required
        />
        <span
          className='form__error'
          id='profile__description-error'>

      </span>
      </form>
      <Submit
        buttonText={buttonText}
        descriptionMessage={descriptionMessage}
        formId={formId}
        linkMessage={linkMessage}
      />
    </section>
  )
}

export default Form;
