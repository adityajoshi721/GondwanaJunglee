import React from 'react'
import Navbarr from './Navbarr'
import link from '../images/abouttadoba.jpg'
import Form from './Form'
import Footer from './Footer'
import vdo from '../video/video1.mp4'
const BookNowe = () => {
  return (
    <>
      <Navbarr />
      {/* <img src={link} alt="" style={{ width: '100%', padding: '1rem' }} /> */}
      <div style={{display:'block'}}>
            <video src={vdo}
            autoPlay
            loop
            muted
            style={{
              position:"fixed",
              width:"100%",
              left:"50%",
              top:"50%",
              height:"100%",
              objectFit:"cover",
              transform:"translate(-50%, -50%)",
              zIndex:"-1"
            }}
            // <source />
            ></video>
            <h1 style={{color:'white', marginTop:'25vh', marginBottom:'30vh'}}><b> BOOK NOW </b></h1>
          </div>
          
      <div className='tempo'>
      <div id='booking-form'>
      <h1><b>Plan Your Vacation With Us</b></h1>
          <p>
            Enjoy a self-contained, cosy, adventurous, and entertaining staycation.
            We leave nothing behind for a joyful and memorable experience, and ultimately give you the retreat of a lifetime!
            From the magnificent wilderness experience with us comfy and prepared accommodations,
            from our facilities and amenities to our eating experience, we leave nothing behind for a blissful and enriching
            experience and essentially give you the retreat of a lifetime! Fill out the form below to let us know whenever you're
            planning a vacation. We'll get back as soon as possible to assist you in making the best possible plans!
          </p>
          
          <Form/>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default BookNowe