import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({movies, loggedIn, isLoading, handleSearch}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='movies'>
        <SearchForm
          handleSearch={handleSearch}
        />
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
