
import React from "react";

const ItemOfTodo = (pro) =>{

    return(

        <div  onClick={ ()=>{pro.deleteTodo(pro.index)}} > <li>{pro.item}</li></div> 

    )


}



export default ItemOfTodo