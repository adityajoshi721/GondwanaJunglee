import React, { Component, useState } from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from 'react-elastic-carousel';
const Review = () => {
        const [cards, setcards] = useState(1)
        const changenavbackground = () => {
                let scrollamt = window.innerWidth;
                if (scrollamt < 695) setcards(1)
                else if(scrollamt >= 695 && scrollamt <= 1000) setcards(2)
                else setcards(3)
        }
        console.log(window.innerWidth)
        window.addEventListener('scroll', changenavbackground)
        return (
                <>
                <div className='reviews'>
                        <br />
                <h1 style={{backgroundColor:'white'}}><b> What Are People Saying? </b></h1>
                        <Carousel style={{backgroundColor:"white", color:'black', padding:'0rem', borderRadius:'1rem'}} itemsToShow={cards}>
                                <div style={{height: "35%", padding:'1rem', background:'rgb(236,236,236)', borderRadius:'1rem', margin:'0.5rem'}}>⭐⭐⭐⭐⭐<br/>Excellent Service. Great property, super clean and hygienic rooms, all 3 meals were amazing<br/> <i>-Dr. Chaturvedi</i></div>
                                <div style={{height: "35%", padding:'1rem', background:'rgb(236,236,236)', borderRadius:'1rem', margin:'0.5rem'}}>⭐⭐⭐⭐<br/>The staff and the service was excellent, very cooperative and sincere staff. The rooms are well maintained and also the whole ambience is very calm and peaceful. Breakfast was decent and the food was also good.<br/> <i>-Anuja Singh</i>  </div>
                                <div style={{height: "35%", padding:'1rem', background:'rgb(236,236,236)', borderRadius:'1rem', margin:'0.5rem'}}>⭐⭐⭐⭐⭐<br/>Superb laid back property just next to Turia Gate. The was very spacious and tucked in between the greenery with the garden.<br/> <i>-Anjali Upadhye</i></div>
                        </Carousel>
                </div>
                </>
        )
}

export default Review