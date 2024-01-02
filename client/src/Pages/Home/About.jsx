import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react';
import au from '../../Assets/Images/au.gif'

export default function About() {
  return (
    // <div>
  <Box pt={['0px','0px','200px','200px']} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'} justifyContent={"space-between"} background='linear-gradient(0deg, rgba(19,21,36,1) 0%, rgba(19,21,36,1) 8%, rgba(0,0,0,1) 100%)' pb={'70px'}>

    
<Flex w={['90%','90%','80%','80%']} justifyContent={'space-between'} direction={['column-reverse','column-reverse','row','row']} gap={["40px","10px","150px","90px"]} m={'auto'}>

<Flex backgroundImage={'https://assets-global.website-files.com/644bbf4e9d…76f/644bbf4e9d76dbf49a807851_illustr-bg-line.webp'} w={["96%","96%","49%","50%"]} backgroundRepeat="no-repeat" ml="auto">
          <Image src={'https://i.pinimg.com/originals/51/ce/d1/51ced1ca835521237877e5380a94c554.gif'} />
        </Flex>

        <Box w={['99%','99%','43%','49%']} m={'auto'} pl={['10px','10px','60px','60px']} color={'white'} mt={'7px'} >
          <Heading color={"gray"} fontSize={'1rem'}>
            What we do?
          </Heading>
          <Heading color={'white'} fontSize={['1.7rem','1.7rem','1.7rem','1.7rem']} lineHeight={'1.1em'} fontWeight={'600'}>
            From Development to Support
          </Heading>
          <Text marginTop={"20px"} marginLeft={"20px"} color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>
            At Upscaller, we're on a mission to redefine the landscape of IT services, providing innovative solutions that propel your business forward. With a commitment to excellence and a passion for technology, we deliver cutting-edge IT services tailored to meet the unique needs of our clients.<br/> <br/>
              Upscaller is a dynamic and forward-thinking IT services company, dedicated to empowering businesses through technology. Established with a vision to transform the IT industry, we bring a wealth of expertise, creativity, and dedication to every project we undertake.
          </Text>
        </Box>

        

      </Flex>
    </Box>
    // </div>
  )
}
