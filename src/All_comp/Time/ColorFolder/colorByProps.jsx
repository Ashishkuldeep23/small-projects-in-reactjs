import React  from 'react'



const ColorByProps = ({colorByInner}) => {

  const [inputOfColor , setInputOfColor] = React.useState("")



  function onChangeHandler(e){
    let value = e.target.value

    colorByInner(value)
    setInputOfColor(value)
  }


  const giveColorName = ()=>{

    // //  // Priviously i'm doing this -------------->
    // let ele = document.getElementById("inputOfColor").value
    // setInputOfColor(inputOfColor)
    // console.log(ele)
    // document.getElementById("inputOfColor").value = ""
    
    colorByInner(inputOfColor)
    setInputOfColor("")

  }



  return (
    <div className='text-center my-2 mt-4'>

        <input  type="text" id='inputOfColor' placeholder='Enter your fav color' onChange={onChangeHandler} value={inputOfColor}  onKeyDown={(e)=>{ 
          if(e.code === "Enter"){giveColorName()}
         }}  />
        <input  className='rounded bg-dark text-white fw-bold px-1' type="button" value="Enter" onClick={()=>{giveColorName()}}/>
    </div>
  )
}

export default ColorByProps