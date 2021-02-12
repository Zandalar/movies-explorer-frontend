import React from 'react';
import { Route, Link } from 'react-router-dom';

function About({}) {
  return (
    <section className='section' id='about'>
      <h2 className='section__title'>О проекте</h2>
      <div className='section__container'>
        <div className='section__card'>
          <h3 className='section__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='section__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='section__card'>
          <h3 className='section__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='section__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <ul className='section__list section__list_about'>
        <li className='section__list-item section__list-item_about'>
          <p className='section__text'>1 неделя</p>
        </li>
        <li className='section__list-item section__list-item_about'>
          <p className='section__text'>4 недели</p>
        </li>
        <li className='section__list-item section__list-item_about'>
          <p className='section__text'>Back-end</p>
        </li>
        <li className='section__list-item section__list-item_about'>
          <p className='section__text'>Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default About;
