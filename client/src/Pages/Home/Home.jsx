import { Box,Flex,Text,Heading} from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import Footer from '../../Components/Footer/Footer'
import Commitment from './Commitment';
import Agile from './Agile';


const Home = () => {




return (
    <Box>
      <Navbar/>
      <Box backgroundColor={'black'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'}>
      <Flex w={'100%'} direction={['column-reverse', 'column-reverse', 'column', 'row']} gap={['25px', '125px', '125px', '125px']} h={['730px', '630px', '630px', '93vh']} pt={'40px'}>
      <Box w={['99%','99%','43%','43%']} m={'auto'} pl={['10px','10px','60px','60px']} color={'white'} mt={['20px','20px','150px','150px']}>
        <Heading color={'white'} fontSize={['1.7rem','1.7rem','3.7rem','3.7rem']} lineHeight={'1.1em'} fontWeight={'600'}>
          Digital IT <span> Solution</span> Services Around the World
        </Heading>
        <Text pt={'20px'} fontSize={'16px'} fontWeight={'500'} lineHeight={'1.5rem'}>The only all-in-one solution for ISO, GDPR, EOS and more. Outclass your competitors, delight your customers, and build a resilient, high-value company with Upscaler.</Text>
        <Flex mt={['19px','19px','99px','99px']} gap={'10px'}>
        <Text color={'white'} fontWeight={'600'}>Get a Call-back</Text>
        <Box marginTop={'5px'}>
        <FaArrowRightLong/>
        </Box>
        </Flex>
      </Box>
      <Box w={['96%','96%','56%','56%']} backgroundImage={''} backgroundSize={'fit'} backgroundRepeat={'no-repeat'}>
        <Image src='https://dashtechinc.com/wp-content/uploads/2020/03/Enterprise-Web-Development-Hero-Banner.png'/>
      </Box>
      </Flex>
      <Flex justifyContent={'center'}>
        <Image w={'70px'} src='https://socotratrip.com/wp-content/uploads/2022/05/animation_640_l3k1n5d3.gif'/>
      </Flex>
      </Box>
      
      <Commitment/>
      <Agile/>
      <Footer/>
      </Box>
      
  )
}

export default Home