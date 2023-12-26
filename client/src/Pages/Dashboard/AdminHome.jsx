import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'



const AdminHome = () => {




return (
    <div>
        <Box w={'90%'} m={'auto'}>
          <Flex justifyContent={'center'}>
           <Image w={'110px'} src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg'/>
          </Flex>
          <Text textAlign={'center'} fontSize={'22px'}>Good evening, Ravi</Text>
          <Text textAlign={'center'}>Here's what is happening in Upscaller today.</Text>
        </Box>
        <Flex>
          <Box>
            <Text>Project Details</Text>
              <Text> </Text>
          </Box>
        </Flex>
    </div>
  )
}


export default AdminHome