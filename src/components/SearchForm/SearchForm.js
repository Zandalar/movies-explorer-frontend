import React from 'react';
import searchIcon from '../../images/search__icon.svg';

function SearchForm({}) {
  const [switcherClicked, setSwitcherClicked] = React.useState(true);
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
        <div className='search__switcher-container'>
          <div className={`search__switcher ${switcherClicked ? 'search__switcher_off' : 'search__switcher_on'}`} onClick={handleSwitch}>
            <div className='search__switcher-button' />
          </div>
          <p className='search__switcher-text' onClick={handleSwitch}>Короткометражки</p>
        </div>
        }
      </div>
      {width < 600 &&
      <div className='search__switcher-container'>
        <div className={`search__switcher ${switcherClicked ? 'search__switcher_off' : 'search__switcher_on'}`} onClick={handleSwitch}>
          <div className='search__switcher-button' />
        </div>
        <p className='search__switcher-text' onClick={handleSwitch}>Короткометражки</p>
      </div>
      }
    </section>
  )
}

export default SearchForm;
