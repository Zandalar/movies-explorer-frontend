import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({}) {
  return (
    <section className='elements'>
      <ul className='elements__list'>
        <MoviesCard />
      </ul>
    </section>
  )
}

export default MoviesCardList;
