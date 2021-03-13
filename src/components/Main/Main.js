import React from 'react';

import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({loggedIn, windowWidth}) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        windowWidth={windowWidth}
      />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;
