import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react';
import au from '../../Assets/Images/au.gif'

export default function About() {
  return (
    // <div>
  <Box style={{ paddingTop: '170px' }} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'} justifyContent={"space-between"} background='linear-gradient(180deg, rgba(19,21,36,1) 0%, rgba(19,21,36,1) 8%, rgba(0,0,0,1) 100%)' pb={'70px'}>
    <Flex w={'80%'} justifyContent={'space-between'} direction={['column','column','row','row']} gap={"150px"} m={'auto'}>
 
        <Box w={['99%','99%','43%','43%']} m={'auto'} pl={['10px','10px','60px','60px']} color={'white'} mt={'78px'} >
          <Heading color={"gray"} fontSize={'1rem'}>
            What we do?
          </Heading>
          <Heading color={'white'} fontSize={['1.7rem','1.7rem','1.7rem','1.7rem']} lineHeight={'1.1em'} fontWeight={'600'}>
            From Development to Support
          </Heading>
          <Text marginTop={"20px"} marginLeft={"20px"} color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>
            {/* <ul>
              <li><Text><strong>Innovation and Creativity</strong></Text></li>
              <li><Text><strong>Customer-Centric Approach</strong></Text></li>
              <li><Text><strong>Sustainability and Social Responsibility</strong></Text></li>
              <li><Text><strong>Employee Development and Well-being</strong></Text></li>
              <li><Text><strong>Quality Assurance</strong></Text></li>
              <li><Text><strong>Global Reach and Local Impact</strong></Text></li>
              <li><Text><strong>Technological Advancements</strong></Text></li>
              <li><Text><strong>Agility and Adaptability</strong></Text></li>
              <li><Text><strong>Transparency and Integrity</strong></Text></li>
            </ul> */}
            At Upscaller, we're on a mission to redefine the landscape of IT services, providing innovative solutions that propel your business forward. With a commitment to excellence and a passion for technology, we deliver cutting-edge IT services tailored to meet the unique needs of our clients.<br/> <br/>
              Upscaller is a dynamic and forward-thinking IT services company, dedicated to empowering businesses through technology. Established with a vision to transform the IT industry, we bring a wealth of expertise, creativity, and dedication to every project we undertake.
          </Text>
        </Box>

        <Box backgroundImage={'https://assets-global.website-files.com/644bbf4e9d…76f/644bbf4e9d76dbf49a807851_illustr-bg-line.webp'} w={["66%","69%","49%","49%"]} backgroundRepeat="no-repeat" ml="auto">
          <Image w={'450px'} src={'https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76db6030807852_illustr-software.webp'} />
        </Box>

      </Flex>
    </Box>
    // </div>
  )
}
