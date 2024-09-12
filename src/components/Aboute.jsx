import React from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'
import i2 from '../images/dine-area.jpeg'
import { Carousel } from 'react-bootstrap'
import img1 from '../resort/1.jpeg'
import img2 from '../resort/2.jpeg'
import img3 from '../resort/3.jpeg'
import img4 from '../resort/4.jpeg'
import img5 from '../resort/5.jpeg'
import img6 from '../resort/6.jpeg'
import img7 from '../resort/7.jpeg'
import vdo from '../video/video3.mp4'
const Aboute = () => {
  return (
    <>
      <Navbarr />
      {/* <div className='about-page-background'>
        <h1 style={{ padding: '10%' }}>
          <p style={{ color: 'white' }}> <b> Welcome to the Vedic Land of Gondwana and Dandakaranya</b> </p>
        </h1>
      </div> */}
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
            <h1 style={{color:'white', marginTop:'25vh', marginBottom:'25vh'}}><b> ABOUT US </b></h1>
          </div>
      <div className='tempo'>
        <div className='about-page-content'>

          <div className='about-page-content1'>
            <div>
              <h1>
                <b>About Us</b>
              </h1>
              <p>
                We're a family-owned and run resort that offers you a life-changing vacation that allows you to forget about your daily worries. Our natural surroundings and fauna will certainly enrich your life!
                The name "Gondwana" is derived from a tribe in India (Gonds) and 'wana' meaning "lands of". Hence, Gondwana means the Land of the Gonds.
                The Gonds are a large group of tribal people who live in the forested hills and fsfdasdfds.
                It gives us great pleasure to announce the opening of our brand
                new property Gondwana Jungle Homes at Tadoba near Nagpur.
                The tiger capital city, our property is nearest to the Kolara and Madnapur gate TATR.
                A Brand New Property in Screne Location.
              </p>
            </div>
          </div>
          <div id='addgrid'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          </div>
          <br />
          <h1> <b><p>Special Features</p> </b></h1>
          <div id='addflex'>
            <div>
              <l>
                {/* <b> */}
                  <p>
                    <li> Ideal for small and mid sized groups. </li>
                    <li> Spacious Rooms freshly done up with all modern aminities. </li>
                    <li> Tailor made itenary for guests for enhanced customer experience. </li>
                    <li> Centrally located to access 10+ safari gates of core and buffer jungle. </li>
                    <li> Explore two new hotspots Palasgaon Night Safari and the Gondmaoli lake. </li>
                    <li> Experience Natural, Fresh Jungle Air and Great Natural Buffer Forest. </li>
                  </p>
                {/* </b> */}
              </l>
            </div>
            <div>
              <l>
                {/* <b> */}
                  <p>
                    <li> Discover a World of Rich Flora and Fauna. </li>
                    <li> Experience the Vedic land of Gondwana and Dandakaranya. </li>
                    <li> Seasoned Wildlife and Naturalist Onboard. </li>
                    <li> 30000+ sq ft of Sprawling Lawn </li>
                    <li> Centrally Located access to 10 Safari Core and Buffer Gates. </li>
                    <li> Amazing Environment for Bird Sighting. </li>
                    <li> Boat Rides at the Belara Lake. </li>
                  </p>
                {/* </b> */}
              </l>

            </div>
          </div>
          <br />
          <div id='addgrid'>
          <img src={img6} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Aboute