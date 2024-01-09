import React, { useEffect } from 'react'
import "./Dashboard.css"
import { Flex,Box,Text,Menu,MenuButton,MenuGroup,MenuDivider,MenuList,MenuItem,Avatar,Image, Select} from '@chakra-ui/react'
import { useState } from 'react'
import {GiPostStamp} from "react-icons/gi"
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { baseUrl } from '../../Utils/BaseUrl'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import ClientHome from './ClientHome'
import ClientTasks from './ClientTasks'
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.png'
import ClientSprints from './ClientSprints'
import GettingStarted from './GettingStarted'
import { useTranslation, initReactI18next } from 'react-i18next';



const Dashboard = () => {
    const [show,setShow]=useState("Users")
    const [profileData,setProfileData]=useState([])

    
    const { t } = useTranslation();
// console.log(profileData,'data')


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
            console.log(data,'profile data')
            setProfileData([data]);
          })
          .catch((error) => {
            console.error('Error fetching user profile:', error);
          });
      }
}, []); 




return (
<Flex w='100%'>
    <Box backgroundImage={'https://themewagon.github.io/pluto/images/layout_img/pattern_h.png'} backgroundColor="#15283c" id='lhsBox'  fontSize={[12,15,20]} w={["5%","5%","10%","16%"]} h='100vh' p={["0px","0px",'0px']}>
      <Flex justifyContent={'center'} p={'10px'} pt={'20px'}>
      {/* <Text color={'white'}>Upscaller</Text> */}
      <Image w={'70%'} m={'auto'} src={UpscallerLogo}/>
      </Flex>
      <Box id='linkBox' marginTop={'20px'} color={'white'}>
      <Text display={["none","none","none","block"]} pb={'5px'} color={'white'} pl={'10px'}>{t('General')}</Text>
      <hr />
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("create")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">{t('Tasks')}</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("sprints")}>
      <GiPostStamp/>
      <Text pl={["0px","5px",'15px']} className="lhsName">{t('Sprints')}</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("Users")}>
      <IoAnalyticsSharp />      
      <Text pl={["0px","5px",'15px']} className="lhsName">{t('Road Map')}</Text>
      </Flex>
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("gettingStarted")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">{t('Getting started')}</Text>
      </Flex>
      <Text display={["none","none","none","block"]} pb={'5px'} color={'white'} pl={'10px'} pt={'20px'}>{t('Development')}</Text>
      <hr />
      <Flex id='usersBox' _hover={{color:'black'}} p='10px 17px' className='linkItem' onClick={()=>setShow("track")}>
      <MdOutlineAccessTime />
      <Text pl={["0px","5px",'15px']} className="lhsName">{t('Code updates')}</Text>
      </Flex>
      </Box>
</Box>


{/* {
  profileData.length>0 && profileData.map(ele=>(
))
} */}
  <Box id='rhsBox' w='84%' ml='16%' h='auto' backgroundColor={'#f9f9f9'}> 
    <Box id='navbarBox' backgroundColor={'#15283c'} p='0px 40px' pb={'10px'} mb={'10px'}>
    <Flex justifyContent='space-between' pt={3} pb={8}>
    <Text fontWeight='bold'>{t("Welcome")}</Text>

    <Menu fontSize="20px" style={{color:'black',paddingBottom:"20px"}}>
            <MenuButton>
              <Avatar src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
            </MenuButton>
            <MenuList style={{color:'black'}}>
              <MenuGroup title={t('Profile')}>
                <Link to="/profileDashboard">
                <MenuItem>{t('My Account')}</MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title={t('Manage')} style={{color:'black'}}>
                <Link to="/profileDashboard">
                <MenuItem>{t('Setting & Privacy')}</MenuItem>
                </Link>
                <Link to='/profileDashboard'>
                <MenuItem>{t('Language')}</MenuItem>
                </Link>
                <MenuItem>{t('Logout')}</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
    </Flex>
    </Box>
  <Box id='rhsBody' m='30px' p='30px'>
{
show==="create"?<ClientTasks data={profileData}/>:show==="sprints"?<ClientSprints data={profileData}/>:show==="gettingStarted"?<GettingStarted data={profileData}/>:<h1>{t('Fearture Available Soon')}</h1>
}

</Box>
</Box>
</Flex>
  )
}

export default Dashboard