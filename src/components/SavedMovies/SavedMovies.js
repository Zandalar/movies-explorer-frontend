import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

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
