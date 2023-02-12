import React from 'react'

// // Time functional comp improt 
import Time from "./TimePrec/TimePrectice"

// // Greet fn copm is impot
import GreetUser from "./greetUser/greetUser"


// // // CardAndColorMain fn copm is impot
import ColorMain from "./ColorFolder/colorMain"


import ModalMain from '../Modal/ModalMain'






const TimeMain = () => {
  return (
    <>

      <ModalMain title={"Time And Color by props"} data={"Here a running time is displayed and if user presses get button the he or she will get current time And the a Color section there user can give his favourite color and hit Enter and See Magic.And a user Greet text that changes according to time"}  />


      {/* Time fn comp is used */}
      <Time />

      {/* User Greet fn comp is used */}
      <GreetUser />

      <ColorMain />
    </>
  )
}

export default TimeMain