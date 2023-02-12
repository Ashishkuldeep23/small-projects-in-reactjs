import React , {useState}  from 'react'
import "./style.css"



const ResturentBody = ({ items , color , setShowMoreAboutBtn , dataOfShowMoreAbout }) => {

  // // // Below useState for show more button           
  const [showMoreDes , setShowMoreDes] = useState(false)

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


  const about_more_func = (clickedEle) =>{
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

              const { image, name, price, description } = curEle

              return(

                <div className={!color ? " bg-danger border border-danger  cardAk" : "bg-warning border border-warning  cardAk"} key={i}>

                  <div className={!color ? "border border-danger cardInnerAk" : 'border border-warning darkCardInnerAk'}>
                    <h2 className={!color ? ' border border-danger border-3 rounded-circle d-inline-block bg-white text-dark fw-bolder  px-2' : ' border border-warning border-3 rounded-circle d-inline-block bg-dark text-white fw-bolder  px-2'}>{i + 1}</h2>
                    <img className='foodImage' src={image} alt={name} />
                    <h3 className='animate__animated animate__zoomInDown checkAk '>{name}</h3>
                    <h4>{price}</h4>
                    <p className=' text-primary text-end border rounded  border-primary  border-start-0 border-end-0 '>Read</p>
                    <div className='description_div'>

                      <p className='d-inline'>
                        { (showMoreDes) ? description : `${description.substring(0,215)}` }
                      </p>

                      {
                       ( description.length>215)  &&
                        <span className='more_btn' onClick={()=>{setShowMoreDes(!showMoreDes)}}>{ (!showMoreDes)? " ...more": " ...less" }</span>
                      }
                    </div>
                    <button className='btn btn-outline-success card_btn_Ak' onClick={() => { orderFunc(name, price) }}>Order Now</button>
                    <button className='btn btn-outline-primary mx-2 card_btn_Ak' onClick={() => { about_more_func(curEle) }}>About</button>
                  </div>

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