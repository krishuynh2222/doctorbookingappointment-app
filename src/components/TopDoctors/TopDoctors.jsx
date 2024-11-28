import React, {useContext} from 'react'
import "./TopDoctors.css"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext/AppContext'


const TopDoctors = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='topDoctors'>
        <h1>Top Doctors to Book</h1>
        <p className='topDoctors-desc'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='topDoctor-lists'>
            {doctors.slice(0,10).map((item, idx)=>(
                <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='topDoctor-item' key={idx}> 
                    <img className="topDoctor-img bg-color-img" src={item.image} alt="" />
                    <div className='topDoctor-info'>
                        <div className='topDoctor-status'>
                            <p className='status'></p><p>Available</p>
                        </div>
                        <p className="topDoctor-name">{item.name}</p>
                        <p className="topDoctor-speciality">{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick ={() => {navigate('/doctors'); scrollTo(0,0)}}className='topDoctor-more bg-color-img'>more</button>
    </div>
  )
}

export default TopDoctors
