import React, { useState , useEffect } from 'react'

import ConInput from './ConInput'


const ConLogIn = ({setIsUserValid}) => {

    const [isLoginEd, setIsLoginEd] = useState(false)

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


        // // // Bad Entry 400 (Email and pass not matched)
        if (email !== userInput.email) {
            return alert("Email no matched")
        }

        if (pass !== userInput.pass) {
            return alert("Password no matched")
        }



        alert("LogIn successful\nYour name is: " + actualData.fName + " " + actualData.lName)
        setIsLoginEd(true)
        localStorage.setItem( "isLoginEd" , "yes2" )

    }




    let storedEmail , storedName , storedImg
    if(isLoginEd){

        let storedData = localStorage.getItem("userData")
        let actualData = JSON.parse(storedData)

        storedName = actualData.fullName
        storedEmail = actualData.email
        storedImg = actualData.url
    }



    function deleteLocaldata (){
        localStorage.removeItem("userData")
        localStorage.removeItem("isLoginEd")
        setIsLoginEd(false)
        setIsUserValid(false)
        alert("Data Deleted")

    }


    // // Some onLoad code ---------------->


    useEffect( ()=>{

        let isLoginEd = localStorage.getItem('isLoginEd')

        // console.log(isLoginEd)

        // console.log("I am loaded")
    
        if( isLoginEd && isLoginEd === "yes2" ){
            setIsLoginEd(true)
        }
    
    } )




    return (
        <>

            <div className='d-flex flex-column  regester_div' >


                {

                    (isLoginEd)
                        ? <div className='text-center'> 
                            <img src={storedImg} alt="User" />
                            <h2>{storedName}</h2>
                            <p>{storedEmail}</p>
                            <button className='px-2 py-1 bg-danger text-white fw-bold border rounded m-2' onClick={deleteLocaldata}>Delete Data</button>
                        </div>

                        : <div className='regester_div'>

                            <form action="">

                                <p className='text-center'>{userInput.email}</p>

                                <ConInput 
                                    id={"1"}
                                    type="text" 
                                    placeholder="Email" 
                                    name="email" 
                                    required={true} 
                                    onChange={changeHandler} 
                                    value={userInput.email} 
                                />

                                <ConInput 
                                    id={"2"}
                                    type="password" 
                                    placeholder="Password"
                                    name="pass"
                                    onChange={changeHandler}
                                    required={true}
                                    value={userInput.pass}
                                    onClick={submitbtn}
                                    onKeyDownValue={true}
                                />

                                <ConInput type="Button" defaultValue="LogIn" onClick={submitbtn} id={"3"}  />

                            </form>

                        </div>

                }

            </div>

        </>
    )
}

export default ConLogIn