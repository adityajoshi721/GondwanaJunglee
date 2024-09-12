import React, { useState } from 'react'
import bootstrap from 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, NavLink, Nav, NavDropdown, Modal } from 'react-bootstrap';
import icon from '../images/logo.png'
import '../App.css';
const Navbarr = () => {

  const [dark, setDark] = useState("dark")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changenavbackground = () => {
    let scrollamt = window.scrollY
    if (scrollamt >= 695) setDark("dark")
    else setDark("dark")
  }

  const showcontact = () => {
    if (show == true) setShow(false);
    else setShow(true);
  }

  window.addEventListener('scroll', changenavbackground)

  return (

    <>
      <Navbar className='nav-styles' bg={''} sticky='top' collapseOnSelect expand="lg" variant={dark} style={{backgroundColor:'black'}}>
        <Container>
          <Navbar.Brand href="/" className='temp' style={{color:'#ff9100', fontSize: '1.5rem'}}><b>Gondwana </b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse style={{color:'white'}} id="responsive-navbar-nav" className='justify-content-end'>

            <Nav >
              <Nav.Link href="/abouttadoba" style={{color: 'white'}}>About Tadoba</Nav.Link>
              <Nav.Link href="/booknow" style={{color: 'white'}}> Book Now </Nav.Link>
              <Nav.Link href="/aboutus" style={{color: 'white'}}> About Us</Nav.Link>

              <Button variant='warning' style={{backgroundColor:'#ff9100'}}> <b><a href='tel:+919921150541' style={{textDecoration:'none', color:'black'}}>Enquire Now</a></b></Button>

              <Modal onHide={handleClose} show={show}>
                <Modal.Header closeButton>
                  <Modal.Title> Get in touch with us! </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Contact No: +91 8652203337 || +91 9921150541 <br />
                  Email: gondwanaresorts@gmail.com
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>

  )
}

export default Navbarr