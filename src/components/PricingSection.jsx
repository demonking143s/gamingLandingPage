import React, {useState} from 'react';
import { BiCheck } from "react-icons/bi";

const PricingSection = ({cardUI, icon2, button3, isMontly, setIsMonthly, buyGame}) => {
  return (
    <div className="pricing-section-1" id='pricing'>
      <div className='text-box'>
      <div className="text-content-2">
        <p className="text-7"><span className="text-rgb-48-64-211">Invest in Your Survival: Pricing Tiers</span></p>
        <p className="text-8"><span className="text-black">Explore Our Pricing Options Tailored to Your Gameplay Goals and Preferences</span></p>
      </div>
      </div>
      <div className="pricing-content-1">
        <div className="tabs-box-1">
          <div className="tabs-1">
            {isMontly?
              <div className='button-3'>
                <p className="tab-1"><span className="text-white" onClick={()=>{setIsMonthly(true)}}>Monthly Billing</span></p>
              </div> : 
              <div className='button-4'>
                <p className="tab-2"><span className="text-black" onClick={()=>{setIsMonthly(true)}}>Monthly Billing</span></p>
              </div>
            }
            {isMontly?
              <div className="button-4">
                <p className="tab-2"><span className="text-black" onClick={()=>{setIsMonthly(false)}}>Annual Billing</span></p>
              </div> : 
              <div className="button-3">
                <p className="tab-1"><span className="text-white" onClick={()=>{setIsMonthly(false)}}>Annual Billing</span></p>
              </div>
            } 
          </div>
        </div>
        <div className="pricing-container-1">
          <div className="pricing-card-ui-2">
              <img src={cardUI} className="pricing-card-ui-1" alt="card-ui" />
              <div className='price-box-1'>
                <div className="icon-1">
                  <img src={icon2} className="vector-2" alt="vector" />
                </div>
                <div className="price-title-1">
                  <p className="text-11"><span className="text-rgb-48-64-211">Basic Plan</span></p>
                  <p className="text-12"><span className="text-black">Survivor's Starter Pack</span></p>
                </div>
                {/* <img src={line} className='line' width={300} height={30}/> */}
                <p className="text-13"><span className="text-black">{isMontly?'$29.99/mo':'$299.99/yr'}</span></p>
                <div className="button-1"  onClick={buyGame}>
                  <img src={button3} className="vector-shape-1" alt="vector-shape" />
                  <p className="text-14"><span className="text-white">Buy Game</span></p>
                </div>
                {/* <img src={line} className='line' width={300} height={30}/> */}
                <div className="list-1">
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Access to the full game with all core features.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Single-player mode available.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Limited selection of character customization options.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Exclusive in-game items: "Rookie's Rations" supply pack.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Feature text goes here</span></p>
                  </div>
                </div>
              </div>
              <div className="pricing-corner-vectors-1">
                <div className="pricing-corner-line-1"></div>
                <div className="pricing-corner-line-2"></div>
              </div>
          </div>
          <div className="pricing-card-ui-2">
              <img src={cardUI} className="pricing-card-ui-1" alt="card-ui" />
              <div className='price-box-1'>
                <div className="icon-1">
                  <img src={icon2} className="vector-2" alt="vector" />
                </div>
                <div className="price-title-1">
                  <p className="text-11"><span className="text-rgb-48-64-211">Pro Plan</span></p>
                  <p className="text-12"><span className="text-black">Apocalypse Conqueror Bundle</span></p>
                </div>
                {/* <img src={line} className='line' width={300} height={30}/> */}
                <p className="text-13"><span className="text-black">{isMontly?'$40.99/mo':'$400.99/yr'}</span></p>
                <div className="button-1" onClick={buyGame}>
                  <img src={button3} className="vector-shape-1" alt="vector-shape" />
                  <p className="text-14"><span className="text-white">Buy Game</span></p>
                </div>
                {/* <img src={line} className='line' width={300} height={30}/> */}
                <div className="list-1">
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">All features of the Basic Plan included.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Unlock access to multiplayer mode, team up with friends.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Extensive range of character customization choices.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Exclusive in-game items: "Veteran's Arsenal" weapon pack.</span></p>
                  </div>
                  <div className="list-item-4">
                    <BiCheck size={24} color='blue'/>
                    <p className="text-15"><span className="text-black">Priority access to upcoming expansions and updates.</span></p>
                  </div>
                </div>
              </div>
              <div className="pricing-corner-vectors-1">
                <div className="pricing-corner-line-1"></div>
                <div className="pricing-corner-line-2"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection