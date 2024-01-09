import { Box } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react'
import i18n from 'i18next';




const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');




    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang); 
        setSelectedLanguage(selectedLang);
      };



return (
    <Box>
          <Select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              width="80px"
              variant="outline"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="hi">Hindi</option>
            </Select>
    </Box>
  )
}

export default Language
