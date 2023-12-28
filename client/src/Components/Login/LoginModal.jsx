import React, { useState } from 'react';
import './LoginModal.css';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const LoginModal = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('formdata', formData);
    // setIsOpen(false);
  };

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <button onClick={onOpen}>Login</button>
      <Modal isOpen={isOpen} onClose={onClose} style={{backgound:'white'} }>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Texg in boy</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="close-btn" onClick={onClose}>&times;</div>
            <Box>
              <Box>
                <span>Email</span>
                <input className='modal-Input' type="email" name="email" value={formData.email} onChange={handleChange} />
              </Box>
              <Box>
                <span>Password</span>
                <input className='modal-Input' type="password" name="password" value={formData.password} onChange={handleChange} />
              </Box>
              <Flex justifyContent={'center'}>
              <Button onClick={handleSubmit} style={{ marginTop: '4px', backgroundColor: '#008080', color: 'white', padding: '8px' }}>
              </Button>
              </Flex>
                Login
            </Box>
          </div>
        </div>
      )} */}
    </>
  );
};

export default LoginModal;
