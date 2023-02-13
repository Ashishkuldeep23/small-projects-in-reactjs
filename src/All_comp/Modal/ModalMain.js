import React from 'react'

const ModalMain = ( { title = "Title Not Given" , data = "Data Not Decleared" , color = "black"  } ) => {


    let styleForBtn = {
        position:"absolute" ,
        top:"25%" ,
        right:"2%" ,
        zIndex : 100 ,
    }

    return (
        <>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary btn-sm rounded rounded-circle px-2 py-0" style={ styleForBtn  } data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa-solid fa-info"></i>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={ { color:color} } id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={ { color:color} }>
                            {data}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-outline-danger"  data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ModalMain