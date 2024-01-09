import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, Text, Flex, Image, Select } from '@chakra-ui/react';

import UserProfileNavbar from './DashboardComponents/UserProfileDashboard';

const ClientProfile = () => {



  return (
    <>
     <UserProfileNavbar/>

      <Flex w='70%' m='auto' mt={'70px'}>
        <Box w={'20%'}> 
            <Image borderRadius={'50%'} w={'240px'} src='https://avatars.githubusercontent.com/u/63177572?v=4'/>
            <Text mt={'17px'} fontWeight={'bold'} fontSize={'20px'}>Ravi Sharma</Text>
            <Text mt={'15px'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, perferendis. Dicta maiores nemo expedita sit repellat fugiat similique. Reiciendis, id.
            </Text>
        </Box>
        <Box w={'78%'}>
          <Box w={'80%'} m={'auto'}>
            <Flex justifyContent={'space-between'}>
            <Input placeholder='Serach your project' w={'450px'}/>
            <Flex gap={'15px'}>
            <Select>
              <option value="Type">Type</option>
            </Select>
            <Button backgroundColor={'blue'} color={'white'} _hover={{color:"white"}}>New</Button>
            </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      </>
  );
};

export default ClientProfile;
