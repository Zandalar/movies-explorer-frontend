import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/author.png';

function AboutMe({}) {
  return (
    <section className='student' id='student'>
      <SectionTitle title='Студент' />
      <div className='student__container'>
      <div className='student__content'>
        <h2 className='student__title'>Виталий</h2>
        <p className='student__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='student__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
          «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className='student__list'>
          <li className='student__list-item'>
            <a className='student__link' href='https://www.facebook.com/vitaly.masich' target='_blank'>Facebook</a>
          </li>
          <li className='student__list-item'>
            <a className='student__link' href='https://github.com/Zandalar' target='_blank'>Github</a>
          </li>
        </ul>
      </div>
      <img className='student__photo' src={photo} alt='authors photo' />
      </div>
    </section>
  )
}

export default AboutMe;
