import React from 'react'

const KeeperNote = ({title="This is Note tittle" , para = "Data not given" , dummy , index , deleteNote}) => {
    return (
        <>

            <div className="noteSingle  px-4 py-1  ">
                <h5 className='m-0'>{title}</h5>
                <p>{para}</p>

                {
                    !dummy && <button className='btn btn-outline-danger btn-sm' onClick={ ()=>{ deleteNote(index) } } ><i className="fa-solid fa-trash"></i></button>
                }
                
            </div>



        </>
    )
}

export default KeeperNote