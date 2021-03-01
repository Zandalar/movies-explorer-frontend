import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Login({onLogin, isLoading}) {
  return (
    <main className='login'>
      <WelcomeScreen title='Рады видеть!' />
      <Form
        buttonText='Войти'
        descriptionMessage='Ещё не зарегистрированы?'
        formId='login'
        linkMessage='Регистрация'
        onLogin={onLogin}
        isLoading={isLoading}
      />
    </main>
  )
}

export default Login;
