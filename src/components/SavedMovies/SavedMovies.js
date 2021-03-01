import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({movies, loggedIn, isLoading}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies'>
        <SearchForm />
        <MoviesCardList movies={movies} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
