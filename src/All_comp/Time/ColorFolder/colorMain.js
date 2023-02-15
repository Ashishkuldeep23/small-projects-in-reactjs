
import React from "react"


import ColorByProps from './colorByProps'

import ForUser from '../../ForUser/ForUser'



import "./style.css"



const CardAndColorMain = () => {
    const [bgColor, setBgColor] = React.useState("white")


    // // // This style is used of heading first.
    const styleOfDiv = {
        color: "black",
    }


    // // // Below function is used to take color name from inner component --->
    function colorByInner(nameOfColor) {
        // console.log("Color " + nameOfColor)
        setBgColor(nameOfColor)
    }



    return (
        <>
            <div className="cardBodyOfColor" style={{ backgroundColor: bgColor }} >

                <div style={{ ...styleOfDiv, backgroundColor: bgColor, border: '1px solid ' }}>
                    <h1 className='heading_greeting' style={{ border: "0px solid", fontFamily: "cursive" }}>Color By props,Child fn</h1>

                    {/* This functional component is using for taking input -----------> */}
                    < ColorByProps colorByInner={colorByInner} />
                    <p className="text-center">☝️Write your favourite color and hit Enter</p>
                </div>


                <ForUser

                    data={"The user , if you are here and you like this section of the project then please tell your favorite Color in the comment section of the post or tell in the feedback section.Give your valuable comment please."}

                    className={"col-6 text-center py-2 px-5 my-3 mx-auto rounded  rounded-pill"}

                    style={{ backgroundColor: "#e8f5ffe1", border: "1px solid "  }}

                />



            </div>



        </>
    )

}

export default CardAndColorMain
