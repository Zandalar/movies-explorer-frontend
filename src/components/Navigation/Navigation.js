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
      {(loggedIn && width > 768) && <UserMenu loggedIn={loggedIn} />}
      {(loggedIn && width < 768) && <button className='navigation__menu' onClick={handleMenuClick}/>}
      {!loggedIn && <UserMenu loggedIn={loggedIn} />}
      <MobileMenu loggedIn={loggedIn} handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
    </nav>
  )
}

export default Navigation;
