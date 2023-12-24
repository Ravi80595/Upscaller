import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import SignupPopup from './Components/SignUpPopup';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);

  const openSignupPopup = () => {
    setIsSignupPopupVisible(true);
  };

  const closeSignupPopup = () => {
    setIsSignupPopupVisible(false);
  };
  return (
    <div>
      <AllRoutes/>
    </div>
  );
}

export default App;
