// import React from 'react'
import './menu.scss'
import Vector1 from '../assets/Vector1.png'
import Vector5 from '../assets/Vector5.png'
import Rectangle2 from '../assets/Rectangle2.png'
import middlemain from '../assets/middlemain.png'
import Button from './button'
function Menu() {

    const wine = [
        {name: 'Chapel Hill Shiraz', price: '$56', bottle: 'AU | Bottle'},
        {name: 'Catena Malbec', price: '$59', bottle: 'AR | Bottle'},
        {name: 'La Vielle Rosé', price: '$44', bottle: 'FR | 750ml'},
        {name: 'Rhino Pale Ale', price: '$31', bottle: 'CA | 750ml'},
        {name: 'Irish Guinness', price: '$26', bottle: 'IE | 750ml'}
    ]

    const Cocktails = [
        {name: 'Aperol Spritz', price: '$20', bottle: 'Aperol | Villa Marchesi prosecco | soda | 30ml'},
        {name: "Dark 'N' Stormy", price: '$16', bottle: 'Dark rum | Ginger beer | Slice of lime. ' },
        {name: 'Daiquiri', price: '$10', bottle:'Rum | Citrus juice | Sugar'},
        {name: 'Old Fashioned', price: '$31', bottle: 'Bourbon | Brown sugar | Angostura Bitters'},
        {name: 'Negroni', price: '$26', bottle: 'Gin | Sweet Vermouth | Campari | Orange garnish'}

    ]

  return (
    <section className='menu-section'>
        <div className='overlay'>
            <div className='menu-main'>
                <div className='menu-header'>
                    <p>Menu That Fits Your Palatte</p>
                    <img src={Vector1}/>
                    <h1>Today's Spacial</h1>
                </div>
                <div className='main-menu'>
                    <div className='menu-left'>
                        <h2>Wine & Beer</h2>
                        {wine.map((item) => 
                            <div key={item.name}> 
                                <div className='menu-flex'>
                                    <h1>{item.name}</h1>
                                    <img src={Rectangle2}/>
                                    <p>{item.price}</p>
                                </div>
                                <p className ='bottle'>{item.bottle}</p>
                            </div>
                        )}
                    </div>

                    <img src={middlemain} className='menu-middle'/>
                    <img src={Vector5} className='line'/>
                    <img src={Vector5} className='line'/>
                    
                    <div className='menu-right'>
                        <h2>Cocktails</h2>
                        {Cocktails.map((cocktail) => 
                            <div key={cocktail.name}> 
                                <div className='menu-flex'>
                                    <h1>{cocktail.name}</h1>
                                    <img src={Rectangle2}/>
                                    <p>{cocktail.price}</p>
                                </div>
                                <p className ='bottle'>{cocktail.bottle}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='button'>
                    <Button text='View More'/>
                </div>
            </div>
        </div>



      
    </section>
  )
}

export default Menu
