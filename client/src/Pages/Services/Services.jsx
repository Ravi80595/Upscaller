import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Box,Flex,Text,Heading} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import softwarePic from '../../Assets/Images/softwarePic.png';
import webDpic from '../../Assets/Images/webDpic.png';
import sp from '../../Assets/Images/sp.jpg'
import cs from '../../Assets/Images/cs.png'
import animated from '../../Assets/Images/animated.gif'


const Services = () => {
  return (
    <Box height="100vh" bg="black" color="white" overflowY="auto">
      <Navbar position="fixed" top="0" left="0" right="0"/>
      <Box
        height="40vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Black background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgGradient="linear(to right, black, black 50%, rgba(255,223,0,0.3))"
        />

        {/* Golden color effect on the right (less intense) */}
         <Box
        position="absolute"
        top="0"
        right="0"
        width="50%"
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

      <Text fontSize="3xl" fontWeight="bold" textAlign="center" zIndex="1">
        Our Services
      </Text>
    </Box>

      <Box style={{paddingTop:'90px'}} background='black' backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'} >
      <Flex w={'90%'} direction={['column', 'column', 'column', 'row']} gap={['25px', '125px', '125px', '75px']} h={['730px', '630px', '630px', '93vh']} pt={'40px'} m={'auto'}>
      <Box w={'43%'} m={'auto'} pl={'60px'} color={'white'} mt={'1px'} >
        <Heading color={"gray"} fontSize={'1rem'}> 
           What we Can do ?
        </Heading>
        <Heading color={'white'} fontSize={'2.7rem'} lineHeight={'1.1em'} fontWeight={'600'}>
          Our Services <span>are Commitments</span> 
        </Heading>
        <Flex mt={'99px'} gap={'20px'}>
       
      </Flex>
      </Box>
      
      <Box w={'29%'}  backgroundRepeat={'no-repeat'} >
      <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '2px 2px 2px 2px gold',
      }}
    >
      <Image src={softwarePic} alt="Software" w="100%" h="100%" objectFit="cover" borderRadius="md" />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="1xl"
        fontWeight="bold"
        textAlign="center"
        zIndex="1"
      >
        Software Development
      </Text>
    </Box>
       <br/>
       <Box  position="relative"
      overflow="hidden"
      borderRadius="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: "2px 2px 2px 2px gold",
      }}>
           <Image src={webDpic} alt="Software" w="100%" h="100%" objectFit="cover" borderRadius="md" />
           <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="1xl"
        fontWeight="bold"
        textAlign="center"
        zIndex="1"
      >
        Technical Support
      </Text>
       </Box>
      </Box>
      <br/>
      <Box w={'29%'} backgroundImage={''} backgroundSize={'fit'} backgroundRepeat={'no-repeat'}>
       <Box position="relative"
      overflow="hidden"
      borderRadius="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: "2px 2px 2px 2px gold",
      }}>
      <Image src={sp} alt="Software" w="100%" h="100%" objectFit="cover" borderRadius="md" />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="1xl"
        fontWeight="bold"
        textAlign="center"
        zIndex="1"
      >
        Web Development
      </Text>
       </Box>
       <br/>
       <Box position="relative"
      overflow="hidden"
      borderRadius="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: "2px 2px 2px 2px gold",
      }}>
             <Image src={cs} alt="Software" w="100%" h="100%" objectFit="cover" borderRadius="md" />
             <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="1xl"
        fontWeight="bold"
        textAlign="center"
        zIndex="1"
      >
        Client Satisfaction
      </Text>
       </Box>
      </Box>
      </Flex>
      
      </Box>
      <Footer />
    </Box>
  );
};

export default Services;
