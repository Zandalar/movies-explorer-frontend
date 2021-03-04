import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({savedMovies, loggedIn, isLoading, handleSearch, windowWidth, handleSaveMovie, handleDeleteMovie}) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        windowWidth={windowWidth}
      />
      <main className='saved-movies'>
        <SearchForm
          handleSearch={handleSearch}
          windowWidth={windowWidth}
        />
        <MoviesCardList
          movies={savedMovies}
          isLoading={isLoading}
          windowWidth={windowWidth}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
