import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='movies'>
        <SearchForm />
        <MoviesCardList />
        <MoreButton />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
