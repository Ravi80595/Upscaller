import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'



const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Home/>}></Route>
        <Route path="/login" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute
