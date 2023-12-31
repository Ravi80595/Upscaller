import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Image, background } from '@chakra-ui/react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import softwarePic from '../../Assets/Images/softwarePic.png';
import webDpic from '../../Assets/Images/webDpic.png';
import sp from '../../Assets/Images/sp.jpg'
import cs from '../../Assets/Images/cs.png'
import animated from '../../Assets/Images/animated.gif'
import puzzle from '../../Assets/Images/puzzle.gif'
import problem from '../../Assets/Images/problem.avif'
import blue from '../../Assets/Images/blue.avif'

const About = () => {




return (
    <Box background={'black'}>
      <Navbar />
      <Box h={'80vh'}>
        <Box height="100vh" bg="black" color="white" overflowY="auto">
          <Navbar position="fixed" top="0" left="0" right="0" />
          <Box
            height="40vh"
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
              width="10%"
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
              About Us
            </Text>
          </Box>
<Box style={{ paddingTop: '90px' }} background='black' backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize=   {'cover'} justifyContent={"space-between"}  >
    <Flex w={'100%'} justifyContent={'space-between'} direction={['column','column','row','row']} gap={"100px"} m={'auto'}>
        <Box w={['99%','99%','43%','43%']} m={'auto'} pl={['10px','10px','60px','60px']} color={'white'} mt={'1px'} >
          <Heading color={"gray"} fontSize={'1rem'}>
            We upscale your project
          </Heading>
          <Heading color={'white'} fontSize={['1.7rem','1.7rem','2.7rem','2.7rem']} lineHeight={'1.1em'} fontWeight={'600'}>
            As we are Upscaller
          </Heading>
          <Text color={"gray"} marginTop={"20px"}>
            We blend startup energy with expert strategy to launch your business success. Simple, smart, and geared for growth.
          </Text>
          <Text color="gray">At InteCrit, we're not just consultants; we're the architects of your ambitions. Here, dreams don't just take off—they skyrocket. Partner with us, and let's reach new heights together.</Text>
        </Box>
        <Box w={["49%","49%","29%","29%"]} marginLeft={"500px"} backgroundRepeat="no-repeat" ml="auto">
          <Image src={puzzle} />
        </Box>
      </Flex>
    </Box>
    {/* <br /> */}
<Box style={{ paddingTop: '90px' }} bg="gray.900" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
            <Flex w={'100%'} justifyContent={'space-between'} direction={['column-reverse','column-reverse','row','row']} m={'auto'}>
              <Box w={['99%','99%','43%','43%']} m={'auto'} pl={['20px','20px','60px','60px']} color={'white'} mt={'1px'} >
                <Heading color={"gray"} fontSize={'1rem'}>
                  Like a puzzle solver
                </Heading>
                <Heading color={'white'} fontSize={'1.7rem'} lineHeight={'1.1em'} fontWeight={'600'}>
                  We have your back at every technical hurdle
                </Heading>
                <Text color={"gray"} marginTop={"20px"} mb={['30px','30px','0px','0px']}>
                  A final stop for all your technical hurdles. We dont belive on assurance policy , we deliver it.
                </Text>
              </Box>
              {/* <br /> */}
              <Flex>
                <Box w={["99%","99%","69%","69%"]} backgroundRepeat="no-repeat" ml="auto" padding={["25px","25px","50px","50px"]} marginRight={["5px","5px","50px","50px"]} marginBottom="30px">
                  <Image
                    src={problem}
                    style={{
                      border: '1px solid rgba(1, 2, 2, 0.2)', 
                      borderRadius: '8px', 
                      opacity: 0.5, 
                    }}
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box bg="gray.900">
  <Flex
    justifyContent="space-between"
    width="85%"
    margin="auto"
    padding="100px"
    borderRadius="10px"
    position="relative"
    backgroundImage={blue}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    opacity="0.8">
    <Box width={["99%","99%","50%","50%"]}>
      <Text fontSize="30px">Why Choose Us?</Text>
      <Text>
        Quality Service Without The High Costs. We Get It - It's Your Startup, And You Have A Budget. We're Affordable So You Can Spend More On Your Actual Business
      </Text>
    </Box>

  
    <Flex flexDirection="column" justifyContent="space-between">
    
      <Box>
        <Text fontSize="20px" color="gold" fontWeight="bold">10X</Text>
        <Text>Relable and cost effective</Text>
      </Box>

   
      <Box>
        <Text fontSize="20px" color="gold" fontWeight="bold">24/7</Text>
        <Text>Dedicated Professionals</Text>
      </Box>
    </Flex>

    <Flex flexDirection="column" justifyContent="space-between">
     
      <Box>
        <Text fontSize="20px" color="gold" fontWeight="bold">365</Text>
        <Text>Days of Support</Text>
      </Box>

      <Box>
        <Text fontSize="20px" color="gold" fontWeight="bold">100%</Text>
        <Text>Accuracy on performance</Text>
      </Box>
    </Flex>
  </Flex>
  <br/>
</Box>

          <Footer />
        </Box>
      </Box>


    </Box>
  )
}

export default About