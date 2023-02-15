
import React, { useState } from 'react'
import "./style.css"

import ResturentBody from './Body/ResturentBody'
import ResturentMenu from './Menu/ResturentMenu'

import ShowMoreAboutBtn from './showMoreAboutBtn/ShowMoreAboutBtn'

import foodItems from "./foodItemsAPI"


import ModalMain from '../Modal/ModalMain'


import ForUser from '../ForUser/ForUser'


// // // To see all category of list 

const allListOfCategory = [ ...new Set(foodItems.map((ce) => {
  return ce.category
})) , "All"
]

// // // In above line running map in a set object to get unique data only.(using spread operator also)
// console.log(allListOfCategory)  // // Getting all unique data that is set 




// // // <======================= Main Componant ===============================>
const ResturentMain = ({darkMode}) => {

  const [items, setItems] = useState(foodItems)

  const [menuList , setmenuList] = useState(allListOfCategory)


  // // // Below both is used in show more data button clicked ---------->
  const [ showMoreAboutBtn , setShowMoreAboutBtn ] = useState( false )
  const [ showMoreAboutData , setShowMoreAboutData ] = useState( "")



  // // // Below function is used in show item by category ----->
  const findFood = (category) =>  {

    if(category === "All"){
      return setItems(foodItems)
    }

    // // // In below line apply filter on Api file (becz api file is a arr so we can use filter over there)
    const search = foodItems.filter((curEle) => {
      return curEle.category === category
    })

    setItems(search)
  }



  // const switchNow = false



  // // // Below function is used to hold data of clicked item ------------>

  function dataOfShowMoreAbout( value){
    let inStr = JSON.stringify(value)
    setShowMoreAboutData(inStr)
    return value
  }






  return (
    <div  id='resturentId' className=' min-vh-100 p-3 d-flex flex-column align-items-center'>

      <ModalMain title={"Resturent FrontEnd"} data={"This is a frontend of Resturent website.\nAll Data is created by API.\nMain features are :- Dark mode and About Page(About page created by user click)\nPlease checkout these features\nGive your valuation feedback in feedback section about this Resturent Frontend web."} />

      {/* <ResturentMenu findFood ={findFood}  menuList={menuList}   color={darkMode} /> */}
      {/* <ResturentBody items={items} color={darkMode} /> */}
                        {/* value of darkmode set to color props name for further use*/}



      {/* Expperiment duing here ---------------> */}

      {
        !showMoreAboutBtn && <ResturentMenu findFood ={findFood}  menuList={menuList}   color={darkMode} />
      }

      {
        !showMoreAboutBtn ? <ResturentBody items={items} color={darkMode} setShowMoreAboutBtn={setShowMoreAboutBtn}  dataOfShowMoreAbout={dataOfShowMoreAbout}/> : <ShowMoreAboutBtn setShowMoreAboutBtn={setShowMoreAboutBtn} color={darkMode} showMoreAboutData={showMoreAboutData} />
      }


      {/* At last a message to user */}

      <ForUser 

        data={"The user , if you are here and you like this section of the project then please tell your favorite Food Name in the comment section of the post or tell in the feedback section.Give your valuable comment please."}  

        className={"col-6 text-center py-2 px-5 my-3 rounded  rounded-pill"}  

        style={ { backgroundColor : "#e8f5ffe1" , border:"1px solid "  } } 

      />

    </div>
  )
}

export default ResturentMain