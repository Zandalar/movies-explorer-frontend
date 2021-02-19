import React from 'react';
import { useLocation } from 'react-router-dom';
import photo from '../../images/author.png';

function MoviesCard({}) {
  const [isShown, setIsShown] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const location = useLocation().pathname;

  function handleSaveButton() {
    isShown
      ? setIsShown(false)
      : setIsShown(true)
  }

  function handleSaveMovie() {
    setIsSaved(true);
  }

  return (
    <li className='card' onMouseEnter={handleSaveButton} onMouseLeave={handleSaveButton}>
      {(location === '/movies' && isSaved) && <div className='card__saved'/>}
      {(location === '/movies' && !isSaved) && <button className={`card__save ${isShown && 'card__save_active'}`} type='button' onClick={handleSaveMovie}>Сохранить</button>}
      {location === '/saved-movies' && <button className={`card__delete ${isShown && 'card__save_active'}`} type='button' onClick={handleSaveMovie} />}
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
