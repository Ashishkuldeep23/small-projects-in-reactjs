import React from 'react'

const ConInput = ({type , placeholder , value , name , required = false , onChange , id = "" , onClick , defaultValue}) => {


  return (
    <> 
        <input className='d-block w-100 px-3 py-1 my-2 border border-danger rounded text-primary '  type={type} name={name} id={id} placeholder={placeholder} value={value} defaultValue={defaultValue} required={required}  onChange={onChange} onClick={onClick} />
    
    </>
  )
}

export default ConInput