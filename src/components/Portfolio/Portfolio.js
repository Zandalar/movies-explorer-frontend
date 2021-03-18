import React from 'react';

const Portfolio = () => (
  <section className='portfolio'>
    <h3 className='portfolio__title'>Портфолио</h3>
    <ul className='portfolio__list'>
      <li className='portfolio__list-item'>
        <a className='portfolio__link' href='https://zandalar.github.io/how-to-learn/' target='_blank'>Статичный сайт</a>
        <a className='portfolio__link' href='https://zandalar.github.io/how-to-learn/' target='_blank'>&#8599;</a>
      </li>
      <li className='portfolio__list-item'>
        <a className='portfolio__link' href='https://zandalar.github.io/russian-travel/' target='_blank'>Адаптивный сайт</a>
        <a className='portfolio__link' href='https://zandalar.github.io/russian-travel/' target='_blank'>&#8599;</a>
      </li>
      <li className='portfolio__list-item'>
        <a className='portfolio__link' href='https://masich.students.nomoredomains.rocks' target='_blank'>Одностраничное приложение</a>
        <a className='portfolio__link' href='https://masich.students.nomoredomains.rocks' target='_blank'>&#8599;</a>
      </li>
    </ul>
  </section>
)

export default Portfolio;