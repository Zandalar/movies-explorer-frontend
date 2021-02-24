import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Login({}) {
  return (
    <section className='login'>
      <WelcomeScreen title='Рады видеть!' />
      <Form
        buttonText='Войти'
        descriptionMessage='Ещё не зарегистрированы?'
        formId='login'
        linkMessage='Регистрация'
      />
    </section>
  )
}

export default Login;
