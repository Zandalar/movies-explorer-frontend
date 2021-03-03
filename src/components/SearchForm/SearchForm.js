import React from 'react';
import searchIcon from '../../images/icon__search.svg';

function SearchForm({handleSearch}) {
  const [checked, setChecked] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [keyword, setKeyword] = React.useState('');

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  function handleKeyword(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    localStorage.setItem('keyword', keyword);
    handleSearch(checked);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  React.useEffect(() => {
    handleSearch(checked);
  }, [checked]);

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' name='search' noValidate onSubmit={handleSubmit}>
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
            onChange={handleKeyword}
            value={keyword || ''}
          />
          <button className='search__button' type='submit' />
        </form>
        {width > 600 &&
          <label className='search__checkbox'>
            <input className='search__checkbox-input' id='switcher' type='checkbox' onChange={handleCheck} />
            <div className='search__checkbox-text'>Короткометражки</div>
          </label>
        }
      </div>
      {width < 600 &&
      <label className='search__checkbox'>
        <input className='search__checkbox-input' id='switcher' type='checkbox' onChange={handleCheck} />
        <div className='search__checkbox-text'>Короткометражки</div>
      </label>
      }
    </section>
  )
}

export default SearchForm;
