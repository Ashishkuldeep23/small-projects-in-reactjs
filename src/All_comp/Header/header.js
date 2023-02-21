import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./style.css"

const Header = ({ headerText, makeDarkTrue }) => {

  const [color, setColor] = useState(false)

  const makeToDarkMode = () => {

    if (color === false) {
      document.getElementById("root").style["background-color"] = "#28282b"
      setColor(true)
      makeDarkTrue(true)
      // // // MakeDarkTrue is a function , so i am calling that fuction according to darkMode value , calling by true or false.
    } else {
      document.getElementById("root").style["background-color"] = "#fff"
      setColor(false)
      makeDarkTrue(false)
    }

  }



  return (
    <>
      <div className="mainHearder bg-dark">

        <h1 className='text-sm-center  bg-dark  py-1 px-2 fw-bold'>Small React Projects</h1>

        <p className='m-0 text-center '>
          <a className="btn btn-primary px-2 py-0 bg-dark" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <i className="fa-solid fa-circle-info"></i> Show Info
          </a>
        </p>


        <div className=" collapse border border-warning border-3 rounded rounded-pill px-1 py-5 py-md-1 mx-1 " style={ {backgroundColor : "black"} } id="collapseExample1">
          <div className=" info_content rounded rounded-pill py-1 px-2">

            <h5 className='text-center px-5'>About this website  ( Small projects in ReactJS )  :-</h5>

            <ol>
              <li>In this web app many projects are linked together, anyone can navigate throught Nav Bar to see all projects.</li>

              <li>In this project i have used some advance concepts like :- Routing in React , useEffect Hook.</li>

              <li>In this project my main focus is on React core things like :- Use multiple times a functional component , taking input by useState object and other core react concept.. </li>

              <li>Projects are :- Restaurant FrontEnd , EmojiPedia , Keeper Notes , Toss , Chat , Card , SingIn , Time , Feedback.</li>

              <li>I'll upload a video of this website on Youtube and paste in the link below.</li>

            </ol>


            <p className='text-center m-0 px-5 '> <i className="fa-brands fa-youtube"></i> -: <a href="https://youtu.be/WM9j3YSJZ5E" rel="noreferrer" target={"_blank".toString()}>https://youtu.be/WM9j3YSJZ5E</a></p>
            <p className='text-center px-5 '>☝️All features of this web app.</p>
          </div>
        </div>


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

                  <Link className="nav-link  text-white mx-2 mx-sm-1 border border-primary rounded" aria-current="page" to={"/"}>Restaurant</Link>
                  <Link className="nav-link  text-white  mx-2 mx-sm-1 " to={"/emoji"}>Emoji</Link>
                  <Link className="nav-link  text-white  mx-2 mx-sm-1 " to={"/keeper"}>Keeper</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/login"} >SingIn</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/toss"}>Toss</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/chat"}>Chat</Link>
                  <Link className="nav-link text-white   mx-2 mx-sm-1 " to={"/card"} >Card</Link>
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