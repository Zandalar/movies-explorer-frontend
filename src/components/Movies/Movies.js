import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies({}) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </main>
  )
}

export default Movies;
