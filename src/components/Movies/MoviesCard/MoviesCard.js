import React from 'react';
import photo from '../../../images/author.png'

function MoviesCard({}) {
  const [isShown, setIsShown] = React.useState(false);

  function handleSaveButton() {
    isShown
      ? setIsShown(false)
      : setIsShown(true)
  }

  return (
    <li className='card' onMouseEnter={handleSaveButton} onMouseLeave={handleSaveButton}>
      <button className={`card__save ${isShown && 'card__save_active'}`} type='button'>Сохранить</button>
      <img className='card__image' src={photo} alt='#' />
      <div className='card__container'>
        <p className='card__name'>Vitaliy</p>
        <div className='card__duration'>
          <p className='card__duration-text'>1ч 17м</p>
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
