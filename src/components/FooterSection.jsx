import React, {useState} from 'react'

const FooterSection = ({logo2, eclipse, instagram, facebook, twitter}) => {
  const [email, setEmail] = useState('');
  const subscribe = (e) => {
    e.preventDefault();
    localStorage.setItem('subscriber', email);
    alert('Thank you for subscribing');
  }
  return (
    <div className='footer-section-1' id='footer'>
        <div className="footer-content-1">
          <div className="footer-logo-1">
            <div className="logo-2">
              <div className="logo-21">
                <img src={logo2} className="vector-12" alt="vector" />
              </div>
              <p className ="text-18"><span className="text-white">SHADOWFALL</span></p>
            </div>
            <div className="text-content-6">
              <p className="text-19"><span className="text-white">Experience the game that will change your the way you play.</span></p>
            </div>
          </div>
          <div className="footer-subscription-1">
            <div className="text-content-6">
              <p className="text-22"><span className="text-white">Subscribe to stay tuned for latest updates. Let's do it!</span></p>
            </div>
            <div className="subscription-box-1">
              <input type='email' placeholder='Enter your email address' className='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <div className='button-6'>
                <button className="subscribe" onClick={subscribe}>Subcribe</button>
              </div>
            </div>
          </div>
          <div className="footer-socials-1">
            <div className="text-content-6">
              <p className="text-20"><span className="text-white">Follow Us</span></p>
            </div>
            <div className="socials">
              <a href="https://www.instagram.com" className="eclipse-box">
                <img src={eclipse} className="eclipse" alt="ellipse-17" />
                <img src={instagram} className="social" alt="instagram" />
              </a>
              <a href="https://www.facebook.com" className="eclipse-box">
                <img src={eclipse} className="eclipse" alt="ellipse-17" />
                <img src={facebook} className="social" alt="facebook" />
              </a>
              <a href="https://www.twitter.com" className="eclipse-box">
                <img src={eclipse} className="eclipse" alt="ellipse-17" />
                <img src={twitter} className="social" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="footer-contact-1">
            <div className="text-content-6">
              <p className="text-23"><span className="text-white">Contact Us</span></p>
              <p className="text-21"><span className="text-white">+1 800 854-36-80</span></p>
            </div>
          </div>
        </div>
        <div className="copyright-section-1">
          <div className="text-content-6">
              <p className="text-24"><span className="text-white">© 2023 All Rights Reserved</span></p>
          </div>
          <div className="menu-bar">
            <div className="text-content-6">
              <p className="text-25"><span className="text-white">Privacy Policy</span></p>
            </div>
            <div className="text-content-6">
              <p className="text-25"><span className="text-white">Terms of Use</span></p>
            </div>
            <div className="text-content-6">
              <p className="text-25"><span className="text-white">Sales and Refunds</span></p>
            </div>
            <div className="text-content-6">
              <p className="text-25"><span className="text-white">Legal</span></p>
            </div>
            <div className="text-content-6">
              <p className="text-25"><span className="text-white">Site Map</span></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FooterSection