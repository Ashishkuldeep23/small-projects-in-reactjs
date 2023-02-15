import React from 'react'

import "./style.css"

function EmojiCarusel() {



    function randomEmoji() {
        let emojis = [
            '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼',
        ];


        return emojis[Math.floor(Math.random() * emojis.length)];

    }






    return (
        <>

            <section>

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1700"  data-bs-touch="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="bg-dark" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className="bg-dark" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div  className="random_emoji"  >{randomEmoji()}</div>
                        </div>
                        <div className="carousel-item">
                            <div  className="random_emoji"   >{randomEmoji()}</div>
                        </div>
                        <div className="carousel-item">
                            <div  className="random_emoji"   >{randomEmoji()}</div>
                        </div>
                        <div className="carousel-item">
                            <div  className="random_emoji"   >{randomEmoji()}</div>
                        </div>
                        <div className="carousel-item">
                            <div  className="random_emoji"   >{randomEmoji()}</div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        {/* <span className="carousel-control-prev-icon text-dark " aria-hidden="true"></span> */}
                        <i className="fa-solid fa-chevron-left text-info fs-1"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <i className="fa-solid fa-chevron-right text-info fs-1"></i>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>




        </>
    )
}

export default EmojiCarusel