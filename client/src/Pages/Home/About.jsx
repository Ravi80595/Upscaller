import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Image, background } from '@chakra-ui/react';
import au from '../../Assets/Images/au.gif'

export default function About() {
  return (
    <div>
        <Box style={{ paddingTop: '90px' }} background='black' backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize=   {'cover'} justifyContent={"space-between"}  >
    <Flex w={'100%'} justifyContent={'space-between'} direction={['column','column','row','row']} gap={"100px"} m={'auto'}>
        <Box w={['99%','99%','43%','43%']} m={'auto'} pl={['10px','10px','60px','60px']} color={'white'} mt={'1px'} >
          <Heading color={"gray"} fontSize={'1rem'}>
            What we do?
          </Heading>
          <Heading color={'white'} fontSize={['1.7rem','1.7rem','1.7rem','1.7rem']} lineHeight={'1.1em'} fontWeight={'600'}>
            From Development to Support
          </Heading>
          <Text color={"gray"} marginTop={"20px"} marginLeft={"20px"}>
  <ul>
    <li><Text><strong>Innovation and Creativity</strong></Text></li>
    <li><Text><strong>Customer-Centric Approach</strong></Text></li>
    <li><Text><strong>Sustainability and Social Responsibility</strong></Text></li>
    <li><Text><strong>Employee Development and Well-being</strong></Text></li>
    <li><Text><strong>Quality Assurance</strong></Text></li>
    <li><Text><strong>Global Reach and Local Impact</strong></Text></li>
    <li><Text><strong>Technological Advancements</strong></Text></li>
    <li><Text><strong>Agility and Adaptability</strong></Text></li>
    <li><Text><strong>Transparency and Integrity</strong></Text></li>
  </ul>
</Text>
          
        </Box>
        <Box w={["66%","69%","49%","49%"]} marginLeft={"500px"} backgroundRepeat="no-repeat" ml="auto">
          <Image src={au} />
        </Box>
      </Flex>
    </Box>
    </div>
  )
}
