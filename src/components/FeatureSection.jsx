import React from 'react'

const FeatureSection = ({heroImage2, portalImage, cardUI, icon2}) => {
  return (
    <div className="feature-section-1" id='feature'>
      <div className='text-box'>
      <div className="text-content-3">
        <p className="text-7"><span className="text-rgb-49-64-211">Harness the Power Of Innovation In A Game Of Survival</span></p>
        <p className="text-8"><span className="text-black">Discover unique mechanics and enhancements that take your gaming experience to new heights.</span></p>
      </div>
      </div>
      <div className="image-content-2">
        <img src={heroImage2} className='hero-image-2' alt='hero-image-2' />
        <img src={portalImage} className='portal-image' alt='portal-image' />
      </div>
      <div className="main-content-2">
        <div className="card-ui-4">
              <img src={cardUI} className="card-ui-3" alt="card-ui" />
              <div className='icon-box-2'>
                <div className="icon-1">
                  <img src={icon2} className="icon" alt="icon" />
                </div>
                <p className="text-9"><span className="text-black">Intense Survival Gameplay</span></p>
                <p className="text-10"><span className="text-black">Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse.</span></p>
              </div>
              <div className="corner-box-2">
                <div className="corner-line-3"></div>
                <div className="corner-line-4"></div>
              </div>
            </div>
        <div className="card-ui-5">
              <img src={cardUI} className="card-ui-3" alt="card-ui" />
              <div className='icon-box-2'>
                <div className="icon-1">
                  <img src={icon2} className="icon" alt="icon" />
                </div>
                <p className="text-9"><span className="text-black">Tactical Combat and Customization</span></p>
                <p className="text-10"><span className="text-black">Engage in adrenaline-pumping combat encounters, utilizing a range of futuristic weapons, gadgets, and abilities. Customize your play style, strategize your approach, and outmaneuver enemies for tactical advantage.</span></p>
              </div>
              <div className="corner-box-2">
                <div className="corner-line-3"></div>
                <div className="corner-line-4"></div>
                
              </div>
            </div>
        <div className="card-ui-6">
              <img src={cardUI} className="card-ui-3" alt="card-ui" />
              <div className='icon-box-2'>
                <div className="icon-1">
                  <img src={icon2} className="icon" alt="icon" />
                </div>
                <p className="text-9"><span className="text-black">Cooperative Multiplayer</span></p>
                <p className="text-10"><span className="text-black">Join forces with friends or other players in cooperative multiplayer mode. Tackle challenging missions together, coordinate strategies, and combine your unique abilities.</span></p>
              </div>
              <div className="corner-box-2">
                <div className="corner-line-3"></div>
                <div className="corner-line-4"></div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default FeatureSection