import React , {useState}  from 'react'

import "./style.css"

import coin from "./coin_flip1.mp3"


import ModalMain from '../Modal/ModalMain'



const Toss = ({darkMode}) => {

    const [ value , setValue ]=useState("COIN")


    const tossTheCoin = () =>{

        let music = new Audio(coin)
        music.play()

        document.querySelector(".coin").classList.add("coinUpDown")

        let a = Math.round(Math.random() * 14) + 1

        // console.log(a)

        setTimeout(() => {


            // let a = Math.round(Math.random() * 3)

            // console.log(a)

        
            if((a>=1 && a<=3 )|| (a>=12 && a<=13)){
                document.querySelector("#mainHolder").style["background-color"] = "darkred"
                document.querySelector(".btnID").style.color= "darkred"
                setValue("HEAD")
            }else if((a>=7 && a<=9)  ||  (a>=14 && a<=15)){
                document.querySelector("#mainHolder").style["background-color"] = "green"
                document.querySelector(".btnID").style.color= "green"
                setValue("TAIL")
            }else if((a >=4 && a<=6 ) || (a>=10 && a<=11 )){
                document.querySelector("#mainHolder").style["background-color"] = "black"
                document.querySelector(".btnID").style.color= "black"
                setValue("AGAIN")
            }

            document.querySelector(".coin").classList.remove("coinUpDown")
            music.pause()


        }, 1200);


    }


  return (
    <>

        <div id='tossId' className={darkMode ? 'container-fluide  bg-white text-white  d-flex justify-content-center align-items-center' : 'container-fluide  bg-dark text-white  d-flex justify-content-center align-items-center'}>

            <ModalMain title={"TOSS"} data={"This is simple toss project , here user can toss coin and as output he or she will get Head , Tail or Again, so try at once."}  />
            

            <div className='col-11 col-sm-7 border border-warning rounded rounded-pill p-3 d-flex flex-column align-items-center ' id='mainHolder'>

                <h2 className='text-warning border border-warning border-end-0 border-start-0 border-top-0   rounded rounded-pill  px-2 py-5 py-sm-2'>🪙Flip the Coin🪙</h2>

                <div className='my-5 text-warning' id="number">
                    <h1 className='border border-warning rounded rounded-circle py-5 px-4 bg-dark coin '>{value}</h1>
                </div>

                
                <div  id="btns">

                    <button className='mx-5 px-4 py-1 fs-2 fw-bolder border border-info rounded rounded-pill text-transparent bg-info btnID' onClick={()=>{ tossTheCoin()}} >Toss</button>

                </div>



            </div>

          


        </div>


    
    </>
  )
}

export default Toss