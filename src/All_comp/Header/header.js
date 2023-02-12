import React,{useState} from 'react'
import {Link} from "react-router-dom"

import "./style.css"

const Header = ({ headerText , makeDarkTrue }) => {

  const [color , setColor] = useState(false)

  const makeToDarkMode = ()=>{

    if(color === false){
      document.getElementById("root").style["background-color"] = "#28282b"
      setColor(true)
      makeDarkTrue(true)
      // // // MakeDarkTrue is a function , so i am calling that fuction according to darkMode value , calling by true or false.
    }else{
      document.getElementById("root").style["background-color"] = "#fff"
      setColor(false)
      makeDarkTrue(false)
    }

  }



  return (
    <>
      <div className="mainHearder bg-dark">

        <h1 className='text-sm-center  bg-dark  py-1 px-1 fw-bold'>Small React Projects</h1>

      </div>



      <nav className="navbar navbar-expand-sm  justify-content-end p-0 navbar-light bg-dark text-white">


        <div className="container-fluide ">


          <div className='d-flex w-100 justify-content-space-between'>


            <div id='darkModeBtn'>
              <button id='darkBtn' className={!color ? ' px-2 btn btn-secondary btn-sm ' : "  px-2 btn btn-light btn-sm"} onClick={() => { makeToDarkMode() }}>{!color ? <i className="fa-solid fa-moon"></i> || "Dark" : "Light" || <i className="fa-solid fa-sun"></i>}</button>
            </div>


            <div>

              <div className='d-flex justify-content-end'>
                <button className="navbar-toggler btn btn-sm p-0 rounded bg-white mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                 
                  <Link className="nav-link  text-white mx-2 mx-sm-1 border border-primary rounded" aria-current="page" to={"/"}>Resturent</Link>
                  <Link className="nav-link  text-white  mx-2 mx-sm-1 " to={"/emoji"}>Emoji</Link>
                  <Link className="nav-link  text-white  mx-2 mx-sm-1 " to={"/keeper"}>Keeper</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/toss"}>Toss</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/chat"}>Chat</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/card"} >Card</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/login"} >SingIn</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/time"} >Time</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/feedback"} >Feedback</Link>
                  
                </div>
              </div>


            </div>


          </div>




        </div>

      </nav>





    </>
  )
}

export default Header