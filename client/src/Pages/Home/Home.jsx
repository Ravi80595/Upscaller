import { Box,Flex,Text,Image, Heading} from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '@chakra-ui/button';



const Home = () => {




return (
    <Box>
      <Navbar/>
      <Box backgroundColor={'black'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'cover'}>
      <Flex w={'100%'} direction={['column', 'column', 'column', 'row']} gap={['25px', '125px', '125px', '125px']} h={['730px', '630px', '630px', '100vh']} pt={'40px'}>
      <Box w={'46%'} m={'auto'} mt={'1406x'} pl={'60px'} color={'white'}>
        <Heading color={'white'} fontSize={'3.7rem'} lineHeight={'1.1em'} fontWeight={'600'}>
          Digital Technology IT Solution Services Around the World
        </Heading>
        <Text pt={'20px'} fontSize={'16px'} fontWeight={'500'} lineHeight={'1.5'}>The only all-in-one solution for ISO, GDPR, EOS and more. Outclass your competitors, delight your customers, and build a resilient, high-value company with Upscaler.</Text>
        <Flex mt={'20px'} gap={'10px'}>
        <Text color={'white'} fontWeight={'600'}>Get a Call-back</Text>
        <Box marginTop={'5px'}>
        <FaArrowRightLong/>
        </Box>
        </Flex>
      </Box>
      <Box w={'46%'} backgroundImage={'https://dashtechinc.com/wp-content/uploads/2020/03/Enterprise-Web-Development-Hero-Banner.png'}>

      </Box>
      </Flex>
      <Button>More...</Button>
      </Box>
      </Box>
  )
}

export default Home