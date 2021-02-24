import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Register({}) {
  return (
      <section className='register'>
        <WelcomeScreen title='Добро пожаловать!' />
        <Form
          buttonText='Зарегистрироваться'
          descriptionMessage='Уже зарегистрированы?'
          formId='register'
          linkMessage='Войти'
        />
      </section>
  )
}

export default Register;
