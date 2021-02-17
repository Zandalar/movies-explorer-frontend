import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoreButton from '../Movies/MoreButton/MoreButton';
import SearchForm from '../Movies/SearchForm/SearchForm';

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
