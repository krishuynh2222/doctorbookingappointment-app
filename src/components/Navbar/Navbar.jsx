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
      <img src={assets.logo} alt="" className='logo' />
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

                <img src={assets.dropdown_icon} alt="" />
                <div className="nav-profile-dropdown">
                  <li onClick={() => navigate("my-profile")}>My Profile</li>
                  <li onClick={() => navigate("my-appointments")}>My Appointments</li>
                  <li onClick={() => setToken(false)}>Log Out</li>


                </div>
            </div>
            : <button onClick={() => navigate("/login")}>Create account</button>
        }
      </div>
    </div>
  )
}

export default Navbar
