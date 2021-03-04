import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList({movies, isLoading, windowWidth, handleSaveMovie}) {
  const [renderedMoviesList, setRenderedMoviesList] = React.useState([]);
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [renderedCardsCount, setRenderedCardsCount] = React.useState(0);
  const [addedCardsCount, setAddedCardsCount] = React.useState(0);

  function cardsCount() {
    if (windowWidth >= 1100) {
      setRenderedCardsCount(12);
      setAddedCardsCount(3);
    } else if (windowWidth < 1100 && windowWidth > 600) {
      setRenderedCardsCount(8);
      setAddedCardsCount(2);
    } else {
      setRenderedCardsCount(5);
      setAddedCardsCount(2);
    }
  }

  function handleMoreClick() {
    setRenderedMoviesList(movies.slice(0, renderedMoviesList.length + addedCardsCount));
    if (renderedMoviesList.length >= movies.length - addedCardsCount) {
      setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    setRenderedMoviesList(movies.slice(0, renderedCardsCount));
    if (movies.length <= renderedCardsCount) {
      setIsButtonActive(false);
    } else {
      setIsButtonActive(true);
    }
  }, [movies]);

  React.useEffect(() => {
    cardsCount();
  }, [windowWidth])

  return (
    <>
      <section className='cards'>
        {isLoading
          ? <Preloader />
          : <ul className='cards__list'>
              {renderedMoviesList.map(data => {
                return (
                  <MoviesCard
                    key={data.id}
                    data={data}
                    handleSaveMovie={handleSaveMovie}
                  />
                )
              })
            }
        </ul>
        }
      </section>
      <MoreButton onMoreClick={handleMoreClick} isButtonActive={isButtonActive} />
    </>
  )
}

export default MoviesCardList;
