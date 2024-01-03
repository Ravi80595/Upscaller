import { Box,Flex,Text,Heading} from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Footer from '../../Components/Footer/Footer'


const Commitment = () => {



return (
    <div>
      <Box paddingTop={["10px","10px","90px","90px"]} background={['black','black','linear-gradient(180deg, rgba(19,21,36,1) 0%, rgba(19,21,36,1) 8%, rgba(0,0,0,1) 100%)','rgba(19,21,36,1)']} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'} pb={["130px","60px","0px","90px"]}>
      <Flex w={'90%'} direction={['column', 'column', 'column', 'row']} gap={['25px', '125px', '125px', '75px']} h={['730px', '630px', '630px', 'auto']} pt={['10px','10px','70px','70px']} m={'auto'}>


<Box w={['100%','99%','43%','45%']} m={'auto'} pl={['0px','10px','60px','60px']} color={'white'} mt={'15px'}>
        <Heading color={"#999696"} fontSize={['1rem','1rem','2rem','18px']}> 
           Our Commitment
        </Heading>
        <Heading color={'white'} fontSize={['1.7rem','1.7rem','3.7rem','50px']} lineHeight={'1.1em'} fontWeight={'600'} mt={['5px','5px','15px','15px']}>
          Setting the Way <span> Forward</span> 
        </Heading>
        <Flex mt={'99px'} gap={'20px'} display={['none', 'none', 'flex']}>
        <Box style={{ border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <FaArrowLeftLong />
      </Box>
      <Box style={{ border: '2px solid white', borderRadius: '5px', padding: '10px' }}>
        <FaArrowRightLong />
      </Box>
      </Flex>
      </Box>


<Box w={['99%','99%','29%','27%']} backgroundRepeat={'no-repeat'} textAlign={['center','center','left','left']}>
       <Box border={['2px solid grey','2px solid grey','none','none']} p={['10px','10px','0px','0px']} borderRadius={'10px'} mb={['20px','20px','0px','0px']}> 
        <Heading style={{ backgroundImage: 'linear-gradient(58.32deg, #5e6cfe 19.11%, #f598e9 94.65%)', WebkitBackgroundClip: 'text', color: 'transparent' }} fontSize={["26px","26px","30px","30px"]}>Vision</Heading>
        <Text color={'white'} fontWeight={'600'} fontSize={['16px','16px','18px','18px']} mt={['0px','2px','10px','10px']} mb={'7px'}>Shaping Tomorrow</Text>
        <Text color={'gray'} fontWeight={'300'} w={["95%","95%","50%","90%"]} fontSize={'18px'}>Dedicated to pushing boundaries and defining the future of digital innovation</Text>
       </Box>
       <Box border={['2px solid grey','2px solid grey','none','none']} p={['10px','10px','0px','0px']} borderRadius={'10px'}>
        <Heading color={'#5e6cfe'} fontSize={["26px","26px","30px","30px"]} mt={'30px'}>Expertise</Heading>
        <Text color={'white'} fontWeight={'600'} fontSize={['16px','16px','18px','18px']} mt={['0px','2px','10px','10px']} mb={'7px'}>Tech Excellence</Text>
        <Text color={'gray'} fontWeight={'300'} w={["95%","95%","50%","90%"]}>Hamessing the latest technologies to deliver top-tier digital solutions</Text>
       </Box>
      </Box>


<Box w={['99%','99%','29%','26%']} backgroundImage={''} backgroundSize={'fit'} backgroundRepeat={'no-repeat'} textAlign={['center','center','left','left']}>
       <Box border={['2px solid grey','2px solid grey','none','none']} p={['10px','10px','0px','0px']} borderRadius={'10px'} mb={['20px','20px','0px','0px']}>
        <Heading color={'#5e6cfe'} fontSize={["26px","26px","30px","30px"]}>Mission</Heading>
        <Text color={'white'} fontWeight={'600'} fontSize={['16px','16px','18px','18px']} mt={['0px','2px','10px','10px']} mb={'7px'}>Value-Centric Solutions</Text>
        <Text color={'gray'} fontWeight={'300'} w={["95%","95%","50%","92%"]} fontSize={'18px'}>Crafting products that add genuine value,prioritizing client success</Text>
       </Box>
       <Box border={['2px solid grey','2px solid grey','none','none']} p={['10px','10px','0px','0px']} borderRadius={'10px'}>
        <Heading color={'#5e6cfe'} fontSize={["26px","26px","30px","30px"]} mt={'30px'}>Partnerships</Heading>
        <Text color={'white'} fontWeight={'600'} fontSize={['16px','16px','18px','18px']} mt={['0px','2px','10px','10px']} mb={'7px'}>Growing Together</Text>
        <Text color={'gray'} fontWeight={'300'} w={["95%","95%","50%","90%"]} fontSize={'18px'}>Collaborating with businesses, big and small, to realize shared goals</Text>
       </Box>
      </Box>

      </Flex>
      </Box>
    </div>
  )
}

export default Commitment