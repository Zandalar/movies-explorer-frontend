import React from 'react';

function Footer({}) {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__content'>
          <p className='footer__copyright'>&copy; 2020</p>
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://praktikum.yandex.ru' target='_blank'>Яндекс.Практикум</a>
            </li>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://github.com/Zandalar' target='_blank'>Github</a>
            </li>
            <li className='footer__list-item'>
              <a className='footer__link' href='https://www.facebook.com/vitaly.masich' target='_blank'>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;