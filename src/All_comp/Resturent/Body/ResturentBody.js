import React, { useState } from 'react'
import "./style.css"


import EachCard from './EachCard.js'


const ResturentBody = ({ items, color, setShowMoreAboutBtn, dataOfShowMoreAbout }) => {



  // const [ itemsMain , setItemsMain ]=useState(null);
  // console.log(items)

  // // // Below functon created for Order now button --->
  const orderFunc = (foodName, foodPrice) => {
    alert([foodName, foodPrice])
  }


  // console.log(color)

  // // // Changing color of body --->
  // if(color){{
  //   document.querySelector(".cardInnerAk").classList.add("darkMode")
  // }}


  const about_more_func = (clickedEle) => {
    // console.log(clickedEle)

    // // // Not working (bad way for do about more ----> (below))
    // const {name , category , description , image , price} = clickedEle
    // document.getElementById("mainHolderOfAll").innerHTML = `<div><h1>Name : ${name}</h1> <div><span>${category}</span> <span>${price}</span></div> <img src="${image}" alt="" /> <p>${description}</p></div>`

    // alert(clickedEle.id+"."+clickedEle.name)

    dataOfShowMoreAbout(clickedEle)
    setShowMoreAboutBtn(true)

  }







  return (

    <div className='min-vh-100  d-flex justify-content-center ' id='mainHolderOfAll'  >


      {/* Main Div for Cards */}
      <div className='container '>

        <div className={!color ? "row d-flex flex-wrap  justify-content-center align-items-center cardHolderAk" : "row d-flex flex-wrap align-items-center darkCardHolderAk"}>

          {
            items.map((curEle, i) => {
              return (

                <div className={!color ? " bg-danger border border-danger  cardAk" : "bg-warning border border-warning  cardAk"} key={i}>


                  <EachCard
                    i={i}
                    color={color}
                    curEle={curEle} 
                    orderFunc={orderFunc}
                    about_more_func={about_more_func}
                  />
                  


                </div>


              )


            })

          }






        </div>

      </div>

    </div>
  )
}

export default ResturentBody