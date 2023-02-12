import React from 'react'

import "./style.css"


const ShowMoreAboutBtn = ({ setShowMoreAboutBtn, color, showMoreAboutData }) => {



  const backToNormal = () => {
    setShowMoreAboutBtn(false)
  }

  let dataOfClickedCard = JSON.parse(showMoreAboutData)
  // // // console.log(dataOfClickedCard)
  const { id, image = "https://images.livehindustan.com/uploadimage/photostory/momos1484727906_big~18~01~2017~1489334693_500X375.jpg", name = "Name Of Item", category = "Category", price = "Price XXXX", description = "Description" } = dataOfClickedCard


  return (
    <>
      <div className={!color ? 'container  card_main' : 'container  card_main_dark_mode'} >

        {/* Below btn is used for back -------> */}
        <button className='card_back_btn' onClick={backToNormal}>Back</button>



        <div className=' my-4 text-center card_data_div' >


          <img src={image} alt={name + " Image"} />

          <section className='text-start'>

            <h2>Name : {name}</h2>
            <h4>Price : {price}</h4>
            <h4>Category : {category}</h4>

            <button className='btn btn-outline-success card_btn_Ak' onClick={() => { alert([name, price]) }}>Order Now</button>


          </section>


          <div>
            <span>Description</span>
            <p>{description}</p>
          </div>

          <div >
            <span>Long Description</span>
            <p>Nothing present for now in Long Description </p>
          </div>

        </div>



        <div className='d-flex justify-content-center  text-center  card_footer_div'>

          <div className='bg-primary rounded-start p-1  '>
            <img src="https://i.pinimg.com/564x/72/6e/92/726e92a0ef5a07e46e0403ae36c0b228.jpg" id="about_img" alt="Ashish's Pic" />
          </div>

          <div className='bg-primary  rounded-end py-4 px-2 text-white'>
            <h5>Ashish Kuldeep</h5>
            <h6>MERN Stack (Learning)</h6>

            <div>
              <a href="https://www.linkedin.com/in/ashish-kuldeep-09b96018b" rel="noreferrer" target={"_blank"} ><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" className="logos" alt="Linkedin" />
              </a>

              <a href="https://github.com/Ashishkuldeep23" rel="noreferrer" target={"_blank"} ><img src="https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-512.png" className="logos" alt="Github" /></a>

              <a href="https://mobile.twitter.com/ashishkuldeep23" rel="noreferrer" target={"_blank"}><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" className="logos" alt="Tiwtter" /></a>

              <a href="https://www.youtube.com/@ashishkuldeep2305" rel="noreferrer" target={"_blank"} ><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-512.png" className="logos" alt="Youtube" /></a>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default ShowMoreAboutBtn