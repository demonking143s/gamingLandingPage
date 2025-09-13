import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";

const HeroSection = ({logo1, button1, gameLine, gameTitle, cardUI, icon1, icon2, icon3, heroImage1, button2, hex1 ,hex2 , hex3, hex4, buyGame}) => {
  return (
    <div className="hero-section-1" id='hero'>
      <div className="nav-bar">
        <div className="nav-bar-1">
          <div className="logo-1">
            <div className="logo-11">
              <img src={logo1} className="logo-1" alt="logo" />
            </div>
            <p className ="text-1"><span className="text-black">SHADOWFALL</span></p>
          </div>
          <div className="nav-links-1">
            <a className="text-2" href='#hero'><span className="text-rgb-1-4-16">Home </span></a>
            <a className="text-2" href='#feature'><span className="text-rgb-1-4-16">About</span></a>
            <a className="text-2" href='#footer'><span className="text-rgb-1-4-16">Contact Us</span></a>
          </div>
          <div className="button-1"  onClick={buyGame}>
            <img src={button1} className="btn-img-1" alt="btn-img" />
            <p className="text-3"><span className="text-white">Buy Game</span></p>
          </div>  
        </div>
        <img src={gameLine} className="game-line" alt="game-line" />
      </div>
      <div className="main-content-1">
        <div className="content-1">
          <div className="text-content-1">
            <p className="text-4"><span className="text-black">Unleash your survival instincts in a futuristic apocalypse.</span></p>
            <p className="text-5"><span className="text-black">Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.</span></p>
            <div className="buttons">
              <div className="button-1" onClick={buyGame}>
                <img src={button1} className="btn-img-1" alt="btn-img" />
                <p className="text-3"><span className="text-white">Buy Game</span></p>
              </div>
              <div className="button-2">
                <img src={button2} className="btn-img-2" alt="btn-img" />
                <p className="text-6"><span className="text-rgb-48-64-211">Learn More</span></p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card-ui-box">
              <img src={cardUI} className="card-ui-1" alt="card-ui" />
              <div className='icon-box'>
                <div className="icon-1">
                  <img src={icon1} className="icon-1" alt="icon" />
                </div>
                <p className="text-2"><span className="text-black">Heroes and Game Locations</span></p>
              </div>
              <div className="corner-box-1">
                <div className="corner-line-1"></div>
                <div className="corner-line-2"></div>
                <a href='#characters'><IoArrowForwardCircle className='arrow'/></a>
              </div>
            </div>
            <div className="card-ui-box">
              <img src={cardUI} className="card-ui-1" alt="card-ui" />
              <div className='icon-box'>
                <div className="icon-1">
                  <img src={icon3} className="icon3" alt="icon" />
                </div>
                <p className="text-2"><span className="text-black">Items and Collectibles</span></p>
              </div>
              <div className="corner-box-1">
                <div className="corner-line-1"></div>
                <div className="corner-line-2"></div>
                <a href='#pricing'><IoArrowForwardCircle className='arrow'/></a>
              </div>
            </div>
            <div className="card-ui-box">
              <img src={cardUI} className="card-ui-1" alt="card-ui" />
              <div className='icon-box'>
                <div className="icon-1">
                  <img src={icon2} className="icon-1" alt="icon" />
                </div>
                <p className="text-2"><span className="text-black">Gameplay and Features</span></p>
              </div>
              <div className="corner-box-1">
                <div className="corner-line-1"></div>
                <div className="corner-line-2"></div>
                <a href='#feature'><IoArrowForwardCircle className='arrow'/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-box-1">
          <img src={heroImage1} className="hero-image-1" alt="hero-image" />
          <div className="hexagon">
            <img src={hex1} className="hex-1" alt="hex" />
            <img src={hex2} className="hex-2" alt="hex" />
            <img src={hex3} className="hex-3" alt="hex" />
            <img src={hex4} className="hex-4" alt="hex" />
          </div>
        </div>
        <div className="title-1">
          <img src={gameTitle} className='game-title' alt='game-title' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection