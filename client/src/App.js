// /src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import SignupPopup from './Components/SignUpPopup';

function App() {
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);

  const openSignupPopup = () => {
    setIsSignupPopupVisible(true);
  };

  const closeSignupPopup = () => {
    setIsSignupPopupVisible(false);
  };
  return (
    <Router>
      <div>
        <Navbar openSignupPopup={openSignupPopup}/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
         
          <Route path="/login" component={Login} />
        </Routes>
        <SignupPopup onClose={closeSignupPopup} />
      </div>
     

    </Router>
  );
}

export default App;
