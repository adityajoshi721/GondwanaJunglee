import React from 'react'
import aboutus from '../images/resortimg5.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img4 from '../images/resortimg4.jpeg'

const About = () => {
  return (
        <>
            <div className='about-us'>
                  <div className='hero-img'>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">

                  <img src={img4} alt="" className='round-img'/>
                  </AnimationOnScroll>
                  </div>
                  <div>
                  <AnimationOnScroll animateIn="animate__fadeInRightBig">
                  <h1> <b>About Us  <h5 style={{display:'inline-block', textDecoration:'underline'}}> <a href="/aboutus"> View More</a></h5> </b></h1> 
                  <p>The name "Gondwana" is derived from a tribe in India (Gonds) and 'wana' meaning "lands of". 
                  Hence, Gondwana means the Land of the Gonds. The Gonds are a large group of tribal people who live in the 
                  forested hills and fsfdasdfds. It gives us great pleasure to announce the opening of our brand new property 
                  Gondwana Jungle Homes at Tadoba near Nagpur
              </p>
                  </AnimationOnScroll>                  
                  </div>
                  <hr />

            </div>
        </>
  )
}

export default About