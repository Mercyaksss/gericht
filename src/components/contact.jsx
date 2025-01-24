// import React from 'react'
import Button from './button'
import './contact.scss'
import img from '../assets/img.png'
import Vector1 from '../assets/Vector1.png'

function Contact() {
  return (
    <section className='contact-section'>
        <div className='contact-container'>
            <div className='contact-main'>
                <div className='contact-left'>
                    <p className='contact'>Contact</p>
                    <img src={Vector1}/>
                    <h1>Find Us</h1>
                    <p className='text'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <h2>Opening Hours</h2>
                    <p className='time'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='time'>Sat - Sun: 10:00 am - 03:00 am</p>
                    <div className='visit-us'>
                        <Button text='Visit Us' />
                    </div>
                </div>
                <img src={img} className='contact-right'/>
            </div>
        </div>
    </section>
  )
}

export default Contact
