import React from 'react'
import mpap from '../images/tadoba-map.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Map = () => {
  return (
      <>
      <div className='about-us'>
            <div className='hero-img'>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                  <img src={mpap} alt=""  className='round-img'/>
      </AnimationOnScroll>
            </div>
            <div>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                  <h1>
                  <b>Explore...</b> 
                  </h1>
            <p>
            There are six gates in the Tadoba Tiger Reserve that gives access to the wild. The names of the gates closest to Gondwana are listed below:

<br/><b>Madnapur</b>: Madnapur Gate is the oldest entrance to the park, which is located approximately 1.5kms away from Gondwana.

<br/> <b>Kolara</b>: The distance between Gondwana and Kuswanda Gate is 8 km and the number of vehicles allowed for tiger safari from this gate are four each morning and evening.


<br/><b>Belara</b>: The distance from Gondwana to the gate is 6 km. The park authority permits the entry of six vehicles each morning and evening for tiger safari from this gate.

</p>
</AnimationOnScroll>

            </div>
      </div>
      </>
  )
}

export default Map