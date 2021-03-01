import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Register({onRegister, isLoading}) {
  return (
    <main className='register'>
      <WelcomeScreen title='Добро пожаловать!' />
      <Form
        buttonText='Зарегистрироваться'
        descriptionMessage='Уже зарегистрированы?'
        formId='register'
        linkMessage='Войти'
        onRegister={onRegister}
        isLoading={isLoading}
      />
    </main>
  )
}

export default Register;
