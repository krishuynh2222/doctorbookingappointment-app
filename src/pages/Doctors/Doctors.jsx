import React, { useContext, useEffect, useState } from 'react';
import './Doctors.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [activeSpeciality, setActiveSpeciality] = useState(speciality || ''); // Track active specialty
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (selectedSpeciality) => {
    setActiveSpeciality(selectedSpeciality);
    navigate(selectedSpeciality === speciality ? '/doctors' : `/doctors/${selectedSpeciality}`);
  };

  return (
    <div>
      <p className="doctor-desc">Browse through the doctors specialist.</p>
      <div className="doctor">
        <button className="filter_btn"
         onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`doctor-speciality ${showFilter ? 'show' : ""}`}>
          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist',
          ].map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`speciality-name ${activeSpeciality === spec ? 'active' : ''}`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className="doctors-list">
          {filterDoc.map((item, idx) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="doctor-item"
              key={idx}
            >
              <img className="doctor-img bg-color-img" src={item.image} alt="" />
              <div className="doctor-info">
                <div className="doctor-status">
                  <p className="status"></p>
                  <p>Available</p>
                </div>
                <p className="doctor-name">{item.name}</p>
                <p className="doctor-speciality">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
