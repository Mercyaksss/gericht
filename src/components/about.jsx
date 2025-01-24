// import React from 'react'
import './about.scss'
import G from '../assets/G.png'
import Vector1 from '../assets/Vector1.png'
import Button from './button'
import knife from '../assets/knife.png'

function About() {
  return (
    <div className='about-section'>

        <div className='about-main'>

            <div className='about-left about-text'>
                <h1>About Us</h1>
                <img src={Vector1} className='spoon about-spoon'/>
                <p>we are the best we are the best we are the best we are the best we are the best we are the best we are the best we are the best</p>
                <Button text='Know More'/>
            </div>
            <div className='about-middle'>
              <img src={G} className='letter-g'/>
              <img src={knife} className='knife'/>
            </div>
            <div className='about-right about-text'>
                <h1>Our History</h1>
                <img src={Vector1} className='spoon about-spoon'/>
                <p>we are the best we are the best we are the best we are the best we are the best we are the best we are the best we are the best</p>
                <Button text='Know More'/>
            </div>

        </div>
    </div>

  )
}

export default About
