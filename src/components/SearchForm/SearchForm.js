import React from 'react';
import searchIcon from '../../images/search__icon.svg';

function SearchForm({}) {
  const [switcherClicked, setSwitcherClicked] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function handleSwitch() {
    switcherClicked
    ? setSwitcherClicked(false)
    : setSwitcherClicked(true);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' name='search' noValidate>
          {width > 600 && <img className='search__icon' src={searchIcon} alt='иконка поиска' />}
          <input
            className='search__input'
            id='search'
            name='search'
            type='search'
            minLength='2'
            maxLength='40'
            required
            placeholder='Фильм'
          />
          <button className='search__button' type='submit' />
        </form>
        {width > 600 &&
          <label className='search__checkbox'>
            <input className='search__checkbox-input' type='checkbox'/>
            <div className='search__checkbox-text'>Короткометражки</div>
          </label>
        }
      </div>
      {width < 600 &&
      <label className='search__checkbox'>
        <input className='search__checkbox-input' type='checkbox'/>
        <div className='search__checkbox-text'>Короткометражки</div>
      </label>
      }
    </section>
  )
}

export default SearchForm;
