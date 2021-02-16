import React from 'react';
import photo from '../../../images/author.png'

function MoviesCard({}) {
  return (
    <li className='card'>
      <img className='card__image' src={photo} alt='#' />
    </li>
  )
}

export default MoviesCard;
