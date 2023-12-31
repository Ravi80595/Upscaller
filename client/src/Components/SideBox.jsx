import React from 'react'
import { Box,Text,Flex } from '@chakra-ui/react'
import "../CSS/SideBox.css"
import {AiFillLinkedin,AiFillInstagram,AiFillFacebook,AiOutlineWhatsApp,AiFillYoutube} from 'react-icons/ai'


const SideBox = () => {



return (
    <Box className='sideBox' display={["none","none","none","block"]}>
    <a href="https://www.linkedin.com/company/upscaller/" target='blank'>
     <Flex className='sideBox1' borderTopRightRadius='15px' pt={'10px'}>
        <Text margin='0px' pt='7px' color='white'>Linkedin &nbsp; &nbsp;</Text>
        <Box className='sideBox2'>
        <AiFillLinkedin color='white'/>
        </Box>
    </Flex>
    </a>
    <a href="https://www.instagram.com/upscaller_innovation?igsh=MmVlMjlkMTBhMg==" target='blank'>
    <Flex className='sideBox1'>
        <Text pt='7px' margin='0px' color='white'>Instagram</Text>
        <Box className='sideBox2'>
        <AiFillInstagram color='white'/>
        </Box>
    </Flex>
    </a>
    <a href="https://api.whatsapp.com/send/?phone=9306454204&text&type=phone_number&app_absent=0" target='blank'>
    <Flex className='sideBox1'>
        <Text pt='7px' margin='0px' color='white'>Whatsapp</Text>
        <Box className='sideBox2'>
        <AiOutlineWhatsApp color='white' />
        </Box>
    </Flex>
    </a>
    <a href="https://www.facebook.com" target='blank'>
    <Flex className='sideBox1' borderBottomRightRadius='15px'>
        <Text pt='7px' margin='0px' color='white'>Facebook</Text>
        <Box className='sideBox2'>
        <AiFillFacebook color='white'/>
        </Box>
    </Flex>
    </a>
    </Box>
  )
}

export default SideBox