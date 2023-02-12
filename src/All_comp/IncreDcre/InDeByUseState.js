import React, { useState, useEffect } from 'react'

import "./style.css"

import ModalMain from '../Modal/ModalMain'


const InDeByUseSate = ({ darkMode }) => {

    const initialData = "5"
    const [num, setNum] = useState(initialData)

    useEffect(() => {
        document.title = `Chat(${num})`
    })


    const change = (p) => {

        if (p === "in") {
            setNum(+(num) + 1)
        } else if (p === "de") {
            setNum(+(num) - 1)
        }

    }


    let min = 1
    let max = 25


    return (
        <>

            <div id='chatId' className={darkMode ? 'container-fluide  bg-white text-white  d-flex justify-content-center align-items-center' : 'container-fluide  bg-dark text-white  d-flex justify-content-center align-items-center'}>

                <ModalMain title={"Counter Project"} data={"In this project user can count number between 1 to 25 by pressing Increment or Decrement key and as number is increases or decreases the title of this web get change."} />
            
                <div className='col-md-6 col-lg-5 border border-warning rounded rounded-pill p-3 d-flex flex-column align-items-center'>

                    <p className='text-warning'>Number in b/w {min} to {max}</p>

                    <div className='mb-5 mt-2 text-warning' id="number">
                        <h1>{num}</h1>
                    </div>


                    <div id="btns" className='text-center'>

                        <button className='mx-5 my-2 p-2 border border-info rounded bg-info btnID' onMouseOver={() => { num < max ? change("in") : setNum(max) }} onClick={() => { num < max ? change("in") : setNum(max) }}>Increment</button>

                        <button className='mx-5 my-2 p-2 border border-info rounded bg-info btnID' onMouseOver={() => { num > min ? change("de") : setNum(min) }} onClick={() => { num > min ? change("de") : setNum(min) }}>Decrement</button>


                    </div>



                </div>




            </div>



        </>
    )
}

export default InDeByUseSate