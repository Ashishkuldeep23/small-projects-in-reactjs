
import React from 'react'

import "./style.css"

const ForUser = ( {style={ border : "10px solid red"} , data="Hello World!" , className="fs-1 bg-danger" } ) => {
  return (
    <>  

      <div id="forUserId" className={className} style={style}>{data}</div>
      
    </>
  )
}

export default ForUser

