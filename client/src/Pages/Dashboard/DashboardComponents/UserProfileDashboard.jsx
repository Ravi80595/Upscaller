import React from 'react'
import "../Dashboard.css"
import { Flex,Box,Text,Image, Select} from '@chakra-ui/react'
import { useState } from 'react'
// import { baseUrl } from '../../Utils/BaseUrl'
import UpscallerLogo from '../../../Assets/Images/UpscallerLogo.png'
import { useTranslation, initReactI18next } from 'react-i18next';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { GrProjects } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { HiMiniLanguage } from "react-icons/hi2";
import i18n from 'i18next';


const UserProfileNavbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');




    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang); 
        setSelectedLanguage(selectedLang);
      };

    
const { t } = useTranslation();






return (
<>
<Flex>
    <Image src={UpscallerLogo} w={'250px'}/>
    <Text pt={'10px'}>Dalbir</Text>
</Flex>

<Flex fontSize={'20px'} w={'90%'} m={'auto'} mt={'50px'} gap={'40px'} mb={'5px'}> 
<Link to='/profile'>
    <Flex gap={'10px'}>
    <CgProfile />
    <Text mt={'-5px'}>Profile</Text>
    </Flex>
</Link>

<Link to='/clientProjects'>
    <Flex gap={'7px'}>
    <GrProjects />
    <Text mt={'-5px'}>Projects</Text>
    </Flex>
</Link>

<Link to='/profileSettings'>
    <Flex gap={'7px'}>
    <CiSettings />
    <Text mt={'-5px'}>Settings</Text>
    </Flex>
</Link>


{/* <Link to='/language'> */}
    <Flex gap={'7px'}>
    <HiMiniLanguage />
    <select style={{marginTop:'-7px'}}
          value={selectedLanguage}
          onChange={handleLanguageChange}
          width="80px"
          variant="outline"
          >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="hi">Hindi</option>
            </select>
    </Flex>
{/* </Link> */}
</Flex>
<hr />
</>
  )
}

export default UserProfileNavbar