import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Components/Login';
import AllRoutes from './Routes/AllRoutes';
import CursorFollow from './Components/CursorFollow';
function App() {
 
  return (
    <div>
      <AllRoutes/>
      <CursorFollow/>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
