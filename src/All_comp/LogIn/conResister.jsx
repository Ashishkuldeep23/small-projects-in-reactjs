import React, { useState } from 'react'

import ConInput from './ConInput'

import "./style.css"


// // // Here going to take all data of user in on object of useSate() ----------------->

const ConRegister = ({ setIsUserValid }) => {

  const [userData, setUserData] = useState({
    fullName: "",
    url: "",
    email: "",
    pass: ""
  })


  const [passType , setPassType] = useState("password")

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
    // setUserData((preData) => {
    //   return { ...preData, [name]: value }
    // })



    // // 2nd way (Here i'm not taking any old data becoz i have in userData var , directly setting new data.) ---->


    setUserData({ ...userData, [event.target.name]: event.target.value })



  }






  function submitFunc(event) {

    const emailReg = (/^([a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,6})*$/)
    const nameReg = (/^([A-Za-z ]+){3,}$/)



    // // // Validation --------->

    const { fullName, url, email, pass } = userData

    if (fullName === "" || email === "" || pass === "") {
      return alert("All feild should given")
    }

    if (!nameReg.test(fullName)) {
      return alert("Given First Name is not valid")
    }


    if(!url){
      setUserData((pre)=>{
        return {...pre , url : "http://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png"}
      })
    }

    
    // const urlReg = (/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?\/[a-zA-Z0-9]{2,} $/)

    // if (!urlReg.test(url)) {
    //   return alert("Given URL is not valid")
    // }

    if (!emailReg.test(email)) {
      return alert("Given Email is not valid")
    }



    localStorage.setItem("userData", JSON.stringify(userData))    // // // Set data locally in LocalHost

    setUserData({ fullName: "", url: "", email: "", pass: "" })   // // // Set field to normal

    event.preventDefault()     // // // don't refresh page 

    alert("form submitted")    // // // An Alert msg

    setIsUserValid(true)
  }








  // // console.log(userData)


  return (
    <>

      {/* Old code by using functional component ---------> */}

      <div className='regester_div d-flex flex-column align-items-center'>
        <h3 className='text-center m-0'>{userData.fullName || "Name"}</h3>
        <p className='text-center mb-0'>{userData.email || "Email"}</p>
        <p className='text-center ' style={ { width : "35vh" , lineBreak : "anywhere"}}>{userData.url || "URL"}</p>

        <form>
          <ConInput
            type="text"
            placeholder="Full Name"
            required={true}
            value={userData.fullName}
            name="fullName"
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


          <div className='d-flex align-items-center'>



            <ConInput
              className="w-75 text-danger"
              type={passType}
              placeholder="Password"
              required={true}
              value={userData.pass}
              name="pass"
              onChange={changeHandleNew}
              onKeyDownValue={true}
              onClick={submitFunc}

            />

            <button className='w-25 bg-success fw-bold text-white rounded rounded-3 text-decoration-none ' onClick={(e)=>{ setPassType((passType==="password") ? "text" : "password");  e.preventDefault();  }}>Eye</button>

          </div>

          <div className='d-flex align-items-center' >


            <ConInput
              className="w-75 overflow-scroll"
              type="text"
              placeholder="Profile Pic (URL)"
              required={true}
              value={userData.url}
              name="url"
              onChange={changeHandleNew}
            />

            <a target='_blank' href='https://fileupload-using-multer-cloudinary-by-ak.onrender.com/' className='w-25 bg-success fw-bold text-white rounded rounded-3 text-decoration-none p-1 border border-dark '>Get URL</a>

          </div>

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