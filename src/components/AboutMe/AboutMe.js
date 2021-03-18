import React, { memo } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/author.jpg';

const AboutMe = memo(() => (
    <section className='student' id='student'>
      <SectionTitle title='Студент' />
      <div className='student__container'>
      <div className='student__content'>
        <h2 className='student__title'>Виталий</h2>
        <p className='student__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='student__text'>Привет, меня зовут Виталий, я из Москвы. В прошлом, я работал
          инженером-геодезистом, строил дома, дороги, торговые центры, и многое другое. На моих глазах сложные
          проекты превращались в живые сооружения. Сейчас я учусь по специальности "Веб-разработчик",
          на платформе Яндекс.Практикум. Уже будучи инженером, накопленный мною опыт помогает мне разбираться
          со сложными задачами, замечать слабые места и уделять внимание мелочам. Мне очень нравится заниматься
          веб-разработкой, хочу развиваться в сфере IT, найти команду людей, близких по духу и поучаствовать в
          развитии классных проектов!
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
)

export default AboutMe;
