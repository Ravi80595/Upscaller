import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { baseUrl } from '../../Utils/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const ClientHome = () => {
  const [profileData,setProfileData]=useState([])
  const [projects,setProjects]=useState([])
  const navigate=useNavigate()



  console.log(projects,'data')
  
  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${baseUrl}/user/userProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData(response.data);
      if (response.data) {
        fetchProjectByUser();
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  }

const fetchProjectByUser= async () => {
  try {
    const response = await axios.get(`${baseUrl}/project/projectsByUser/${profileData._id}`);
    setProjects(response.data);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
  }
}


useEffect(()=>{
  fetchProfile()
},[])

const handleNavigate=(ele)=>{
  navigate(`/clientHome/${ele.title}`)
}

return (
    <Box background={'black'} height={'90vh'}>
      <Navbar/>
        <Box w={'90%'} m={'auto'} pt={'120px'} color={'white'}>
          <Flex justifyContent={'center'}>
           <Image w={'110px'} src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg'/>
          </Flex>
          <Text textAlign={'center'} fontSize={'22px'} mt={'10px'}>Good evening, {profileData.name}</Text>
          <Text textAlign={'center'}>Here's what is happening in Upscaller today.</Text>
        </Box>
        <Box w={'70%'} m={'auto'}>
          <Text color={'white'} mt={'71px'}>All Projects</Text>
        </Box>
        <Flex justifyContent={'center'}>
        {
          projects && projects.map(ele=>(
          <Box onClick={()=>handleNavigate(ele)} backgroundColor={'white'} textAlign={'center'} padding={'20px'} borderRadius={'15px'} >
            <Text fontSize={'26px'}>{ele.title}</Text>
            <Text>Sprints : {ele.sprints.length}</Text>
            <Text></Text>
          </Box>
          ))
        }
        </Flex>
    </Box>
  )
}


export default ClientHome