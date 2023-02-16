import React, { useState } from 'react'
import "./style.css"

import EmojiCart from './EmojiCart'

import emojiApi from "./EmojiAPI"

import ModalMain from '../Modal/ModalMain'

import EmojiCarusel from './EmojiCarusel'

import ForUser from '../ForUser/ForUser'


const EmojiDetails = () => {

    const [list, setList] = useState("")

    // console.log(list)

    return (
        <>
            <div className="mainEmoji" id='mainEmoji'>

                <ModalMain title={"EmojiPedia"} data={"This section stores some emojies and it's meaning.\nMain features are Run time search and Map component by API"} />

                {/* Experiment for crousal of bootstrap ----------> */}

                <div className="container">

                    <div className="row">

                        <div className="col-12 my-2">
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h1 className='emoji_heading'>Emojies And It's means</h1>

                                <EmojiCarusel />


                                <input
                                    className='col-12 col-lg-10 mt-5 mb-0 text-center fw-bold fs-5'
                                    id='emojiSearch'
                                    type="text"
                                    placeholder='Search Emoji by Name or Number Or Emoji'
                                    onChange={(e) => {
                                        setList(e.target.value)
                                    }}
                                    value={list}

                                />

                            </div>
                        </div>

                        <div className="col-12 ">

                            <div className='row'>

                                {/* Dummy data */}
                                {/* <div className="col-4  p-5 ">

                                    <div className='emoji_card text-danger text-center'>

                                            <h3>😊</h3>
                                            <h4>Name of Emoji</h4>
                                            <h5>Some word about emoji</h5>
                                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. A id sint aut sequi aliquam accusantium quo similique eaque quisquam sunt!</p>
                                    </div>
                                    
                                </div> */}


                                {/* Repeat data by api */}
                                {/* Working now ------------> */}
                                {/* {
                                    emojiApi.map( (item)=>{
                                        return( <EmojiCart key={item.id} data={item} /> )
                                    } )
                                } */}




                                {/* Search experimet here -------------------> */}

                                {

                                    emojiApi.filter((item) => {

                                        if (list === "") {
                                            return item
                                        }
                                        else if (item.nameOfEmoji.toLocaleLowerCase().includes(list.toLocaleLowerCase())) {
                                            return item
                                        }
                                        else if (item.emoji.includes(list)) {
                                            return item
                                        }
                                        else if (item.id.includes(list)) {
                                            return item
                                        }

                                    }).map((item) => {
                                        return <EmojiCart key={item.id} data={item} />
                                    })


                                }




                                <ForUser

                                    data={"The user , if you are here and you like this section of the project then please tell your favorite Emoji in the comment section of the post or tell in the feedback section.Give your valuable comment please."}

                                    className={" col-11  col-md-6 text-center p-3  my-4 rounded  rounded-pill text-center mx-auto"}

                                    style={{ backgroundColor: "#e8f5ffa8", border: "1px solid " }}

                                />



                            </div>

                        </div>



                    </div>



                </div>





            </div>

        </>
    )
}

export default EmojiDetails