import { Box,Button,Flex,Image,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.jpg'
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
// import ScrollToTopLink from './ScrollToTopLink'
import './Navbar.css'
import MobNav from './MobNav'



const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [navbarTextColor, setNavbarTextColor] = useState('white');
  
    useEffect(() => {
      // Add an event listener to track scroll position and update the navbar background
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground('black');
        setNavbarTextColor('white');
      } else {
        setNavbarBackground('transparent');
        setNavbarTextColor('white');
      }
    };
  
    const navbarStyle = {
      backgroundColor: navbarBackground,
      color: navbarTextColor,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      transition: 'background-color 0.3s ease',
      zIndex: 1000,
    };
    
return (
    <>
    <Box>
    <Box style={navbarStyle} className='Laptop-view' box-shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' p={5} w='100vw' position='fixed' zIndex={9999} background='transparent'>
      <Flex justifyContent='space-between'>
        <Flex w={'20%'}>
        <Image w={'170px'} h={'45px'} src={UpscallerLogo}/>
        </Flex>
        <Flex fontSize={['15px',20,20,20]} justifyContent='space-around' pt={'20px'} w={'40%'}>
            <Text className='Link_btns'>Home</Text>
            <Text className='Link_btns'>About Us</Text>
            <Text className='Link_btns'>Our Team</Text>
            <Text className='Link_btns'>Careers</Text>
            <Text className='Link_btns'>Contact Us</Text>
        </Flex>
        <Box w={'20%'}>
        <Flex pt={'20px'} w={'20%'} m={'auto'} gap={'10px'}>
          <Button>Signup</Button>
          <Button>Login</Button>
        </Flex>
        </Box>
        </Flex>
    </Box>
    </Box>
    <div className='mobileDiv'>
            <MobNav/>
        </div>
    </>
  )
}

export default Navbar