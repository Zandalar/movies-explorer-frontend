import React from 'react';
import { Route, Link } from 'react-router-dom';

function Hero({}) {
  return (
    <section className='section'>
      <div className='section__container'>
        <h1 className='section__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='section__list'>
          <li className='section__list-item'>
            <a href='#about' className='section__link'>О проекте</a>
          </li>
          <li className='section__list-item'>
            <a href='#' className='section__link'>Технологии</a>
          </li>
          <li className='section__list-item'>
            <a href='#' className='section__link'>Студент</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero;
