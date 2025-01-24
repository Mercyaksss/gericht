// import React from 'react'
import './footer.scss'
import facebook from '../assets/facebook_.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-main'>
        <div className='col-1'>
          <h2>Contact Us</h2>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        
        <div className='col-2'>
          <h1>Gerícht</h1>
          <p>&#34;The best way to find yourself is to lose yourself in the service of others.&#34;</p> 
          {/* to add quotation marks without flagging an error */}

          <div className='icons'>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={instagram}/>
          </div>
        </div>

        <div className='col-3'>
          <h2>Working Hours</h2>
          <div className='weekdays'>
            <p>Monday-Friday:</p>
            <p>8:00 am - 12:00am</p>
          </div>
          
          <div className='weekends'>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
       
        </div>
        
      </div>
      <p>2021 Gerícht. All Rights reserved.</p>

    </section>

  )
}

export default Footer
