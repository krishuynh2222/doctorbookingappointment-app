import React from 'react'
import "./Contact.css"
import { assets } from '../../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='contact-title'>
        <p>Contact <span>us</span></p>
      </div>

      <div className='contact-content'>
        <img className='contact-img' src={assets.contact_image} alt="" />

        <div className='contact-text'>
          <p className='contact-info'>OUR OFFICE</p>
          <p>00000 Willms Station <br />
            Suite 000, Washington, USA</p>
          <p>Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com</p>
          <p className='contact-info'>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='contact-btn'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
