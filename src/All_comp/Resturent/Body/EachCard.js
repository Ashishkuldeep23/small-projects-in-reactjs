import React , {useState} from 'react'
import "./style.css"


// // // Now show more discription is solved becoz i'm seprating cards and each card has it's show description value true and false. And i'm showing Full description on the basis of vlaue of true false.




const EachCard = ({ color, i, curEle, orderFunc, about_more_func }) => {

      // // // Below useState for show more button           
  const [showMoreDes, setShowMoreDes] = useState(false)

    const { image, name, price, description } = curEle

    return (
        <>
            <div className={!color ? "border border-danger cardInnerAk" : 'border border-warning darkCardInnerAk'}>
                <h2 className={!color ? ' border border-danger border-3 rounded-circle d-inline-block bg-white text-dark fw-bolder  px-2' : ' border border-warning border-3 rounded-circle d-inline-block bg-dark text-white fw-bolder  px-2'}>{i + 1}</h2>
                <img className='foodImage' src={image} alt={name} />
                <h3 className='animate__animated animate__zoomInDown checkAk '>{name}</h3>
                <h4>{price}</h4>
                <p className=' text-primary text-end border rounded  border-primary  border-start-0 border-end-0 '>Read</p>
                <div className='description_div'>

                    <p className='d-inline'>
                        {/* Here if value is false then show only 215 chars and if true then show all descripyion */}
                        {(showMoreDes) ? description : `${description.substring(0, 200)}`}
                    </p>

                    {
                        (description.length > 215) &&
                        <span
                            className='more_btn'
                            onClick={() => { setShowMoreDes(!showMoreDes) }}
                        >{ (!showMoreDes) ? " ...more" : " ...less" }</span>
                    }
                </div>
                <button className='btn btn-outline-success card_btn_Ak' onClick={() => { orderFunc(name, price) }}>Order Now</button>
                <button className='btn btn-outline-primary mx-2 card_btn_Ak' onClick={() => { about_more_func(curEle) }}>About</button>
            </div>


        </>
    )
}


export default EachCard