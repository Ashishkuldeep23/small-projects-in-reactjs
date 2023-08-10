import React from 'react'

const ConInput = ({type , placeholder , value , name , required = false , onChange , id = "" , onClick = ()=>{} , defaultValue , onKeyDownValue = false }) => {

  // // // defaultValue is used in Buttons , value is not working that's why.
  // // // onKeyDownValue is var value that holds true and false means if value given true then on perform somthing.
  // // // See onClick i'm calling onclick if onKeyDownValue value is false in type btn only.
  // // // onKeyDownValue value is improtant in enter key an submit form.
  // // // Value of onClick should given inside props. (sublit fnction should given in onclick of input tag taht reads Enter key).


  return (
    <> 
        <input 
          id={id}
          className='d-block w-100 px-3 py-1 my-2 border border-danger rounded text-primary '
          type={type}
          name={name}
          placeholder={placeholder} 
          value={value}
          defaultValue={defaultValue}
          required={required}
          onChange={onChange}

          onClick={(e)=>{ if(!onKeyDownValue) onClick(e) }}
          onKeyDown={ (e)=>{ 
            if(onKeyDownValue && e.key === "Enter" ){ onClick(e) }
          } }

        />
    
    </>
  )
}

export default ConInput