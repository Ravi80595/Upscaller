import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Pages/Home/Home';
// import Signup from './Components/SignUp';
// import Login from './Components/Login';
// import SignupPopup from './Components/SignUpPopup';
import AllRoutes from './Routes/AllRoutes';
// import AnimatedCursor from './Components/AnimatedCursor';
// import Footer from './Components/Footer/Footer';

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
       {/* <Footer/> */}
    </div>
  );
}

export default App;
