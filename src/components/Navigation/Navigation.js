import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import FilmsMenu from '../FilmsMenu/FilmsMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navigation({loggedIn}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function handleMenuClick() {
    {isMobileMenuOpened
    ? setIsMobileMenuOpened(false)
    : setIsMobileMenuOpened(true);
    }
  }

  return (
    <nav className={loggedIn ? 'navigation' : 'navigation navigation_logout'}>
      {(loggedIn && width > 768) && <FilmsMenu />}
      {width > 768
      ? <UserMenu loggedIn={loggedIn} />
      : <button className='navigation__menu' onClick={handleMenuClick}/>
      }
      <MobileMenu loggedIn={loggedIn} handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
    </nav>
  )
}

export default Navigation;
