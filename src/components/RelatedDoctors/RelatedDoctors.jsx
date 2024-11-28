import React, { useEffect, useState } from 'react'
import './RelatedDoctors.css'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();

    const [relDoc, setRelDoc] = useState([]);


    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    },[doctors, speciality, docId])

  return (
    <div className='relatedDoctors'>
        <h1>Related Doctors</h1>
        <p className='relDoc-desc'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='relDoc-lists'>
            {relDoc.slice(0,5).map((item, idx)=>(
                <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='relDoc-item' key={idx}> 
                    <img className="relDoc-img bg-color-img" src={item.image} alt="" />
                    <div className='topDoctor-info'>
                        <div className='topDoctor-status'>
                            <p className='status'></p><p>Avaiable</p>
                        </div>
                        <p className="topDoctor-name">{item.name}</p>
                        <p className="topDoctor-speciality">{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick ={() => {navigate('/doctors'); scrollTo(0,0)} }className='topDoctor-more bg-color-img'>more</button>
    </div>
  )
}

export default RelatedDoctors
