import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Banner.css'
import { assets } from '../../assets/assets'

const Banner = () => {
    const navigate = useNavigate()
    
  return (
    <div className='banner bg-color-primary'>
        {/* ---------------Leftside--------------- */}
        <div className='banner-leftside'>
            <div className='banner-description'>
                <p>Book Appointment</p>
                <p className='banner-desc'>With 100+ Trusted Doctors</p>
            </div>

            <button onClick={() => {navigate('/login'); scrollTo(0,0)}}  className="banner-btn">Create account</button>
        </div>

        {/* ---------------Rightside--------------- */}
        <div className="banner-rightside">
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner
