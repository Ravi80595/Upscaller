import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, Text, Flex } from '@chakra-ui/react';
import axios from 'axios';

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  const handlePasswordChange = () => {
    axios.post('/api/changePassword', { newPassword })
      .then(() => console.log('Password changed:', newPassword))
      .catch((error) => console.error('Error changing password:', error));
  };

  const handleAddressUpdate = () => {
    axios.put('/api/updateAddress', { newAddress })
      .then(() => console.log('Address updated:', newAddress))
      .catch((error) => console.error('Error updating address:', error));
  };

  const handlePhoneNumberUpdate = () => {
    axios.put('/api/updatePhoneNumber', { newPhoneNumber })
      .then(() => console.log('Phone number updated:', newPhoneNumber))
      .catch((error) => console.error('Error updating phone number:', error));
  };

  return (
    <>
    <Box p={14} w={'50%'} mx="auto" border={'1px solid grey'} mt={'40px'}>
      {/* <Heading as="h2" mb={4} textAlign="center">
        Client Profile
      </Heading> */}

      <FormControl mb={4}>
        <FormLabel>Upload Profile Picture:</FormLabel>
        <Input type="file" accept="image/*" onChange={handleProfilePicChange} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>New Name</FormLabel>
        <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        {/* <Button mt={2} onClick={handlePasswordChange}>
          Change Password
        </Button> */}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>New Address:</FormLabel>
        <Input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
        {/* <Button mt={2} onClick={handleAddressUpdate}>
          Update Address
        </Button> */}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>New Phone Number:</FormLabel>
        <Input type="tel" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} />
        {/* <Button mt={2} onClick={handlePhoneNumberUpdate}>
          Update Phone Number
        </Button> */}
      </FormControl>
      <Flex justifyContent='center'>
      <Button>Submit</Button>
      </Flex>
        
    </Box>


    </>
  );
};

export default EditProfile;
