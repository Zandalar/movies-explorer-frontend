import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList({movies, isLoading}) {
  const [newMoviesList, setNewMoviesList] = React.useState([]);
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  function handleMoreClick() {
    setNewMoviesList(movies.slice(0, newMoviesList.length + 3));
    if (newMoviesList.length >= movies.length - 3) {
      return setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    setNewMoviesList(movies.slice(0, 3));
    if (movies.length <= 3) {
      return setIsButtonActive(false);
    } else {
      return setIsButtonActive(true);
    }
  }, [movies]);

  return (
    <>
      <section className='cards'>
        <ul className='cards__list'>
          {isLoading
            ? <Preloader />
            : newMoviesList.map(data => {
              return (
                <MoviesCard key={data.id} data={data} />
              )
            })
          }
        </ul>
      </section>
      <MoreButton onMoreClick={handleMoreClick} isButtonActive={isButtonActive} />
    </>
  )
}

export default MoviesCardList;
