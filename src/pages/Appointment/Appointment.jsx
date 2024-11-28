import React, { useEffect, useState } from 'react';
import './Appointment.css';
import { AppContext } from '../../context/AppContext/AppContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { assets } from '../../assets/assets';
import RelatedDoctors from '../../components/RelatedDoctors/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [activeDay, setActiveDay] = useState(0);
  const [activeTime, setActiveTime] = useState(null);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    const slots = []; // Collect all slots here
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set end time to 8:30 PM for the current day
      const endTime = new Date(currentDate);
      endTime.setHours(20, 30, 0, 0);

      // Set start time
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(10, currentDate.getHours())); // Start from 10:00 AM if before 10:00 AM
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0); // Round to nearest half-hour
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];

      // Generate time slots every 30 minutes until 8:30 PM
      while (currentDate <= endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
      }

      slots.push(timeSlots);
    }

    setDocSlots(slots); // Update state after generating all slots
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  const handleDateSlotClick = (selectedDay) => {
    setActiveDay(selectedDay);
    setActiveTime(null); // Reset selected time when switching days
  };

  const handleTimeSlotClick = (selectedTime) => {
    setActiveTime(selectedTime);
  };

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="doctorInfo">
          <div>
            <img className="doctorImg bg-color-primary" src={docInfo.image} alt="" />
          </div>
          <div className="doctorDetails">
            <p className="doctorName">
              {docInfo.name}
              <img className="verifiedIcon" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="doctorMeta">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="doctorExperience">{docInfo.experience}</button>
            </div>
            <div>
              <p className="doctorTitle">
                About
                <img className="infoIcon" src={assets.info_icon} alt="Info" />
              </p>
              <p className="aboutDesc">{docInfo.about}</p>
            </div>
            <p className="doctorFee">
              Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="bookingSlots">
          <p>Booking slots</p>
          {/* Days */}
          <div className="bookingSlots__days">
            {docSlots.length > 0 &&
              docSlots.map((item, idx) => (
                <div
                  className={`bookingSlots__day ${activeDay === idx ? 'bookingSlots__day--active bg-color-primary' : ''}`}
                  key={idx}
                  onClick={() => handleDateSlotClick(idx)}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Times */}
          <div className="bookingSlots__times">
            {docSlots.length > 0 &&
              docSlots[activeDay]?.map((item, idx) => (
                <p
                  className={`bookingSlots__time ${activeTime === idx ? 'bookingSlots__time--active bg-color-primary' : ''}`}
                  key={idx}
                  onClick={() => handleTimeSlotClick(idx)}
                >
                  {item.time}
                </p>
              ))}
          </div>

          <button className="bookingBtn bg-color-primary">Book an appointment</button>
        </div>

        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
