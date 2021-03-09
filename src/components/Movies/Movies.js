import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({movies, loggedIn, isLoading, handleSearch, windowWidth, handleSaveMovie, handleDeleteMovie}) {
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
        {isLoading
          ? <Preloader />
          : <MoviesCardList
            movies={movies}
            isLoading={isLoading}
            windowWidth={windowWidth}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            notFoundMessage={movies.length === 0 && 'Ничего не найдено'}
            />
        }
      </main>
      <Footer />
    </>
  )
}

export default Movies;
