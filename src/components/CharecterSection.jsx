import React from 'react'

const CharecterSection = ({cardUI, hero1, hero2, hero3, hero4, hero5}) => {
  return (
    <div className="charecters-section-1" id='characters'>
      <div className='text-box'>
      <div className="text-content-2">
        <p className="text-7"><span className="text-rgb-48-64-211">From Outcasts To Legends</span></p>
        <p className="text-8"><span className="text-black">Witness the rise of unlikely heroes who defy the odds and challenge fate.</span></p>
      </div>
      </div>
      <div className="characters-content-1">
        <div className="character-card-ui-2">
          <img src={cardUI} className="character-card-ui-1" alt="card-ui" />
          <div className='hero-box-1'>
            <img src={hero1} className="hero-card-1" alt="card-ui" />
            <p className="name-1"><span>MAGNUS</span></p>
          </div>
          <div className="character-corner-vectors-1">
            <div className="character-corner-line-1"></div>
            <div className="character-corner-line-2"></div>
          </div>
        </div>
        <div className="character-card-ui-3">
          <img src={cardUI} className="character-card-ui-1" alt="card-ui" />
          <div className='hero-box-1'>
            <img src={hero2} className="hero-card-1" alt="card-ui" />
            <p className="name-1"><span>MALCOLM</span></p>
          </div>
          <div className="character-corner-vectors-1">
            <div className="character-corner-line-1"></div>
            <div className="character-corner-line-2"></div>
          </div>
        </div>
        <div className="character-card-ui-4">
          <img src={cardUI} className="character-card-ui-1" alt="card-ui" />
          <div className='hero-box-1'>
            <img src={hero3} className="hero-card-1" alt="card-ui" />
            <p className="name-1"><span>AZEROTH</span></p>
          </div>
          <div className="character-corner-vectors-1">
            <div className="character-corner-line-1"></div>
            <div className="character-corner-line-2"></div>
          </div>
        </div>
        <div className="character-card-ui-5">
          <img src={cardUI} className="character-card-ui-1" alt="card-ui" />
          <div className='hero-box-1'>
            <img src={hero4} className="hero-card-1" alt="card-ui" />
            <p className="name-1"><span>KAMUI</span></p>
          </div>
          <div className="character-corner-vectors-1">
            <div className="character-corner-line-1"></div>
            <div className="character-corner-line-2"></div>
          </div>
        </div>
        <div className="character-card-ui-6">
          <img src={cardUI} className="character-card-ui-1" alt="card-ui" />
          <div className='hero-box-1'>
            <img src={hero5} className="hero-card-1" alt="card-ui" />
            <p className="name-1"><span>VULKAN</span></p>
          </div>
          <div className="character-corner-vectors-1">
            <div className="character-corner-line-1"></div>
            <div className="character-corner-line-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharecterSection