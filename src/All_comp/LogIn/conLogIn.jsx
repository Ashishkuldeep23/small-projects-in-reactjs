import React, { useState , useEffect } from 'react'

import ConInput from './ConInput'


const ConLogIn = ({setIsUserValid}) => {

    const [isregiser, setIsregister] = useState(false)

    const [userInput, setUserInput] = useState({
        email: "",
        pass: ""
    })



    function changeHandler(event) {

        const { value, name } = event.target

        setUserInput((preData) => {

            if (name === "email") {
                return {
                    email: value,
                    pass: preData.pass
                }
            }
            else if (name === "pass") {

                return {
                    email: preData.email,
                    pass: value
                }

            }

        })


    }



    function submitbtn() {

        const emailReg = (/^([a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,6})*$/)


        // // Validation --->

        if ((userInput.email === "") || (userInput.pass === "")) {
            return alert("All feild should be given")
        }

        if(!emailReg.test(userInput.email) ){
            return alert("Givn Email is not valid")
        }
      

        let storedData = localStorage.getItem("userData")

        let actualData = JSON.parse(storedData)

        let email = actualData.email
        let pass = actualData.pass

        if (email !== userInput.email) {
            return alert("Email no matched")
        }

        if (pass !== userInput.pass) {
            return alert("Password no matched")
        }



        alert("LogIn successful\nYour name is: " + actualData.fName + " " + actualData.lName)
        setIsregister(true)
        localStorage.setItem( "isRegister" , "yes2" )

    }




    let storedEmail , storedName
    if(isregiser){

        let storedData = localStorage.getItem("userData")
        let actualData = JSON.parse(storedData)

        storedName = actualData.fName + " " + actualData.lName
        storedEmail = actualData.email
    }



    function deleteLocaldata (){
        localStorage.removeItem("userData")
        localStorage.removeItem("isRegister")
        setIsregister(false)
        setIsUserValid(false)
        alert("Data Deleted")

    }


    // // Some onLoad code ---------------->


    useEffect( ()=>{

        let isRegister = localStorage.getItem('isRegister')

        console.log(isRegister)

        console.log("I am loaded")
    
        if( isRegister === "yes2" ){
            setIsregister(true)
        }
    
    } )




    return (
        <>

            <div className='d-flex flex-column  regester_div' >


                {

                    (isregiser)
                        ? <div className='text-center'> 

                            <h2>{storedName}</h2>
                            <p>{storedEmail}</p>
                            <button className='px-2 py-1 bg-danger text-white fw-bold border rounded m-2' onClick={deleteLocaldata}>Delete Data</button>
                        </div>

                        : <div className='regester_div'>

                            <form action="">

                                <p className='text-center'>{userInput.email}</p>

                                <ConInput type="text" placeholder="Email" name="email" required={true} onChange={changeHandler} value={userInput.email} id={"1"} />

                                <ConInput type="password" placeholder="Password" name="pass" onChange={changeHandler} required={true} value={userInput.pass} id={"2"}  />

                                <ConInput type="Button" defaultValue="LogIn" onClick={submitbtn} id={"3"}  />

                            </form>

                        </div>

                }

            </div>

        </>
    )
}

export default ConLogIn