import React from 'react'
import { Carousel } from 'react-bootstrap'
import img2 from '../images/resortimg2.jpeg'
import img1 from '../resort/1.jpeg'
// import img2 from '../resort/2.jpeg'
import img3 from '../resort/3.jpeg'
import img4 from '../resort/4.jpeg'
import img5 from '../resort/5.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Carousels = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='heightchange'>
        <Carousel>
         
          <Carousel.Item>
            <img
              className="w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Second slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        
        </Carousel>
        </div>
      </AnimationOnScroll>
  )
}

export default Carousels