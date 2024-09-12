import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar, Button, Container, NavLink, Nav, NavDropdown, Modal } from 'react-bootstrap';
const Form = () => {
        const [firstname, setFirstname] = useState('')
        const [lastname, setLastname] = useState('')
        const [email, setemail] = useState('')
        const [phone, setphone] = useState('')
        const [checkindate, setcheckindate] = useState('')
        const [checkintime, setcheckintime] = useState('')
        const [checkoutdate, setcheckoutdate] = useState('')
        const [checkouttime, setcheckouttime] = useState('')
        const [message, setmessage] = useState('')
        const handlesubmit = (e) => {
                e.preventDefault();
                let info = {firstname, lastname, email, phone, checkindate, checkintime, checkoutdate, checkouttime, message}; 
                // e.target.reset();
                // console.log(info)
                // sendEmail(e)
        }
        const sendEmail = (e) => {
                
               
                
                
                emailjs.sendForm('service_t94k87l','template_knq4acm', e.target, 'MERTi3SF8i8_6srU6')
                .then((result) => {
                        console.log(result.text);
                }, (error) => {
                        console.log(error.text);
                });
                e.target.reset();
        }
        return (
                <>
                        <div id='form' onSubmit={sendEmail}>
                                <h2>Booking Form</h2>
                                <p>Fields marked with an * are compulsary</p>

                                <form onSubmit={handlesubmit}>
                                        <label htmlFor="">First Name* </label>
                                        <input type="text" placeholder='Enter Your First Name...' name="firstname"
                                        required
                                        onChange={(e) => setFirstname(e.target.value)}
                                        />

                                        <label htmlFor="">Last Name* </label>
                                        <input type="text" placeholder='Enter Your Last Name... ' name='lastname' 
                                        required
                                        onChange={(e) => setLastname(e.target.value)}
                                        />

                                        <label htmlFor="">Email* </label>
                                        <input type="email" placeholder='Enter Your Email Address...' name='email'
                                        required
                                        onChange={(e) => setemail(e.target.value)}
                                        />

                                        <label htmlFor="" >Phone* </label>
                                        <input type="text" name="phone" id="" placeholder='Enter Your Contact Number...' 
                                        required
                                        onChange={(e) => setphone(e.target.value)}
                                        />

                                        <label htmlFor="">Check In* </label>
                                        <input type="date" name = 'checkindate'
                                        required
                                        onChange={(e)=> setcheckindate(e.target.value)} 
                                        />

                                        <label htmlFor=""> Check In Time* </label>
                                        <input type="time" name='checkintime'
                                        required
                                        onChange={(e) => setcheckintime(e.target.value)}
                                        />

                                        <label htmlFor="">Check Out* </label>
                                        <input type="date" name='checkoutdate'
                                        required
                                        onChange = {(e) => setcheckoutdate(e.target.value)} 
                                        />

                                        <label htmlFor=""> Check Out Time* </label>
                                        <input type="time" name='checkouttime'
                                        required
                                        onChange = {(e) => setcheckouttime(e.target.value)} 
                                        />

                                        <label htmlFor=""> Message </label>
                                        <textarea name="message" id=""  
                                        required
                                        onChange = {(e) => setmessage(e.target.value)}
                                        ></textarea>
                                        <br />

                                        <button type='submit'>Submit</button>

                                </form>

                        </div>
                </>
        )
}

export default Form