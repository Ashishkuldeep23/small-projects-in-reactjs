import React, { useState  , useEffect} from 'react'
import "./style.css"

import KeeperHeader from './KeeperHead'
import KeeperFooter from './KeeperFooter'
import KeeperNote from './keeperNote'

import KeeperInput from './KeeperInput.jsx'

import ModalMain from '../Modal/ModalMain'


const getAllNodeFromLocal = ()=>{

  let data = localStorage.getItem("KeeperData")

  if(data){
    return JSON.parse(data)
  }else{
    return []
  }


}


const Keeper = () => {

  const [allNotes, setAllNotes] = useState(getAllNodeFromLocal())

  const [oneNote, setOneNote] = useState({
    title: "",
    note: ""

  })


  function changeHandle(event) {

    const { name, value } = event.target

    setOneNote((preData) => {
      return {
        ...preData,
        [name]: value
      }
    })


  }


  function addNote() {

    if (oneNote.title === "" && oneNote.note === "") {
      return alert("Please provide data to add")
    }


    setAllNotes((preData) => {
      return [...preData, oneNote]
    })

    setOneNote({
      title: "",
      note: ""
  
    })

  }


  function deleteNote(id){
    
    // alert("Clicked")

    setAllNotes( (preData)=>{
      return preData.filter(( item , index )=>{
        return index !== id
      } )
    } )

  }



  useEffect( ()=>{
    localStorage.setItem( "KeeperData" , JSON.stringify(allNotes) )

  } , [allNotes])





  return (
    <>
      <div id="keepMainSection">

      <ModalMain title={"Keeper Notes"} data={"This is a keeper Notes type project , here user can write it's improtant notes by writting in input section and then click on plus icon. All notes will be stroed in LocalStorage of your computer , so user can use it as notes."} />

        <div>

          <KeeperHeader />

        </div>


        <div id='input_section' >


          <KeeperInput changeHandle={changeHandle} oneNote={oneNote}  addNote={addNote}/>

        </div>


        {/* <div >

          <div>
            <h3>{oneNote.title}</h3>
            <p>{oneNote.note}</p>
          </div>


        </div> */}



        <div id='keeperNote'>

          {/* {

            < KeeperNote dummy={true} para={oneNote.note} title={oneNote.title}/>

          } */}



          {

            allNotes.map((item, index) => {

              return ( < KeeperNote key={index} index={index} para={item.note} title={item.title}  deleteNote={deleteNote
              } />  )

            })

          }



        </div>






        <div >

          <KeeperFooter />

        </div>

      </div>




    </>
  )
}

export default Keeper