import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Form from '../Form/Form';

function Login({onLogin, isLoading}) {
  return (
    <main className='login'>
      <WelcomeScreen title='Рады видеть!' />
      <Form
        buttonText={isLoading ? 'Вход...' : 'Войти'}
        descriptionMessage='Ещё не зарегистрированы?'
        formId='login'
        linkMessage='Регистрация'
        onLogin={onLogin}
      />
    </main>
  )
}

export default Login;
