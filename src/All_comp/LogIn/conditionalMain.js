import React, { useState, useEffect } from 'react'

import ConRegister from "./conResister"
import ConLogIn from './conLogIn'

import "./style.css"

import ModalMain from '../Modal/ModalMain'



const ConditionalMain = () => {

    const [isUserValid, setIsUserValid] = useState(false)    // // // Is user regersed or not.

    

    useEffect(() => {

        let isUserDataPresent = localStorage.getItem("userData")

        if (isUserDataPresent) {
            setIsUserValid(true)
        }

    })


    // // // Below var is user to show logIn or Rester forms
    // const logedInUser = isUserValid

    return (
        < >
            <div className='conditional_main' >

                <ModalMain title={"LogIn"} data={"This is a SignIn and LogIn project , here user canput his details to sign in and then he or she can use that details to log in after successful logIn Name of user will displayed.(All imformation submitted by user will be locally stored in LocalStorage of Browser)"} />

                    <p id='hidden_text' >Your data will be locally stored in your computer.</p>

                    <div >

                        <h1 className='text-center text-white'>Tar.com</h1>

                        {/* <p id='hidden_text' >Your data will be locally stored in your computer.</p> */}

                        {isUserValid ? <ConLogIn setIsUserValid={setIsUserValid} /> : <ConRegister setIsUserValid={setIsUserValid} />}
                    </div>

            </div>


        </>
    )
}

export default ConditionalMain