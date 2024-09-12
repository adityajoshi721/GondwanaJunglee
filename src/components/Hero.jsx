import React from 'react'
import logo from '../images/banner-main.jpeg'
import '../App.css'
import About from './About'
import Carousels from './Carousels'
import Abouttadoba from './Abouttadoba'
import Gallery from './Gallery'
import Map from './Map'
import BookNow from './BookNow'
import Footer from './Footer'
import Navbarr from './Navbarr'
import Review from './Review'
import { Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import logo1 from '../images/logo.png'
import vdo from '../video/video.mp4'
const Hero = () => {
  const h1styles = {
    color: 'white', 
    verticalAlign: 'middle',
    marginTop: '15%'
  };
  const [hide, setHide] = useState('block')
  const temp = () => {
    let scrollamt = window.scrollY
    if(scrollamt === 0) setHide('none')
    else setHide('none')
  }
  let sa= window.scrollY
  window.addEventListener('scroll', temp)
  return (
        <>
          <Navbarr/>
          <div style={{display:'block'}}>
            <video src={vdo}
            autoPlay
            loop
            muted
            style={{
              position:"fixed",
              width:"100vw",
              left:"50%",
              top:"50%",
              height:"100%",
              objectFit:"cover",
              transform:"translate(-50%, -50%)",
              zIndex:"-1"
            }}
            ></video>
            <h1 style={{color:'white', marginTop:'40vh', marginBottom:'50vh'}}><b>Welcome To Gondwana Your Home in The Jungle</b></h1>
          <div className='tempo'>
            {/* <br /> */}
          <About/>
          {/* <br /> */}

          {/* <Carousels/> */}
          {/* <br /> */}
          {/* <br /> */}
          <BookNow/>
          {/* <br /> */}
          {/* <br /> */}
          <Abouttadoba/>
          {/* <br /> */}
          {/* <br /> */}
          <Review/>
          {/* <br /> */}
          <Map/>
          </div>
          </div>
         
          
          <Footer/>
        </>
  )
}

export default Hero