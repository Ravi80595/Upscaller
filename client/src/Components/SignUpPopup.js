// /src/components/SignupPopup.js
import React, { useState } from 'react';
import './SignupPopup.css';

const SignupPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="signup-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
            <h2>Sign Up</h2>
            {/* Your signup form or content goes here */}
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPopup;
