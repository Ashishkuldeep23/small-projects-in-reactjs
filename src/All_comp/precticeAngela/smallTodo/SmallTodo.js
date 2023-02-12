
import React ,{useState , useEffect} from 'react'


import "./style.css"


import ItemOfTodo  from './itemOfTodo'

const SmallTodo = () => {


    const [ todo , setTodo ] = useState([])

    const [text , setText] = useState("")


    function handleChange(e){
        const value = e.target.value
        setText(value)
    }


    function clickHandle(){

        if( text === ""){
            return alert("Give some data")
        }

        setTodo( (pre)=>{
            return [ ...pre , text ]
        } )
        
        
        // console.log(todo)

        
        let jsonTodo = JSON.stringify(todo)
        localStorage.setItem("smallTodo" , jsonTodo)

        
        
        
        setText("")
    }


    // console.log(todo)

    // function mapComponet(item){

    //     return <li>{item}</li>

    // }


    useEffect( ()=>{

        let getData = localStorage.getItem("smallTodo")

        if(getData){

            
            getData = JSON.parse(getData)
            // console.log(getData)
            
            setTodo(getData)
        }

    } , [] )




    function deleteTodo (id){

        setTodo( (preData)=>{

           return preData.filter( (item , index)=>{ return index !== id })

        } )


    }



  return (
    <>

        <div className="small_todo_main">

            {/* print only */}

            {/* <p>{text}</p>
            <p>{todo}</p> */}

            <div className="small_todo">
                
                <div>
                    <input type="text" name="todo" placeholder='Write new Todo' value={text} onKeyDown={ (e)=>{
                        if(e.key === "Enter"){clickHandle()}
                    } } onChange={handleChange}/>
                    <button onClick={clickHandle}>Add</button>
                </div>

                <div className='text-start'>

                    <ol>
                        {
                            todo.map( (item , index)=>{
                                return ( <ItemOfTodo key={index} index={index} item={item} deleteTodo={deleteTodo} /> )
                            } )
                        }
                     
                    </ol>

                </div>

            </div>

        </div>
    
    </>
  )
}

export default SmallTodo