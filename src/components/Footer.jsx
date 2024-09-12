import React from 'react'

const Footer = () => {
  return (
        <>
            <div className='footer' style={{backgroundColor:'black', color:'#ff9100'}}>
                  <div>
                        <h3>
                              <b>Gondwana Resorts</b>
                        </h3>
                        <br />
                        A family-owned and run resort that offers you a life-changing <br />
                        vacation that allows you to forget about your daily worries.
                        <br />
                  </div>
                  <div className='footer-contact'>
                        <ul>
                              <li><b>Get in Touch</b></li>
                              <li>✉️  gondwanaresorts@gmail.com</li>
                              <li>☎️ +91 9921150541</li>
                        </ul>
                  </div>
            </div>
            <div className='footer-bottom' style={{backgroundColor:'black', color:'#ff9100'}}>
            © 2022 Gondwana Forest Resorts . All Rights Reserved <br />
            Designed & Developed By: Maverick Technologies  
            </div>
        </>
  )
}

export default Footer