import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header bg-color-primary'>
            {/* -------------Left Side-------------- */}
            <div className='header-leftside'>
                <p className='header-desc'>
                    Book Appoiment <br /> With Trusted Doctors
                </p>
                <div className='header-group_profiles'>
                    <img className="header-group_profiles_img"src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
                </div>
                <a href="#speciality" className='header-btn'>
                    Book appoiment <img className='header-arrow_icon' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* -------------Right Side-------------- */}
            <div className='header-rightside'>
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
