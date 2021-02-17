import React from 'react';

function Form({idName}) {
  return (
    <form className='form' id={idName}>
      <label htmlFor='profile__name' className='form__label'>Name</label>
      <input
        className='form__input'
        id='profile__name'
        name='name'
        type='text'
        minLength='2'
        maxLength='40'
        required
      />
      <label htmlFor='profile__email' className='form__label'>Email</label>
      <input
        className='form__input'
        id='profile__email'
        name='email'
        type='text'
        required
      />
    </form>
  )
}

export default Form;
