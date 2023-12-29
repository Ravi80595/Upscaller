import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Services from '../Pages/Services/Services'
import Login from '../Pages/SignupLogin/Login'
import AdminDashboard from '../Pages/AdminPanel/AdminDashboard'



const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin" element={<AdminDashboard/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute
