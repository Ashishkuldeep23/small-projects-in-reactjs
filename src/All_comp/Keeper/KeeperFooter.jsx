
import React from "react";

const KeeperFooter = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (

        <div id='keepFooter'>
            <p className='mb-0 text-center p-2 '>&#169; Copyright {year}</p>
        </div>
    )


}


export default KeeperFooter
