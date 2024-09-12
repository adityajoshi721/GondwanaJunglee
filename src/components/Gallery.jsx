import React from 'react'
import { useState } from 'react'
import i1 from '../gimages/p1.jpg'
import i2 from '../gimages/p2.jpg'
import i3 from '../gimages/p3.jpg'
import i4 from '../gimages/p4.jpg'
import i5 from '../gimages/p5.jpg'
import i6 from '../gimages/p6.jpg'
import i7 from '../gimages/p7.jpg'
import i8 from '../gimages/p8.jpg'
import i9 from '../gimages/p9.jpg'
import i10 from '../gimages/p10.jpg'
import i11 from '../gimages/p11.jpg'

import { AnimationOnScroll } from 'react-animation-on-scroll';



const Gallery = () => {

  const [height1, setHeight1] = useState("1000px")

  const function1 = () => {
    console.log('this is working')
    setHeight1('10px')
  }

  return (
    <div className='photo-grid'> 
    <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='cards card-tall' style={{background: `linear-gradient(to top, black, transparent), url(${i11}) center no-repeat ` }}> <i> "Seasoned Wildlife Experts Onboard." </i>  </div>
    </AnimationOnScroll> 
    <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='cards card-tall' style={{background: `linear-gradient(black, transparent), url(${i4}) center no-repeat` }}><i> "Enjoy Delicious Food and Experience Refreshing Nature." </i> </div>
    </AnimationOnScroll> 
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className='cards card-tall' style={{background: `linear-gradient(to top, black, transparent), url(${i5}) center no-repeat ` }}> <i> "Centrally located to 10+ Safari Gates"  </i></div>
    </AnimationOnScroll> 

    </div> 
  )
}

export default Gallery