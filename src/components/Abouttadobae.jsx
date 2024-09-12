import React from 'react'
import aboutus from '../images/abouttadobabanner.jpg'
import safari from '../images/safari.jpg'
import safarit from '../images/safaritiming.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from './Footer'
import Navbarr from './Navbarr'
import Gallery from './Gallery'
import BookNow from './BookNow'
// import img1 from '../images/roomimg.jpeg'
import { Carousel } from 'react-bootstrap'
import { Navbar, Button, Container, NavLink, Nav, NavDropdown, Modal } from 'react-bootstrap';
import img3 from '../resort/3.jpeg'
import img4 from '../resort/4.jpeg'
import img5 from '../resort/5.jpeg'
import img1 from '../resort/1.jpeg'
import vdo from '../video/video2.mp4'


const About = () => {
	return (
		<>
			<Navbarr />
			<div style={{ display: 'block' }}>
						<video src={vdo}
							autoPlay
							loop
							muted
							style={{
								position: "fixed",
								width: "100vw",
								left: "50%",
								top: "50%",
								height: "100%",
								objectFit: "cover",
								transform: "translate(-50%, -50%)",
								zIndex: "-1"
							}}
						// <source />
						></video>
						<h1 style={{ color: 'white', marginTop: '25vh', marginBottom: '25vh' }}><b> MORE ABOUT TADOBA ANDHARI TIGER RESERVE </b></h1>
					</div>
				<div className='about-tadoba-page-1'>
					
					<div className='tempo'>
						<br />
						
						<div className='about-tadoba-page-1-content'>
						
							<div>
							<h2 style={{display:'inline'}}>
							<b>Explore the Unexplored</b>
						</h2>
						<br />
						<br />
						<img className='about-tadoba-page-img1 round-img-2' src="data:image/jpeg;base64,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" alt="" />
						<br />
						<br />

								<p>Tadoba National Park is Maharashtra's oldest and largest national park, covering an area of 625.4 square kilometres. Tadoba National Park (116.55 square kilometres) and Andhari Wildlife Sanctuary (508.85 square kilometres) create the Tadoba Andhari Tiger Reserve, which encompasses the Chimur Hills, Moharli and Kolsa Ranges. The park is embellished with teak and bamboo thickets, a wonderful scenery of steep cliffs, marshlands, and lakes that provide a happy home for a diverse variety of creatures such as tigers, panthers, hyenas, sloth bears, wild dogs, jackals, barking deer, bison, sambar, and so on. Tadoba is one of India's top wildlife places for a thrilling tiger sighting.</p>

								<h4><b>Background</b></h4>
								<p>The Tadoba Region's national park was established in 1955, covering an area of 116.54 square kilometres. Andhari Wildlife Sanctuary was established next to the national park in 1986, and the two were combined in 1995 to form India's 41st Tiger Reserve under Project Tiger.</p>


								<h4> <b>Tadoba National Park's Flora</b> </h4>
								<p>
									Teak, bamboo, ain (crocodile bark), bija, dhauda, hald, salai, semal, and tendu cover around 87 percent of Tadoba National Park's southern tropical dry deciduous forest. There are also stretches of verdant meadows and several medicinal climbers and plants in the park. The following are some of the most prevalent trees and species in Tadoba Tiger Reserve:
									<br />
									<div id='addflex1'>
										<l>
											<p>
												<li>Ain (crocodile bark)</li>
												<li>Shivan</li>
												<li>Bija</li>
												<li>Hald</li>
												<li>Semal</li>
												<li>Tendu</li>
											</p>
										</l>
										<l>
											<p>
												<li>Hirda</li>
												<li>Karaya</li>
												<li>Mahua</li>
												<li>Madhuca</li>
												<li>Lannea</li>
												<li>Bamboo</li>
											</p>
										</l>
									</div>
								</p>
								<br />
								<h4> <b>Tadoba Tiger Reserve's Fauna</b></h4>
								<br />
								<img className='about-tadoba-page-img1 round-img-2' src="https://greenglobaltravel.com/wp-content/uploads/2018/06/Indian-Bengal-Tiger.jpg" alt="" />
								<br />
								<br />
								<p>Tadoba National Park is a popular tiger reserve known as 'The Land of Tigers' due to the large number of tigers found there. Other mammals found here include: Indian Leopards, Sloth Bears, Gaur, Nilgai, Dhole, Striped Hyena, Small Indian Civet, Jungle Cats, Sambar, Spotted Deer, Barking Deer, Chital, Chausingha, and Honey Badger. Tadoba Lake is home to the marsh crocodile, which was previously prevalent throughout Maharashtra. The endangered Indian Python and the common Indian Monitor are among the reptiles found here. Tadoba is also home to terrapins, Indian star tortoises, Indian Cobras, and Russell's vipers. The lake is an ornithologist's dream, with a diverse range of water birds and raptors.</p>
								<br />
							</div>
							<div>
								<h4>
									<b>Book Now</b>
								</h4>
								<br />
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
											src={img4}
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
											src={img5}
											alt="Third slide"
										/>
									</Carousel.Item>

								</Carousel>
								<br />
								<p>The name "Gondwana" is derived from a tribe in India (Gonds) and 'wana' meaning "lands of". Hence, Gondwana means the Land of the Gonds. The Gonds are a large group of tribal people who live in the forested hills and fsfdasdfds. It gives us great pleasure to announce the opening of our brand new property Gondwana Jungle Homes at Tadoba near Nagpur. The tiger capital city, our property is nearest to the Kolara and Madnapur gate TATR. A Brand New Property in Screne Location.</p>
								<Button variant='warning' href='/booknow'> <b>  Book Now  </b></Button>
								<br />
								<br />
								<h4><b> Best Time to Visit</b> </h4>
								<img className='about-tadoba-page-img1 round-img-2' src="https://im.whatshot.in/img/2020/Sep/istock-1168143536-1600338289.jpg" alt="" />
								<br />
								<br />
								<p>The winter season (December to February) is a good time to visit Tadoba tiger reserve since various animals, including tigers, may be seen lazing in the sun. Another ideal time to visit Tadoba is immediately following the monsoon season (October), when the jungle turns lush green. Those looking for tiger sightings might also go during the warmer months, between April and June. Throughout this period, tigers regularly emerge during the day in quest of
									water. </p>
							</div>
						</div>
					</div>
				</div>

			<Footer />
		</>

	)
}

export default About