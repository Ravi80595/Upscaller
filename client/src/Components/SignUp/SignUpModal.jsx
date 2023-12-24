import React, { useState } from 'react';
import './SignUpModal.css';

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordMatch, setPasswordMatch] = useState(true); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordMatch(prevMatch => name === 'password' ? prevMatch : prevMatch && formData.password === value);
    }
  };

  const handleSubmit = () => {
    console.log('fdsccs', formData);

    if (formData.password === formData.confirmPassword) {
      setIsOpen(false);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    
      <button onClick={openModal}>Signup</button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="close-btn" onClick={closeModal}>&times;</div>
            <div className="modal-form">
              <div>
                {/* <span>Name:</span> */}
                <input className='modal-Input' placeholder='Enter Name..' type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                {/* <span>Email:</span> */}
                <input className='modal-Input' type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                {/* <span>Mobile Number:</span> */}
                <input className='modal-Input' type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>
              <div>
                {/* <span>Password:</span> */}
                <input className='modal-Input' type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div>
                {/* <span>Confirm Password:</span> */}
                <input className='modal-Input' type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              {!passwordMatch && (
                <div style={{ color: 'red' }}>Passwords do not match.</div>
              )}
              <button onClick={handleSubmit} style={{ marginTop: '4px', backgroundColor: '#008080', color: 'white', padding: '8px' }}>
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;
