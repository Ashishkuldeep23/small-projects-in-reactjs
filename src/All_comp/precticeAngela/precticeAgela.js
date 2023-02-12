import React from 'react'
import "./style.css"


// // // Time prectice by Angela ------------->
// import TimePrectice from './TimePrec/TimePrectice'


// // // Greet user ---------->
// import GreetUser from './greetUser/greetUser'


// // // // Color main --------->
// import ColorMain from './cardAndColor/ColorFolder/colorMain'


// // // Card main --------------->

import CardMian from "./cardAndColor/card/cardMain"


// // // Small todo ---------->

import SmallTodo from './smallTodo/SmallTodo'


// // // Modal compnetent ------------->

import ModalMain from '../Modal/ModalMain'


// // // // Feedback body ---------->

import FeedbackBody from "../Feedback/feedBody"



// // // Main function ------>

const PrecticeAgela = () => {
 


    return (
        <div id="precticeAngela">

            <FeedbackBody />

            <ModalMain />

            {/* Small todo here ---------> */}
            <SmallTodo />

            {/* This comp is used in time prectice f  Angela */}
            {/* <TimePrectice /> */}


            {/* This component to greeet user */}
            {/* <GreetUser /> */}
        


            {/* This component In card and color value input */}
            {/* <ColorMain /> */}

           
            {/* Card Main here now ----------> */}
            < CardMian />


        </div>
    )
}

export default PrecticeAgela