import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({}) {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        <MoviesCard />
      </ul>
    </section>
  )
}

export default MoviesCardList;
