import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';
import Submit from '../Submit/Submit';

function Register({}) {
  return (
      <body className='register'>
        <WelcomeScreen title='Добро пожаловать!' />
        <Form idName='register' />
        <Submit
          buttonText='Зарегистрироваться'
          descriptionMessage='Уже зарегистрированы?'
          formId='register'
          linkMessage='Войти'
        />
      </body>
  )
}

export default Register;
