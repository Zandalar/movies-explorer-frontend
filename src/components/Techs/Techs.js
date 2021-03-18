import React, { memo } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Techs = memo(() => (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <SectionTitle title='Технологии' />
        <div className='techs__content'>
          <h2 className='techs__title'>7 технологий</h2>
          <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__list'>
            <li className='techs__list-item'>
              <p className='techs__list-text'>HTML</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>CSS</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>JS</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>React</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>Git</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>Express.js</p>
            </li>
            <li className='techs__list-item'>
              <p className='techs__list-text'>MongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
)

export default Techs;