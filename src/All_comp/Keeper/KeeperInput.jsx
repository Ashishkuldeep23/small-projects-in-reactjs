import React , {useState} from 'react'

const KeeperInput = ( {addNote , oneNote , changeHandle } ) => {

    const [isClicked , setIsClicked] = useState(false)

    return (
        <>
            <div>

                {
                    isClicked &&  <input type="text" name='title' placeholder='Title of your Note' value={oneNote.title} onChange={changeHandle} onKeyDown={ (e)=>{ if(e.key === "Enter") {addNote()} } }  />
                }
                


                <textarea name="note" placeholder='Your Note' id="" rows={isClicked ? "5" : "1"} value={oneNote.note} onChange={changeHandle} onKeyDown={ (e)=>{ if(e.key === "Enter") {addNote()} } }  onClick={ ()=>{setIsClicked(true)} } ></textarea>

                <button className='p-1' onClick={addNote}><i className="fa-solid fa-plus"></i></button>

            </div>
        </>
    )
}

export default KeeperInput