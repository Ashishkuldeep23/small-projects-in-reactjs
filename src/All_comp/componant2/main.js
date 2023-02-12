import React from "react"
import pic from "../componant2/ak_pic/ashish1.jpg"

import ModalMain from '../Modal/ModalMain'



/**
 * By giveing this type of mail you will get composed mail --->
 * https://mail.google.com/mail/u/0/?to=ashishkuldeep6@gmail.com&su=SUBJECT&body=BODY&bcc=ashishkuldeep6@gmail.com&fs=1&tf=cm
 */





export default function App2() {



  function printCard() {

    let preData = document.getElementById("root").innerHTML

    let data = document.getElementById("main_card_data").innerHTML

    document.getElementById("root").innerHTML = data

    window.print()
    document.getElementById("root").innerHTML = preData
  }





  return (
    <div className="main">

      <ModalMain title={"Card"} data={"This is simple card , here new thing is that user can print this card by clicking on print buttn."} />

      <div id="main_card_data">


        <div className="card border border-warning" id="mainCard">
          <div className="cen">
            <img className="pic" src={pic} alt="PIC" />
            <div className="view_hov">
              <h1 className="name_hov text-info">ASHISH </h1>
            </div>
          </div>
          <div className="detail">
            <h2 className="line text-warning">Ashish Kuldeep</h2>
            <h4 className="line">Web Developer</h4>
            <div className="buttom_mid cen">

              <a href="https://mail.google.com/mail/u/0/?to=ashishkuldeep6@gmail.com&su=SUBJECT&body=BODY&bcc=ashishkuldeep6@gmail.com&fs=1&tf=cm" alt="GMail" className="socialLogo" target={true} ><i className="fa-solid fa-envelope"></i></a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="https://www.linkedin.com/in/ashish-kuldeep-09b96018b" alt="LinkedIn" className="socialLogo" target={true}><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <h4 className="text-warning">About</h4>
            <ul>
              <li>Web Developer</li>
              <li>I'm learning MERN Stack</li>
            </ul>

            <h4 className="text-warning">Projects</h4>
            <ul>
              <li>ToDo</li>
              <li>Resturent</li>
              <li>Mix React Project</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>


        </div>

      </div>


      <button id="print_btn" onClick={() => { printCard() }}>Print</button>

    </div>
  )
}