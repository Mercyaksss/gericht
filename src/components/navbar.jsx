// import React from 'react'
import './navbar.scss'
import Vector5 from '../assets/Vector5.png'
import menu from '../assets/menu.svg'

function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-1'>
          <h1 className='logo'>Gerícht</h1>
        </div>

        <ul className='nav-2'>
          <li>Home</li>
          <li>Pages</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Landing</li>
        </ul>

        <div className='nav-3'>
          <p>Log In</p>
          <img src={Vector5}/>
          <p>Book Table</p>
        </div>

        <img src={menu} className='menu-icon'/>

      </nav>
    </>

  )

}

export default Navbar
