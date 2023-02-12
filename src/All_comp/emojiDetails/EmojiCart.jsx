import React from 'react'

const EmojiCart = ( props ) => {

    const { emoji = "😊" , nameOfEmoji="Name of Emoji" ,  aboutEmoji="Lorem Lorem Lorem Lorem" , id="0." } = props.data

    return (
        <>

            <div className="col-12 col-sm-6 col-lg-4 p-4 p-lg-5">

                <div className='emoji_card  text-center p-3'>
                    <p className=' indexNo '>{id}.</p>
                    <h3>{emoji}</h3>
                    <h4 >{nameOfEmoji}</h4>
                    <p >{aboutEmoji}</p>
                </div>

            </div>

        </>
    )
}

export default EmojiCart