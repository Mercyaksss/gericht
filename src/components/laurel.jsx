// import React from 'react'
import './laurel.scss'
import group87 from '../assets/group87.png'
import group1 from '../assets/group1.png'
import group2 from '../assets/group2.png'
import group3 from '../assets/group3.png'
import group5 from '../assets/group5.png'
import group43 from '../assets/group43.png'
import Vector1 from '../assets/Vector1.png'




function Laurel() {
 const laurels = [
    {Image: group2, title:'Bib Gourmond', text: 'Lorem ipsum dolor sit amet, consectetur.' },
    {Image: group1, title: 'Rising Star', text: 'Lorem ipsum dolor sit amet, consectetur.'},
    {Image: group5, title: 'AA Hospitality', text: 'Lorem ipsum dolor sit amet, consectetur.'},
    {Image: group3, title:'Outstanding Chef', text: 'Lorem ipsum dolor sit amet, consectetur.'}
 ]
  return (
    <section className='laurel'>
        {/* <div className='overlay'> */}
            <img src={group87} className='group-87'/>
            <div className='laurel-main'>
                <div className='laurel-left'>
                    <p>Awards & recognition</p>
                    <img src={Vector1}/>
                    <h1>Our Laurels</h1>
                    <div className='laurel-grid'>
                        {laurels.map((laurel) => 
                            <div key={laurel.title}>
                                <div className='grid-flex'>
                                    <img src={laurel.Image}/>
                                    <div>
                                        <h2>{laurel.title}</h2>
                                        <p>{laurel.text}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <img src={group43} className='laurel-right'/>
            </div>
        {/* </div> */}
    </section>

  )
}

export default Laurel
