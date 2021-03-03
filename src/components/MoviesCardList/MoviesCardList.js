import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList({movies, isLoading}) {
  const [renderedMoviesList, setRenderedMoviesList] = React.useState([]);
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  function handleMoreClick() {
    setRenderedMoviesList(movies.slice(0, renderedMoviesList.length + 3));
    if (renderedMoviesList.length >= movies.length - 3) {
      return setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    setRenderedMoviesList(movies.slice(0, 3));
    if (movies.length <= 3) {
      return setIsButtonActive(false);
    } else {
      return setIsButtonActive(true);
    }
  }, [movies]);

  return (
    <>
      <section className='cards'>
        {isLoading
          ? <Preloader />
          : <ul className='cards__list'>
              {renderedMoviesList.map(data => {
                return (
                  <MoviesCard key={data.id} data={data} />
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
