import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Doctors from './pages/Doctors/Doctors'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import MyProfile from './pages/MyProfile/MyProfile'
import MyAppointments from './pages/MyAppointments/MyAppointments'
import Appointment from './pages/Appointment/Appointment'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
