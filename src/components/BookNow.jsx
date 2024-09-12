import React, { useState } from 'react'
import { Navbar, Button, Container, NavLink, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'
import img1 from '../resort/1.jpeg'
import img2 from '../resort/2.jpeg'
import img3 from '../resort/3.jpeg'
import img4 from '../resort/4.jpeg'
import img5 from '../resort/5.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll';


const BookNow = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showcontact = () => {
    if (show == true) setShow(false);
    else setShow(true);
  }
  return (
    <>
        <div className='about-us'>
          <div id='hide-carousel'>
    <br />
      <AnimationOnScroll animateIn="animate__fadeInLeft">
            {/* <img src={aboutus} alt="" /> */}
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100 round-img"
                  src={img1}
                  alt="First slide"

                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 round-img"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 round-img"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 round-img"
                  src={img4}
                  alt="Third slide"
                />
              </Carousel.Item>

            </Carousel>
      </AnimationOnScroll>
          </div>
          <div>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <h1>
              <b> Book Now! </b>
              </h1>
            <p>
            It gives us great pleasure to announce the opening of our brand new property Gondwana Jungle Homes at Tadoba near Nagpur. The tiger capital city, our property is nearest to the Kolara and Madnapur gate TATR. A Brand New Property in Screne Location.
            Book your next vacation with us. Click to view more!
            </p>

            <Button variant='warning' href='/booknow'> <b>  Book Now  </b></Button>
      </AnimationOnScroll>

          </div>
        </div>
    </>
  )
}

export default BookNow