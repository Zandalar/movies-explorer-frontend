import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({movies, loggedIn, isLoading, handleSearch, windowWidth, handleSaveMovie, handleDeleteMovie, renderMovies}) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        windowWidth={windowWidth}
      />
      <main className='movies'>
        <SearchForm
          handleSearch={handleSearch}
          windowWidth={windowWidth}
        />
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
          windowWidth={windowWidth}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          renderMovies={renderMovies}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
