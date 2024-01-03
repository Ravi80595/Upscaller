import { Box, Flex, Text, Heading } from '@chakra-ui/layout';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { FaArrowUp } from 'react-icons/fa'; // Use the up arrow icon
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import Footer from '../../Components/Footer/Footer';
import Commitment from './Commitment';
import Agile from './Agile';
// import au from '../../Assets/Images/au.gif';
import About from './About';
import { animateScroll as scroll } from 'react-scroll';
import Carousel from './Carousel';
import HomeServices from './HomeServices';
import SideBox from '../../Components/SideBox';
import Chatbot from '../../Components/Chat/ChatBot';

const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };


return (
    <Box>
      <Navbar />
      <SideBox/>
      <Chatbot/>
      <Box backgroundColor={'black'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'}>
        <Flex w={'100%'} direction={['column-reverse', 'column-reverse', 'column', 'row']} gap={['25px', '125px', '125px', '125px']} h={['730px', '630px', '630px', '93vh']} pt={'40px'}>
          <Box w={['99%', '99%', '43%', '44%']} m={'auto'} pl={['10px', '10px', '60px', '60px']} color={'white'} mt={['20px', '20px', '150px', '150px']}>
            <Heading color={'white'} fontFamily={'NeueMontreal, sans-serif'} fontSize={['1.7rem', '1.7rem', '3.7rem', '3.7rem']} lineHeight={'1.1em'} fontWeight={'500'}>
              Digital IT  Solution <span style={{ backgroundImage: 'linear-gradient(58.32deg, #5e6cfe 19.11%, #f598e9 94.65%)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Services</span> Around the World
            </Heading>
            <Text fontFamily={'NeueMontreal, sans-serif'} pt={'20px'} fontSize={['1rem','1rem','1.125rem','1.125rem']} fontWeight={'500'} lineHeight={'1.5em'} color={'rgba(255, 255, 255, .8)'}>
              The only all-in-one solution for ISO, GDPR, EOS and more. Outclass your competitors, delight your customers, and build a resilient, high-value company with Upscaler.
            </Text>
            <Flex mt={['19px', '19px', '99px', '99px']} gap={'10px'}>
              <Text color={'white'} fontWeight={'600'}>
                Get a Call-back
              </Text>
              <Box marginTop={'5px'}>
                <FaArrowUp />
              </Box>
            </Flex>
          </Box>
          <Box w={['96%', '96%', '56%', '56%']} backgroundImage={''} backgroundSize={'fit'} backgroundRepeat={'no-repeat'}>
            <Image src='https://dashtechinc.com/wp-content/uploads/2020/03/Enterprise-Web-Development-Hero-Banner.png' />
          </Box>
        </Flex>
        <Flex justifyContent={'center'} position="fixed" bottom="2" left="2"> {/* Change left to right */}
          <Button onClick={scrollToTop} colorScheme="teal" variant="outline" size="sm">
            <FaArrowUp />
          </Button>
        </Flex>
      <About />
        <HomeServices/>
        <Commitment />
      {/* <Agile /> */}
     {/* <Carousel/> */}
      <Footer />
      </Box>
    </Box>
  );
};

export default Home;
