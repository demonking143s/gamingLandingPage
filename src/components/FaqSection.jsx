import React from 'react'
import { useState } from 'react'

const FaqSection = ({button4,plus}) => {
  const [questionOpen, setQuestionOpen] = useState(0);
  return (
    <div className="faq-section-1" id='faq'>
            <div className='text-box'>
            <div className="text-content-2">
              <p className="text-7"><span className="text-rgb-48-64-211">Unveiling Clarity: Your Questions Answered</span></p>
              <p className="text-8"><span className="text-black">Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles</span></p>
            </div>
            </div>
            <div className="accordion-1">
              <div className="accordion-item-2">
                <div>
                  <p className="text-16"><span className="text-black">Is "Shadowfall Chronicles" a single-player or multiplayer game?</span></p>
                  {questionOpen === 1 && (
                  <p className="text-16a"><span className="text-black">Shadowfall Chronicles is a both single-player and multiplayer game only on 2 - 4 players. It's support both game story mode well</span></p>
                  )}
                </div>
                {questionOpen !== 1 && (
                  <div className="plus-4" onClick={()=>setQuestionOpen(1)}>
                    <img src={plus} className="vector-5" alt="vector" />
                  </div>
                )}
              </div>
              <div className="accordion-item-2">
                <div>
                  <p className="text-16"><span className="text-black">What sets the factions apart, and can I switch between them?</span></p>
                  {questionOpen === 2 && (
                  <p className="text-16a"><span className="text-black">Each factions have each different storylines and playstyle. So, Can't able to switch faction without begin new game</span></p>
                  )}
                </div>
                {questionOpen !== 2 && (
                  <div className="plus-4" onClick={()=>setQuestionOpen(2)}>
                    <img src={plus} className="vector-5" alt="vector" />
                  </div>
                )}
              </div>
              <div className="accordion-item-2">
                <div>
                  <p className="text-16"><span className="text-black">How does the crafting system work in the game?</span></p>
                  {questionOpen === 3 && (
                  <p className="text-16a"><span className="text-black">The crafting system would be centered around gathering resources, recipes, and upgrading materials to produce items, units, or infrastructure. It could be resource-based or technology-based.</span></p>
                  )}
                </div>
                {questionOpen !== 3 && (
                  <div className="plus-4" onClick={()=>setQuestionOpen(3)}>
                    <img src={plus} className="vector-5" alt="vector" />
                  </div>
                )}
              </div>
              <div className="accordion-item-2">
                <div>
                  <p className="text-16"><span className="text-black">Will my decisions affect the game's outcome, and are there multiple endings?</span></p>
                  {questionOpen === 4 && (
                  <p className="text-16a"><span className="text-black">Your decisions should have real, tangible consequences. They could affect everything from your relationships with factions to the story itself, as well as the resources and units available to you.</span></p>
                  )}
                </div>
                {questionOpen !== 4 && (
                  <div className="plus-4" onClick={()=>setQuestionOpen(4)}>
                    <img src={plus} className="vector-5" alt="vector" />
                  </div>
                )}
              </div>
              <div className="accordion-item-2">
                <div>
                  <p className="text-16"><span className="text-black">What content can I expect with the upcoming expansions?</span></p>
                  {questionOpen === 5 && (
                  <p className="text-16a"><span className="text-black">Upcoming expansions is Rise of the Forgotten Factions, The Great War, The Arcane Awakening, The Outer Realms, End of the Cycle</span></p>
                  )}
                </div>
                {questionOpen !== 5 && (
                  <div className="plus-4" onClick={()=>setQuestionOpen(5)}>
                    <img src={plus} className="vector-5" alt="vector" />
                  </div>
                )}
              </div>
            </div>
            <div className="contact-box-2">
              <div className="text-content-2">
              <p className="text-7"><span className="text-black">Still have a question?</span></p>
              <p className="text-8"><span className="text-black">Feel free to reach out for clarifications and inquiries.</span></p>
              </div>
              <div className="button-1">
                <img src={button4} className="vector-shape-1" alt="vector-shape" />
                <a href="#footer" className="text-17"><span className="text-white">Contact us</span></a>
              </div>
            </div>
          </div>
  )
}

export default FaqSection