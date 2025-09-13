import React, { useState } from 'react';
import './App.css';

import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CharecterSection from './components/CharecterSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';

import button1 from './assets/button-1.svg';
import button2 from './assets/button-2.svg';
import button3 from './assets/button-3.svg';
import button4 from './assets/button-4.svg';

import hex1 from './assets/hex-1.svg';
import hex2 from './assets/hex-2.svg';
import hex3 from './assets/hex-3.svg';
import hex4 from './assets/hex-4.svg';

import cardUI from './assets/card-ui.svg';

import icon1 from './assets/icon-1.svg';
import icon2 from './assets/icon-2.svg';
import icon3 from './assets/icon-3.svg';

import gameTitle from './assets/game-title.svg';

import hero1 from './assets/hero-1.svg';
import hero2 from './assets/hero-2.svg';
import hero3 from './assets/hero-3.svg';
import hero4 from './assets/hero-4.svg';
import hero5 from './assets/hero-5.svg';

import logo1 from './assets/logo-1.svg';
import logo2 from './assets/logo-2.svg';
import gameLine from './assets/game-line.svg';
import plus from './assets/plus.svg';
import eclipse from './assets/eclipse.svg';

import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

import heroImage1 from './assets/hero-image-1.png';
import heroImage2 from './assets/main-image-2.png';
import portalImage from './assets/portal.png';
import line from './assets/line.png';



const App = () => {
  const [isMontly, setIsMontly] = useState(true);
  const buyGame = () => {
    alert("Game Purchased successfully!")
  }
  return (
    <div>
      <HeroSection 
        logo1={logo1}
        button1={button1}
        gameLine={gameLine}
        gameTitle={gameTitle}
        cardUI={cardUI}
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        heroImage1={heroImage1}
        button2={button2}
        hex1={hex1}
        hex2={hex2}
        hex3={hex3}
        hex4={hex4}
        buyGame={buyGame}
      />
      <FeatureSection
        heroImage2={heroImage2}
        portalImage={portalImage}
        cardUI={cardUI}
        icon2={icon2}
      />
      <CharecterSection 
        cardUI={cardUI}
        hero1={hero1}
        hero2={hero2}
        hero3={hero3}
        hero4={hero4}
        hero5={hero5}
      />
      <PricingSection 
        cardUI={cardUI}
        icon2={icon2}
        button3={button3}
        isMontly={isMontly}
        setIsMonthly={setIsMontly}
        buyGame={buyGame}
      />
      <FaqSection 
        button4={button4}
        plus={plus}
      />
      <FooterSection 
            logo2={logo2}
            eclipse={eclipse}
            instagram={instagram}
            facebook={facebook}
            twitter={twitter}
          />
    </div>
  )
}

export default App