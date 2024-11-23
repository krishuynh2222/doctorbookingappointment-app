import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer">
      {/* Main container for the footer */}
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section footer-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-section footer-center">
          <p className="footer-title">COMPANY</p>
          <ul className="footer-links">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-right">
          <p className="footer-title">GET IN TOUCH</p>
          <ul className="footer-contact">
            <li>+0-000-000-000</li>
            <li>prescriptop@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <hr className="footer-divider" />
        <p>Copyright 2024 @ Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
