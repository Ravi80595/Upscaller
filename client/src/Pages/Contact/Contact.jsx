import { Box, Image, Flex, Text, Button, Input, Textarea, Checkbox, Select } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import animated from '../../Assets/Images/animated.gif'
import axios from 'axios'
import MapComponent from '../../Components/MapComponent'

const Contact = () => {
  const latitude = 28.453432537750142;
  const longitude = 77.06834227116423;



  const handleClick = () => {
    const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsURL, '_blank');
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      mobile: event.target.elements.phone.value,
      Source: event.target.elements.interest.value,
      Description:event.target.elements.Desc.value
    };
    //  console.log(formData)
axios.post('', formData)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  };

return (
  <Box background={'black'} color={'white'}>
  <Navbar/>
  <Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgGradient="linear(to right, black, black 50%, rgba(255,223,0,0.3))"
        />

    <Box
        position="absolute"
        top="0"
        right="0"
        width={["50%","50%","50%","50%"]}
        height="100%"
        borderRadius="300px"
        bgGradient="linear(to bottom, transparent, rgba(155,223,0,0.2))"
        overflow="hidden"
      >
        <img
          src={animated}
          alt="Moving Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 8, // Adjust the opacity as needed
            transform: 'translateX(100%)', // Initial position outside the viewport
            animation: 'moveImage 15s linear infinite', // Adjust the duration as needed
          }}
        />
    </Box>

    <Text fontSize="3xl" fontWeight="bold" textAlign="center" zIndex="1" color={'white'}>
        Contact Us
      </Text>
    </Box>
   
    <Flex direction={['column', 'column', 'row', 'row']} backgroundColor='rgba(19,21,36,1)' textAlign='left' pt={120} pb={20}>
        <Box pt={['5px', '50px', '5px', '5px']} w={['99%', '50%', '50%', '50%']}>


          {/* ******************************* Map component ************************************ */}


          <Box w={['80%', '70%', '70%', '70%']} m={'auto'} mt={['10px','20px','250px','250px']}>
            {/* <MapComponent /> */}
          </Box>

          {/* ************************* contact Info changes here  ****************************** */}

          <Box w={['95%', '95%', '90%', '60%']} m={'auto'} mt={['30px', '30px', '90px', '20px']} textAlign={'center'} pb={20}>
            <Text> <b>Call Us : </b>+91 9306454204</Text>
            <Text pt={2}> <b>Email Us : </b>info@upscaller.com</Text>
            <Text pt={2}> <b>Address : </b>713 A-09 GDITL North-x tower Netaji subhash place Delhi</Text>
            <Flex pt={5} w={['90%', '90%', '40%', '90%']} justifyContent={'space-around'}>
              <a href="https://www.instagram.com/upscaller_innovation?igsh=MmVlMjlkMTBhMg== " target='blank'>
                <Image w='30px' src='https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png' /></a>
              <a href="https://www.linkedin.com/company/upscaller/ " target='blank'>
                <Image w='30px' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' /></a>
              <a href="https://api.whatsapp.com/send/?phone=9306454204&text&type=phone_number&app_absent=0" target='blank'>
                <Image w='30px' src='https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png' /></a>
              <a href="https://www.facebook.com/zenoo18" target='blank'>
                <Image w='30px' src='https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png' /></a>
              <a href="https://www.youtube.com/channel/UCk5O3EwfOobD_vhZnlT0CLg" target='blank'>
                <Image w='30px' src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png' /></a>
            </Flex>
            <Button onClick={handleClick} mt={5} borderRadius={5} background={'blue'} color={'white'} _hover={{ color: 'blue', background: 'white', border: '2px solid blue' }} transition={'ease 1s  '} textAlign={'center'}>GET DIRECTIONS</Button>
          </Box>
        </Box>

         {/* ********************** Contact form **************************** */}


<Box boxShadow='rgb(3 102 255 / 40%) 0px 2px 4px, rgb(8 68 255 / 30%) 0px 7px 13px -3px, rgb(24 80 255 / 20%) 0px -3px 0px inset' borderRadius={10} textAlign={'left'} w={['95%', '60%', '60%', '35%']} m={'auto'} h={['520px', '550px', '550px', '520px']} mt={'10px'} backgroundColor={'black'}>
          <Box w={['92%', '92%', '62%', '92%']} m={'auto'} mt={'30px'}>
            <Box w={['90%', '90%', '60%', '82%']} m='auto' mt={'70px'}>
<form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <Input mb={'15px'} type="text" name="name" placeholder="Name" />
      </label>
      <br />
      <label>
        Email <br />
        <Input mb={'15px'} type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>
        Message <br />
        <Textarea mb={'15px'} type="text" name="Desc" placeholder="Enter your message" />
      </label>
      <div>
        <label>
          <Checkbox paddingRight={'10px'} marginTop={'5px'}  fontSize={['12px', '16px', '16px', '12px']} type="checkbox"  name="permission" defaultChecked />
          By providing your details and checking the box below, you grant Upscaller permission to react out to you.
        </label>
      </div>
      <div>
        <button style={{background:'blue',color:'white',marginTop:'15px',padding:'5px',borderRadius:'8px'}} type="submit">Submit</button>
      </div>
    </form>
            </Box>
          </Box>
        </Box>
      </Flex>


  <Footer/>
  </Box>
  )
}

export default Contact