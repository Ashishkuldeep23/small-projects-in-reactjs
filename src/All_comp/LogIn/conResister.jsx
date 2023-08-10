import React, { useState } from 'react'

import ConInput from './ConInput'

import "./style.css"


// // // Here going to take all data of user in on object of useSate() ----------------->

const ConRegister = ({ setIsUserValid }) => {

  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: ""
  })


  // // // Priviously i'm doing this to many if elase here (Long Process) ---->

  const changeHandle = (event) => {
    const { value, name } = event.target

    setUserData((preData) => {

      if (name === "fName") {
        return {
          fName: value,
          lName: preData.lName,
          email: preData.email,
          pass: preData.pass
        }
      }
      else if (name === "lName") {
        return {
          fName: preData.fName,
          lName: value,
          email: preData.email,
          pass: preData.pass
        }
      }
      else if (name === "email") {
        return {
          fName: preData.fName,
          lName: preData.lName,
          email: value,
          pass: preData.pass
        }
      }
      else if (name === "pass") {
        return {
          fName: preData.fName,
          lName: preData.lName,
          email: preData.email,
          pass: value
        }
      }

    })

  }


  // // // Now using this function , work is same (this and above) , see noted to understant more ------->

  function changeHandleNew(event) {

    const { name, value } = event.target


    // // // // Two ways to do this ------->

    // // 1st way (Here in set function i'm taking old data)---->
    setUserData((preData) => {
      return { ...preData ,[name]: value }
    })
    


    // // 2nd way (Here i'm not taking any old data becoz i have in userData var , directly setting new data.) ---->


    setUserData( {...userData , [event.target.name] : event.target.value} )



  }






  function submitFunc(event) {

    const emailReg = (/^([a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,6})*$/)
    const nameReg = (/^([A-Za-z ]+){3,}$/)


    // // // Validation --------->

    const { fName, lName, email, pass } = userData

    if (fName === "" || lName === "" || email === "" || pass === "") {
      return alert("All feild should given")
    }

    if (!nameReg.test(fName)) {
      return alert("Givn First Name is not valid")
    }

    if (!nameReg.test(lName)) {
      return alert("Givn Last Name is not valid")
    }

    if (!emailReg.test(email)) {
      return alert("Givn Email is not valid")
    }



    localStorage.setItem("userData", JSON.stringify(userData))    // // // Set data locally in LocalHost

    setUserData({ fName: "", lName: "", email: "", pass: "" })   // // // Set field to normal

    event.preventDefault()     // // // don't refresh page 

    alert("form submitted")    // // // An Alert msg

    setIsUserValid(true)
  }








  // // console.log(userData)


  return (
    <>

      {/* Old code by using functional component ---------> */}

      <div className='regester_div'>
        <h3 className='text-center'>{userData.fName} {userData.lName}</h3>
        <p className='text-center'>{userData.email}</p>

        <form>
          <ConInput 
            type="text"
            placeholder="First Name" 
            required={true} 
            value={userData.fName} 
            name="fName" 
            onChange={changeHandleNew}
          />

          <ConInput 
            type="text" 
            placeholder="Last Name" 
            required={true} 
            value={userData.lName} 
            name="lName" 
            onChange={changeHandleNew} 
          />

          <ConInput 
            type="text" 
            placeholder="Email" 
            required={true} 
            value={userData.email} 
            name="email" 
            onChange={changeHandleNew} 
          />

          <ConInput 
            type="password"
            placeholder="Password"
            required={true}
            value={userData.pass}
            name="pass"
            onChange={changeHandleNew}
            onKeyDownValue={true}
            onClick={submitFunc}
            
          />

          <ConInput 
            type="button"
            defaultValue="Registeration"
            onClick={submitFunc}
          />
        </form>

      </div>


      {/* New worked ---------> Below is more under standiable */}

      {/* <div className='text-center regester_div'>

        <h3>{userData.fName} {userData.lName}</h3>
        <p>{userData.email}</p>

        <form action="" onSubmit={submitFunc}>

          <input required={true} type="text" value={userData.fName} name="fName" placeholder='First Name' onChange={changeHandle} />
          <input required={true} type="text" value={userData.lName} name="lName" placeholder='Last Name' onChange={changeHandle} />
          <input required={true} type="email" value={userData.email} name="email" placeholder='Email' onChange={changeHandle} />
          <input required={true} type="password" value={userData.pass} name="pass" placeholder='Password' onChange={changeHandle} />

          <button>Submit</button>

        </form>

      </div> */}


    </>
  )
}

export default ConRegister