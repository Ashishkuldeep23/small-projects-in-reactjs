import React, { useState , useEffect } from 'react'

import ConRegister from "./conResister"
import ConLogIn from './conLogIn'

import "./style.css"

import ModalMain from '../Modal/ModalMain'



const ConditionalMain = () => {

    const [isUserValid , setIsUserValid] = useState(false)

    const [name, setName] = useState("YourName")

    const [fnameInput, setFnameInput] = useState("FName")
    const [lnameInput, setLnameInput] = useState("LName")


    // // // This fn is using before when showing output on div --------->
    function FnameChangeHandler(e) {
        // // console.log(e.target.value)
        setFnameInput(e.target.value)
    }

    function LnameChangeHandler(e) {
        // // console.log(e.target.value)
        setLnameInput(e.target.value)
    }

    function submitName() {
        setName(`${fnameInput} ${lnameInput}`)
    }



    useEffect( ()=>{

        let isUserDataPresent = localStorage.getItem("userData")

        if(isUserDataPresent){
            setIsUserValid(true)
        }

    } )


    // // // Below var is user to show logIn or Rester forms
    // const logedInUser = isUserValid

    return (
        < >
            <div className='conditional_main' >

            <ModalMain title={"LogIn"} data={"This is a SignIn and LogIn project , here user canput his details to sign in and then he or she can use that details to log in after successful logIn Name of user will displayed.(All imformation submitted by user will be locally stored in LocalStorage of Browser)"} />
            

                <div >

                    <h1 className='text-center text-white'>Tar.com</h1>

                    <p id='hidden_text'>Your data will be locally stored in your computer.</p>
                    
                    {isUserValid ?  <ConLogIn setIsUserValid={setIsUserValid} />  : <ConRegister setIsUserValid={setIsUserValid} />}
                </div>

               
            </div>


            {/* Name div here --------- */}
            {/* Experiment only here ----------> */}



            {/* <div className='conditional_main text-center'>
                <div>
                    <h1>Hello {name}</h1>
                    <h1>{fnameInput}</h1>
                    <h1>{lnameInput}</h1>
                    <input type="text" placeholder='FName' onChange={FnameChangeHandler} onKeyDown={(e) => {
                        if (e.code === "Enter") {
                            submitName()
                        }
                    }} />   <br />
                    <input type="text" placeholder='LName'  onChange={LnameChangeHandler} onKeyDown={(e) => {
                        if (e.code === "Enter") {
                            submitName()
                        }
                    }} /> <br />


                    <button onClick={submitName}>Submit</button>
                </div>

            </div> */}


        </>
    )
}

export default ConditionalMain