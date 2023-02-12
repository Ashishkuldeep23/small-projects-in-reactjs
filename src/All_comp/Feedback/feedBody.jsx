import React from "react";

import PostFeed from "./PostFeed"

import AboutMe from "./AboutMe"

import ShowAllFeeds from "./showAllFeeds"

import ModalMain from '../Modal/ModalMain'


// import done from "./done.mp3"


const FeedBody = () => {









    // // // // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< UI Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    return (
        <>







            <div className=" d-flex flex-column align-items-center  feed_body " >

                <ModalMain title={"Feedback Section"} data={"This is the last section of this project , here user can give his feedback like what he or she likes in this web or what not like , or any other feedback of user.\nAll feedback will stored in Data Base so it can take some time to fetching feedbacks or posting feedback."} />


                <div className=" d-md-flex justify-content-around align-items-center w-75 ">



                    {/* Main of post feed from */}
                    <PostFeed />


                    {/* Main for about me */}
                    <AboutMe />


                </div>


                {/* show all feedback div ----> */}
                <ShowAllFeeds />

            </div>











        </>
    )

}



export default FeedBody