import React, { useState } from 'react'
import './MyProfile.css'
import { assets } from '../../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Ngan Huynh",
    image: assets.profile_pic,
    email: 'krishuynh2222@gmail.com',
    phone: '+1 520-491-0075',
    address: {
      line1: "49 Fisk, 555",
      line2: "Jersey city, NJ"
    },
    gender: "Female",
    dob: "2004-06-30"
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='profile-container'>
      <img className='profile-img' src={userData.image} alt="" />
      {
        isEdit
          ? <input className='profile-name-input' type="text"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='profile-name'>{userData.name}</p>
      }

      <hr className='profile-divider' />

      <div>
        <p className='profile-contact-title'>CONTACT INFORMATION</p>
        <div className='profile-contact'>
          <p>Email id: </p>
          <p className='text-color-primary'>{userData.email}</p>
          <p className='profile-phone'>Phone: </p>
          {
            isEdit
              ? <input className='profile-phone-input' type="text"
                value={userData.phone}
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-color-primary'>{userData.phone}</p>
          }

          <p className='profile-address'>Address: </p>
          {
            isEdit
            ? <p>
              <input className='profile-address-input'  type="text"
               onChange={(e) => setUserData(prev => ({...prev.address, line1: e.target.value}))} 
               value={userData.address.line1}/>
  
              <br />
              <input type="text" 
               onChange={(e) => setUserData(prev => ({...prev.address, line2: e.target.value}))} 
               value={userData.address.line2}/>
            </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }

        </div>
      </div>

      <div>
        <p className='profile-information-title'>BASIC INFORMATION</p>
        <div className='profile-information'>
          <p>Gender: </p>
          {
            isEdit
             ? <select className='profile-select'
              onChange={(e) => setUserData(prev => ({...prev,  gender: e.target.value}))}
             value={setUserData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
             </select>
             : <p>{userData.gender}</p>
          }
          <p>Brithday: </p>
          {
            isEdit
            ? <input className='profile-date-input'
             type="date" 
            onChange={(e) => setUserData(prev => ({...prev,  dob: e.target.value}))}
            value={setUserData.dob}/>

            : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit
          ? <button className='profile-buttons' onClick={() => setIsEdit(false)}>Save information</button>
          : <button className='profile-buttons' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
