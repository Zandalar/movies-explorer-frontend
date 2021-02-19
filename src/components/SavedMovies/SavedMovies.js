import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({}) {
  return (
    <body className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </body>
  )
}

export default SavedMovies;
