import React, { useEffect } from 'react'
import "../Dashboard/Dashboard.css"
import { Flex,Box,Text,Menu,MenuButton,MenuGroup,MenuDivider,MenuList,MenuItem,Avatar,Image, Select} from '@chakra-ui/react'
import { useState } from 'react'
import {GiPostStamp} from "react-icons/gi"
// import axios from 'axios'
// import Reports from './AdminHome'
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
// import UpscallerLogo from '../../Assets/Images/UpscallerLogo.png'
import { baseUrl } from '../../Utils/BaseUrl'
import { Link } from 'react-router-dom'
import Clients from './Clients'
import Projects from './AdminProjects'
import AdminProjects from './AdminProjects'
import ProjectForm from './ProjectForm'



const AdminDashboard = () => {
    const [show,setShow]=useState("Users")
    const [profileData,setProfileData]=useState([])
    const [selectedLanguage, setSelectedLanguage] = useState('en');
// console.log(profileData,'dddd')
const languageContent = require(`../lang${selectedLanguage}.json`);
useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        fetch(`${baseUrl}/user/userProfile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data,'profile data')
            setProfileData([data]);
          })
          .catch((error) => {
            console.error('Error fetching user profile:', error);
          });
      }
}, []); 

const handleLanguageChange = (event) => {
  const selectedLang = event.target.value;
  setSelectedLanguage(selectedLang);
};


return (
<Flex w='100%'>
    <Box backgroundImage={'https://themewagon.github.io/pluto/images/layout_img/pattern_h.png'} backgroundColor="#15283c" id='lhsBox'  fontSize={[12,15,20]} w={["5%","5%","10%","16%"]} h='100vh' p={["0px","0px",'0px']}>
      <Flex justifyContent={'center'} p={'10px'} pt={'20px'}>
      <Text color={'white'}>Upscaller</Text>
      </Flex>
      <Box id='linkBox' marginTop={'20px'} color={'white'}>
      <Text display={["none","none","none","block"]} pb={'5px'} color={'white'} pl={'10px'}>General</Text>
      <hr />
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("create")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">Clients</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("Projects")}>
      <GiPostStamp/>
      <Text pl={["0px","5px",'15px']} className="lhsName">Projects</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("Users")}>
      <IoAnalyticsSharp />      
      <Text pl={["0px","5px",'15px']} className="lhsName">Figma</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("track")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">A</Text>
      </Flex>
      </Box>



      <Box id='linkBox' marginTop={'20px'} color={'white'}>
      <Text display={["none","none","none","block"]} pb={'5px'} color={'white'} pl={'10px'}>History</Text>
      <hr />
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("create")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">Clients Data</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("Posts")}>
      <GiPostStamp/>
      <Text pl={["0px","5px",'15px']} className="lhsName">Projects Data</Text>
      </Flex>
      </Box>
</Box>


{/* {
  profileData.length>0 && profileData.map(ele=>(
))
} */}
  <Box id='rhsBox' w='84%' ml='16%' h='auto' backgroundColor={'#f9f9f9'}> 
    <Box id='navbarBox' backgroundColor={'#15283c'} p='0px 40px'>
    <Flex justifyContent='space-between' pt={3} mb={3}>
    <Text fontWeight='bold'>{languageContent.Welcome}</Text>
    {/* <Menu fontSize="20px" backgroundColor='black'>
            <MenuButton>
              <Avatar w={'30px'} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <Link to="/adminProfile">
                <MenuItem>My Account</MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Manage'>
                <Link to="/adminSetting">
                <MenuItem>Setting & Privacy</MenuItem>
                </Link>
                <MenuItem>Language</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu> */}
           <Select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              width="80px"
              variant="outline"
              color="white"
            >
              <option value="en">EN</option>
              <option value="hi">HI</option>
              {/* Add more languages as per your requirement */}
            </Select>
    </Flex>
    </Box>
  <Box id='rhsBody' m='30px' p='30px'>
{
show==="create"?<Clients data={profileData}/>:show==="Projects"?<AdminProjects data={profileData}/>: <h1>{languageContent.featureComingSoon}</h1>
}

</Box>
</Box>
</Flex>
  )
}

export default AdminDashboard