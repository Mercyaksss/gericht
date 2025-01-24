// import React from 'react'
import  './chefword.scss'
import kevin from '../assets/kevin.png'
import Vector1 from '../assets/Vector1.png'
import quote from '../assets/quote.png'
import signature from '../assets/signature.png'

function Chefword() {
  return (
    <section className='chefword'>
        <div className='chefword-main'>
            <img src={kevin} className='kevin'/>
            <div className='chefword-left'>
                <p className='kevin-word'>Chef’s Word</p>
                <img src={Vector1}/>
                <h1>What we believe in</h1>
                <p>
                    <img src={quote}/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                </p>
                <div className='info'>
                    <h2>Kevin Luo</h2>
                    <p>Chef & Founder</p>
                </div>
                <img src={signature} className='signature'/>
            </div>
        </div>
      
    </section>
  )
}

export default Chefword
