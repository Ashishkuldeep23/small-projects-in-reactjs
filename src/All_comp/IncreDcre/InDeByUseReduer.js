import React , {useReducer , useEffect} from 'react'

import "./style.css"



// // // Same increment and decrement doing by using useReducer here ------------------>

const reducer =(state , action) =>{

    if( state < 20 && action.type === "INCR"){
        state = +(state) + 1
    }

    if( state > 0 && action.type === "DECR"){
        state = +(state) - 1
    }
    
    return state
}


const InDeByUseReduser = () => {

    let intialdata = "5"
    const [ state , dispath ] =  useReducer(reducer , intialdata)



    useEffect( ()=>{
        document.title = `Facebook Chat(${state})`
    } )


  return (
    <>

        <div className='container-fluide min-vh-100 bg-dark text-white  d-flex justify-content-center align-items-center'>


           

            <div className='col-md-6 col-lg-4 border border-info rounded rounded-pill p-3 d-flex flex-column align-items-center'>

                <p className='text-info'>Number in b/w 0 to 20</p>

                <div className='mb-5 mt-2 text-info' id="number">
                    <h1>{state}</h1>
                </div>

                
                <div  id="btns">

                    <button className='mx-5 p-2 bg-warning border border-warning rounded bg-info btnID' onClick={ ()=> dispath({type : "INCR"}) }  >Increment</button>

                    <button className='mx-5 p-2 bg-warning border border-warning rounded bg-info btnID'  onClick={ ()=> dispath({type : "DECR"}) } >Decrement</button>


                </div>



            </div>

          


        </div>


    
    </>
  )
}

export default InDeByUseReduser