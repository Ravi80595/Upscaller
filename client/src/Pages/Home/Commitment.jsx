import { Box,Flex,Text,Heading} from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import Footer from '../../Components/Footer/Footer'


const Commitment = () => {



return (
    <div>
       <Box backgroundColor={'black'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'}>
      <Flex w={'100%'} direction={['column', 'column', 'column', 'row']} gap={['25px', '125px', '125px', '125px']} h={['730px', '630px', '630px', '93vh']} pt={'40px'}>
      <Box w={'43%'} m={'auto'} pl={'60px'} color={'white'} mt={'150px'}>
        <Heading color={"gray"} fontSize={'2rem'}> 
           Our Commitment
        </Heading>
        <Heading color={'white'} fontSize={'3.7rem'} lineHeight={'1.1em'} fontWeight={'600'}>
          Setting the Way <span style={{color:'linear-gradient(to bottom, #87CEEB, #FF4500);'}}> Forward</span> 
        </Heading>
        <Flex mt={'99px'} gap={'20px'}>
        <Box style={{ border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
  <FaArrowLeftLong />
</Box>

<Box style={{ border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
  <FaArrowRightLong />
</Box>
       
        
        </Flex>
      </Box>
      <Box></Box>
      <Box w={'29%'}  backgroundRepeat={'no-repeat'}>
       <Box>
        <Heading color={'#FF5733'} fontSize={"1.5rem"}>Vision</Heading>
        <Text color={'white'} fontWeight={'600'}>Shaping Tomorrow</Text>
        <Text color={'gray'} fontWeight={'300'} w={"50%"}>Dedicated to pushing boundaries and defining the future of digital innovation</Text>
       </Box>
       <Box>
        <Heading color={'#FF5733'} fontSize={"1.5rem"}>Expertise</Heading>
        <Text color={'white'} fontWeight={'600'}>Tech Excellence</Text>
        <Text color={'gray'} fontWeight={'300'} w={"50%"}>Hamessing the latest technologies to deliver top-tier digital solutions</Text>
       </Box>
      </Box>
      <Box w={'29%'} backgroundImage={''} backgroundSize={'fit'} backgroundRepeat={'no-repeat'}>
       <Box>
        <Heading color={'#FF5733'} fontSize={"1.5rem"}>Mission</Heading>
        <Text color={'white'} fontWeight={'600'}>Value-Centric Solutions</Text>
        <Text color={'gray'} fontWeight={'300'} w={"50%"}>Crafting products that add genuine value,prioritizing client success</Text>
       </Box>
       <Box>
        <Heading color={'#FF5733'} fontSize={"1.5rem"}>Partnerships</Heading>
        <Text color={'white'} fontWeight={'600'}>Growing Together</Text>
        <Text color={'gray'} fontWeight={'300'} w={"50%"}>Collaborating with businesses, big and small, to realize shared goals</Text>
       </Box>
      </Box>
      </Flex>
      
      </Box>

        
        


    </div>
  )
}

export default Commitment