import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('formdata', formData);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Login</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="close-btn" onClick={closeModal}>&times;</div>
            <div>
              <div>
                <span>Email</span>
                <input className='modal-Input' type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <span>Password</span>
                <input className='modal-Input' type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <button onClick={handleSubmit} style={{ marginTop: '4px', backgroundColor: '#008080', color: 'white', padding: '8px' }}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
