
import React, { useState } from "react"

import "./style.css"


const TimePrectice = () => {

    // // // Below function will give time in string formate ---->
    const now = new Date().toLocaleTimeString()

    // // // Two state variables for two different thing, 1st is get time on btn click. , 2nd is timmer.
    const [time, setTimeNow] = useState(now)
    const [runTime, setRunTimeNow] = useState(now)


    // // // SetInterval for timer ---------->
    setInterval(() => {
        setRunTimeNow(nowTimeIsFunc())
    }, 1000)


    // // // This function will give current time when call it ---------->
    function nowTimeIsFunc() {
        return  new Date().toLocaleTimeString()
    }

    // // // This function will give current time when btn clicked.
    // // // Now i'm using this function in my onclick of button directly by arrow fn.
    function getCurentTimeFunc(){
        setTimeNow(nowTimeIsFunc())
    }




    /*
        
        Previously doing this ----------------->
        But this is not so going. (toLocaleTimeSting() fn is best to get time in string form)
            // const date = new Date()
            // let hours = date.getHours()
            // let minutes = date.getMinutes()
            // let seconds = date.getSeconds()

            // let curTime = `${hours}:${minutes}:${seconds}`
            
            
            // console.log(curTime)
            // console.log( typeof curTime )

            // setTimeNow(curTime)

            // let updateTime = `${hours}:${minutes}:${seconds}`
     */


    return (
        <>
            <div id="time_prec_main">



                <h1 className="mx-5 my-2">{runTime}</h1>

                <h1 className="mx-5 my-2">{time}</h1>

                <button className="mx-5 my-2" onClick={ ()=>{ setTimeNow(nowTimeIsFunc()) } }>Get Time</button>

            </div>
        </>
    )

}




export default TimePrectice
