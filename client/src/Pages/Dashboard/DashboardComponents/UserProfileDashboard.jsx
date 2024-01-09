import React, { useEffect } from 'react'
import "../Dashboard.css"
import { Flex,Box,Text,Menu,MenuButton,MenuGroup,MenuDivider,MenuList,MenuItem,Avatar,Image, Select} from '@chakra-ui/react'
import { useState } from 'react'
import {GiPostStamp} from "react-icons/gi"
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
// import { baseUrl } from '../../Utils/BaseUrl'
import ProjectSummary from '../ProjectSummary'
import { Link } from 'react-router-dom'
import ClientHome from '../ClientHome'
import ClientTasks from '../ClientTasks'
import UpscallerLogo from '../../../Assets/Images/UpscallerLogo.png'
import ClientSprints from '../ClientSprints'
import GettingStarted from '../GettingStarted'
import { useTranslation, initReactI18next } from 'react-i18next';
import { baseUrl } from '../../../Utils/BaseUrl'
import ClientProfile from '../ClientProfile'



const UserProfileDashboard = () => {
    const [show,setShow]=useState("Users")
    const [profileData,setProfileData]=useState([])

    
const { t } = useTranslation();


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



<Box>
{
show==="users"?<ClientProfile data={profileData}/>:show==="sprints"?<ClientSprints data={profileData}/>:show==="gettingStarted"?<GettingStarted data={profileData}/>:<h1>{t('Fearture Available Soon')}</h1>
}
</Box>
</Flex>
  )
}

export default UserProfileDashboard