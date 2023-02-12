import React from 'react'

import "../style.css"

const GreetUser = () => {


    const date = new Date()
    // console.log(date)
    const hours = date.getHours()

    // // // Creating empty variable here ------->
    let greet , color ;

    if (hours >= "1" && hours <= "12") {
        greet = "Good Morning"
        color = "Red"
    }
    else if (hours >= "13" && hours <= "18") {
        greet = "Good Afternoon"
        color = "Blue"
    }
    else if (hours >= "19" && hours <= "24") {
        greet = "Good Night"
        color = "Green"
    }



  return <h1 className='heading_greeting' style={{ "backgroundColor": color, "color": "white" }}>{greet}</h1>
  
}

export default GreetUser