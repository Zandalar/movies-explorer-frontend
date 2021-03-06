import React from 'react';
import { useLocation } from 'react-router-dom';
import movie from '../../images/movie.jpg'

function MoviesCard({data, handleSaveMovie, handleDeleteMovie}) {
  const [isShown, setIsShown] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const location = useLocation().pathname;

  function handleSaveButton() {
    setIsShown(!isShown);
  }

  function handleSave() {
    setIsSaved(true);
    handleSaveMovie(data);
  }

  function handleDelete() {
    setIsSaved(false);
    handleDeleteMovie(data);
  }

  function handleImageClick() {
    location === '/movies'
    ? window.open(data.trailerLink, '_blank')
    : window.open(data.trailer, '_blank')
  }

  return (
    <li className='card' onMouseEnter={handleSaveButton} onMouseLeave={handleSaveButton} id={location === '/movies' ? data.id : data._id}>
      {(location === '/movies' && data.saved === 'true')
      &&
      <div className='card__saved' onClick={handleDelete} />}
      {(location === '/movies' && !isSaved)
      &&
      <button
        className={`card__save ${isShown && 'card__save_active'}`}
        type='button'
        onClick={handleSave}
      >
        Сохранить
      </button>}
      {location === '/saved-movies'
      &&
      <button
        className={`card__delete ${isShown && 'card__save_active'}`}
        type='button'
        onClick={handleDelete}
      />}
      {location === '/saved-movies'
        ? <img
          className='card__image'
          src={data.image !== null ? data.image : movie}
          alt={data.nameRU}
          onClick={handleImageClick}
        />
        : <img
          className='card__image'
          src={data.image !== null ? `https://api.nomoreparties.co${data.image.url}` : movie}
          alt={data.nameRU}
          onClick={handleImageClick}
        />
      }
      <div className='card__container'>
        <p className='card__name'>{data.nameRU}</p>
        <div className='card__duration'>
          <p className='card__duration-text'>{`${Math.floor(data.duration / 60)}ч ${data.duration % 60}м`}</p>
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
