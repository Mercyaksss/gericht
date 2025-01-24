// import React from 'react'
import Navbar from './navbar'
import './herosection.scss'
import Vector1 from '../assets/Vector1.png'
import Button from './button'
import Hero from '../assets/Hero.png'

function Herosection() {
  return (
    <div className='hero-section'>
        <Navbar/>

        <div className='hero-main'>
            <div className='left'>
                <p className='text-1'>Chase The New Flavour</p>
                <img src={Vector1} className='spoon'/>
                <h1>The Key To Fine Dining</h1>
                <p className='text-2'>Fine dining excellence stems from quality ingredients, expert preparation, and impeccable service in an elegant atmosphere.</p>
                <Button text='Explore Menu'/>
            </div>

            <img src={Hero} className='hero-image'/>

        </div>


      
    </div>
  )
}

export default Herosection
