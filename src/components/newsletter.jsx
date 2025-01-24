// import React from 'react'
import './newsletter.scss'
import Vector1 from '../assets/Vector1.png'
import Button from './button'
function Newsletter() {
  return (
    <section className='newsletter-section'>
        <p>Newsletter</p>
        <img src={Vector1}/>
        <h1>Subscribe To Our Newsletter</h1>
        <p className='xyz'>And never miss latest updates</p>
        <div className='input'  >
            <input type='email' placeholder='Email Address'/>
            <Button text='Subscribe'/>
        </div>

    </section>

  )
}

export default Newsletter
