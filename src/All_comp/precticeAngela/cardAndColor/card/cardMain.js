import React from 'react'

import "./style.css"

import cardData from "./cardAPI"
import CardPrectice from './cardPrectice'




const CardMain = () => {

    // // Mapping function ---->

    function mapCompo(cardData) {
        return < CardPrectice key={cardData.id} index={cardData.id} img={cardData.img} name={cardData.name} email={cardData.email} tel={cardData.tel} />
    }


  return (
    <>
      <div className='cardBody'>
          
                {
                    cardData.map(mapCompo)
                }

                {/* < CardPrectice img={pic1} name="Ashish Kuldeep" email="ashish5050@gmail.com" tel="+91 9595595958" />
                < CardPrectice img={pic2} name="React" email="react5050@gmail.com" tel="+91 757595958" />
                < CardPrectice img={pic1} name="Ashish Kuldeep" email="ashish5050@gmail.com" tel="+91 9595595958" /> */}

      </div>

    </>
  )
}

export default CardMain