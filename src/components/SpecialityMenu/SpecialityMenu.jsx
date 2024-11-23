import React from 'react'
import "./SpecialityMenu.css"
import { specialityData } from '../../assets/assets'

import {Link} from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className="speciality" id="speciality">
      <h1>Find by Speciality</h1>
      <p className='speciality-desc'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className="speciality-menu">
        {specialityData.map((item, idx) => (
          <Link onClick={() =>scrollTo(0,0)} className="speciality-item" key={idx} to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
