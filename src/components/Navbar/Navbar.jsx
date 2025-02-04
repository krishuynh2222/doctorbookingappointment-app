import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("/")
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)


  return (
    <div className='navbar'>
      <img onClick={() => navigate('/')} src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <NavLink to="/">
          <li className={menu === "home" ? "active" : ""}>Home</li>
        </NavLink>

        <NavLink to="/doctors">
          <li className={menu === "doctors" ? "active" : ""}>All doctors</li>
        </NavLink>

        <NavLink to="/about">
          <li className={menu === "about" ? "active" : ""}>About</li>
        </NavLink>

        <NavLink to="/contact">
          <li className={menu === "contact" ? "active" : ""}>Contact</li>
        </NavLink>

      </ul>

      <div className='navbar-right'>
        {
          token
            ? <div className="navbar-profile">
                <img className = "navbar-profile-pic" src={assets.profile_pic} alt="" />

                <div className="buffer-area"></div>
                <img src={assets.dropdown_icon} alt="" />
                <div className="nav-profile-dropdown">
                  <li onClick={() => navigate("my-profile")}>My Profile</li>
                  <li onClick={() => navigate("my-appointments")}>My Appointments</li>
                  <li onClick={() => setToken(false)}>Log Out</li>


                </div>
            </div>
            : <button onClick={() => navigate("/login")}>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className="menuIcon" src={assets.menu_icon} alt="" />
      
      {/* ------------Mobile menu------------- */}
        {/* Mobile Menu */}
      {showMenu && (
        <div className='mobile-menu'>
          <div className="mobile-menu-header">
            <img className="mobile-logo" src={assets.logo} alt="Logo" />
            <img onClick={() => setShowMenu(false)} 
            className="close-icon" 
            src={assets.cross_icon} 
            alt="Close" />
          </div>
          <ul className="mobile-menu-items">
            <NavLink  to="/" onClick={() => setShowMenu(false)}><p className="mobile-menu-list">Home</p></NavLink>
            <NavLink  to="/doctors" onClick={() => setShowMenu(false)}><p className="mobile-menu-list">All Doctors</p></NavLink>
            <NavLink  to="/about" onClick={() => setShowMenu(false)}><p className="mobile-menu-list">About</p></NavLink>
            <NavLink  to="/contact" onClick={() => setShowMenu(false)}><p className="mobile-menu-list">Contact</p></NavLink>
          </ul>
        </div>
      )}
      </div>
    </div>

  )
}

export default Navbar
