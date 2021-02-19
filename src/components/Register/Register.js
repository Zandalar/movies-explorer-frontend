import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Register({}) {
  return (
      <body className='register'>
        <WelcomeScreen title='Добро пожаловать!' />
        <Form
          buttonText='Зарегистрироваться'
          descriptionMessage='Уже зарегистрированы?'
          formId='register'
          linkMessage='Войти'
        />
      </body>
  )
}

export default Register;
