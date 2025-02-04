import React, { useContext } from 'react'
import "./MyAppointments.css"
import { AppContext } from '../../context/AppContext/AppContext'
const MyAppointments = () => {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className="appointments-title">My appoinments</p>
      <div>
        {doctors.slice(0,2).map((item, idx) => (
          <div className="appointment-card" key={idx}>
            <div>
              <img className="appointment-image" src={item.image} alt="" />
            </div>
            <div className="appointment-details">
              <p className="doctor-name">{item.name}</p>
              <p className="doctor-speciality">{item.speciality}</p>
              <p className="appointment-address-title">Address:</p>
              <p className="appointment-address-line">{item.address.line1}</p>
              <p className="appointment-address-line">{item.address.line2}</p>
              <p className="appointment-datetime"><span className='datetime'>Date & Time: </span> 25, July, 2024 | 8:30 PM</p>
            </div>
            <div></div>

            <div className="appointment-actions">
              <button className="appointment-pay-button">Pay Online</button>
              <button className="appointment--cancel-button">Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
