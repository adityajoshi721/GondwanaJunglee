import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import aboutus from '../images/safari.jpg'
import Navbarr from './Navbarr'
const Abouttadoba = () => {
      return (
            <>
                  <div className='about-us'>
                        <div className='hero-img'>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                              <img src={aboutus} alt=""  className='round-img'/>
            </AnimationOnScroll>
                        </div>
                        <div>
            <AnimationOnScroll animateIn="animate__fadeInRight">

                                    <h1><b>About Tadoba... <h5 style={{display:'inline-block', textDecoration:'underline'}}> <a href="/abouttadoba"> View More</a></h5></b></h1>
                              <p>
                                    The "Tadoba National Park," also known as the "Tadoba Andhari Tiger Reserve," is one of India's
                                    47 planned tiger reserves. It is located in the Maharashtra state of Chandrapur, around 150 kilometres
                                    from Nagpur. The tiger reserve has a total size of 1,727 square kilometres, which includes the
                                    Tadoba National Park, which was established in 1955. 
                              </p>
            </AnimationOnScroll>

                        </div>
                  </div>
            </>
      )
}

export default Abouttadoba