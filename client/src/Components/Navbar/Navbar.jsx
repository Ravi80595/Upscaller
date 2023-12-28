  import { Box,Button,Flex,FormControl,FormLabel,Image,Input,InputGroup,InputRightElement,Text, useDisclosure } from '@chakra-ui/react'
  import React, { useEffect, useState } from 'react'
  import UpscallerLogo from '../../Assets/Images/UpscallerLogo.png'
  import {CloseIcon} from '@chakra-ui/icons'
  import { Link, useNavigate } from 'react-router-dom'
  // import ScrollToTopLink from './ScrollToTopLink'
  import './Navbar.css'
  import MobNav from './MobNav'
  import SignupModal from '../SignUp/SignUpModal';
  import LoginModal from '../Login/LoginModal'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { baseUrl } from '../../Utils/BaseUrl'



  const Navbar = () => {
      const [navbarBackground, setNavbarBackground] = useState('transparent');
      const [navbarTextColor, setNavbarTextColor] = useState('white');
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [show,setShow]=useState(false)
      const navigate=useNavigate()
      const [values,setValues]=useState({
        email:"",
        password:"",
      })
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
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


      const handleClick = () => setShow(!show);

      const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
      }
    
    
    
    
const handleLogin = async () => {
  try {
    const response = await fetch(`${baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      const token = data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
      // toast({
      //   title: 'Welcome to Scroll Labs',
      //   description: "Influencers collaboration tool only for Laudco clients",
      //   status: 'success',
      //   duration: 9000,
      //   isClosable: true,
      // })
    } else {
      console.error('Login failed');
      alert('Login failed. Please check your credentials and try again.');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
      
  return (
      <>
      <Box>
      <Box style={navbarStyle} className='Laptop-view' box-shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' p={5} w='100vw' position='fixed' zIndex={9999} background='transparent'>
        <Flex justifyContent='space-between'>
          <Flex w={'20%'}>
          <Image w={'190px'} mt={'15px'} ml={'20px'} h={'45px'} src={UpscallerLogo}/>
          </Flex>
          <Flex fontSize={['15px',20,20,20]} justifyContent='space-around' pt={'20px'} w={'40%'}>
            <Link to='/'>
              <Text className='Link_btns'>Home</Text>
            </Link>
              <Link to='/about'>
              <Text className='Link_btns'>About Us</Text>
              </Link>
              <Link to='/services'>
              <Text className='Link_btns'>Services</Text>
              </Link>
              <Link to='/contact'>
              <Text className='Link_btns'>Contact Us</Text>
              </Link>
          </Flex>
          <Box w={'25%'}>
          <Flex pt={'15px'} justifyContent={'end'} gap={'20px'}>
          {/* <Button onClick={onOpen}>Login</Button> */}
             <Text onClick={onOpen} fontSize={20}>Login</Text>
            <Button background={'white'} color={'black'} p={'8px'} borderRadius={'15px'}>Contact Now</Button>
          </Flex>
          </Box>
          </Flex>
      </Box>
      </Box>
      <div className='mobileDiv'>
              <MobNav/>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl isRequired w={'88%'} m={'auto'}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder='Enter email' name='email' onChange={handleChange}/>
                    <FormLabel pt={'10px'}>Password</FormLabel>
                   <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          name="password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                   </InputGroup>
                    <Button mt={4} mb={'50px'} width="100%" onClick={handleLogin}>Login</Button>
            </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>

      </>
    )
  }

  export default Navbar