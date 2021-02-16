import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({}) {
  return (
    <body className='movies'>
      <SearchForm />
      <MoviesCardList />
    </body>
  )
}

export default Movies;
