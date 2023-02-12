import React from 'react'

import Avatar from './Avatar'

import "./style.css"

const CardPrectice = (props) => {

  const {index , name , img , email , tel } = props


  return (
    <>

        <div className="cardOnePrectice">
            <div className="top"> 
                <p>{index}.</p>
                <h1>{name}</h1>
                <Avatar imgOneMore={img} />
                {/* One Above line passing one props value to an other prop */}
            </div>

            <div className="bottom">
                <p>Email :- {email}</p>   
                <p>Phone :- {tel}</p>   
            </div>
        </div>
    </>
  )
}

export default CardPrectice