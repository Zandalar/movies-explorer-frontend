import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Submit({buttonText, formId, descriptionMessage, linkMessage, isValid, isActive}) {
  const location = useLocation().pathname;

  return (
    <section className='submit'>
      {location === '/profile'
        ? <button
            className={`submit__button ${(!isValid || !isActive) && 'submit__button_disabled'}`}
            type='submit'
            form={formId}
            disabled={(!isValid || !isActive) && true}
          >
          {buttonText}
          </button>
        : <button
            className={`submit__button ${!isValid && 'submit__button_disabled'}`}
            type='submit'
            form={formId}
            disabled={!isValid && true}
          >
          {buttonText}
          </button>
      }
      <p className='submit__message'>
        {descriptionMessage}&ensp;
        <Link
          to={location === '/signup'
          ? '/signin'
          : '/signup'
        }
          className='submit__link'
        >
          {linkMessage}
        </Link>
      </p>
    </section>
  )
}

export default Submit;
