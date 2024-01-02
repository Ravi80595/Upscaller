import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.png'
import { Image } from '@chakra-ui/image'
import { FaFacebook } from "react-icons/fa";
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { FaInstagramSquare,FaLinkedin} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {



return(
    <Box pt={'30px'} background={'black'} color={'white'} pb={'10px'}> 
    <Flex justifyContent={'space-around'} direction={['column','column','row','row']} w='90%' m={'auto'} pb={'20px'}>
        <Box w={['94%','94%','24%','24%']}>
            <Image w={'150px'} src={UpscallerLogo}/>
            <Text lineHeight={['1.7rem','1.7rem','2rem','2rem']}>Empowering companies to become more organised, compliant and enterprise ready</Text>
            <Flex w={'50%'} pt={'15px'} fontSize={'24px'} justifyContent={'space-around'}>
            <a href="https://www.linkedin.com/company/upscaller/" target='_blank'>
            <BsTwitterX />
            </a>
            <a href="">
            <FaFacebook />
            </a>
            <a href="https://www.instagram.com/upscaller_innovation?igsh=MmVlMjlkMTBhMg==" target='_blank'>
            <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/company/upscaller/" target='_blank'>
            <FaLinkedin />
            </a>
            </Flex>
        </Box>
        <Box lineHeight={'2rem'}>
            <Text fontWeight={'600'} pb={'10px'} fontSize={'20px'}>Important Links</Text>
            <Link to='/'>
            <Text _hover={{color:'blue'}}>Home</Text>
            </Link>
            <Link to='/about'>
            <Text _hover={{color:'blue'}}>About us</Text>
            </Link>
            <Link to='/services'>
            <Text _hover={{color:'blue'}}>Services</Text>
            </Link>
            <Link to='/contact'> 
            <Text _hover={{color:'blue'}}>Contact us</Text>
            </Link>
        </Box>
        <Box lineHeight={'2rem'}  >
            <Text fontWeight={'600'} pb={'10px'} fontSize={'20px'}>Contact Us</Text>
            <Text>A-713 GDITL North-x Tower</Text>
            <Text>Netaji Subhash Place Delhi 110036</Text>
            <Text>+91 9306454204</Text>
        </Box>
        <Box w={['99%','99%','24%','24%']}>
            <Text fontWeight={'600'} pb={'10px'} fontSize={'20px'}>Subscribe</Text>
            <Input borderRadius={'10px'} p={'10px'} placeholder='Enter email'/>
            <Button mt={'10px'}> Submit</Button>
            <Text pt={'10px'}>Subscribe for trends and tips! Get fresh insights and success strategies.</Text>
        </Box>
    </Flex>
    <hr />
    </Box>
  )
}

export default Footer