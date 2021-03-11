import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, loggedIn, isLoading, handleSearch, windowWidth, handleSaveMovie, handleDeleteMovie, moviesMessage}) {
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
        {isLoading
          ? <Preloader />
          : <MoviesCardList
              movies={savedMovies}
              isLoading={isLoading}
              windowWidth={windowWidth}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              moviesMessage={moviesMessage}
            />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
